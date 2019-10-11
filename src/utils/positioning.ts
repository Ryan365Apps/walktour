
import { Coords, getElementCoords, dist, getElementDims, Dims } from "./dom";
import { getViewportCenter, addAppropriateOffset, applyCenterOffset } from "./offset";

export enum CardinalOrientation {
  EAST = 'east',
  SOUTH = 'south',
  WEST = 'west',
  NORTH = 'north',
  CENTER = 'center',
  EASTNORTH = 'east-north',
  EASTSOUTH = 'east-south',
  SOUTHEAST = 'south-east',
  SOUTHWEST = 'south-west',
  WESTSOUTH = 'west-south',
  WESTNORTH = 'west-north',
  NORTHWEST = 'north-west',
  NORTHEAST = 'north-east'
}

export interface OrientationCoords {
  orientation: CardinalOrientation;
  coords: Coords;
}

interface GetTooltipPositionArgs {
  target: HTMLElement;
  tooltip: HTMLElement;
  padding: number;
  tooltipSeparation: number;
  tourRoot: Element;
  orientationPreferences?: CardinalOrientation[];
  getPositionFromCandidates?: (candidates: OrientationCoords[]) => Coords;
}

function getTooltipPositionCandidates(target: HTMLElement, tooltip: HTMLElement, padding: number, tooltipDistance: number, includeAllPositions?: boolean): OrientationCoords[] {
  if (!target || !tooltip) {
    return;
  }

  const tooltipDims: Dims = getElementDims(tooltip);
  const targetCoords: Coords = getElementCoords(target);
  const targetDims: Dims = getElementDims(target);
  const centerX: number = targetCoords.x - ((tooltipDims.width - targetDims.width) / 2);
  const centerY: number = targetCoords.y - ((tooltipDims.height - targetDims.height) / 2);
  const eastOffset: number = targetCoords.x + targetDims.width + padding + tooltipDistance;
  const southOffset: number = targetCoords.y + targetDims.height + padding + tooltipDistance;
  const westOffset: number = targetCoords.x - tooltipDims.width - padding - tooltipDistance;
  const northOffset: number = targetCoords.y - tooltipDims.height - padding - tooltipDistance;

  const east: Coords = { x: eastOffset, y: centerY }
  const south: Coords = { x: centerX, y: southOffset }
  const west: Coords = { x: westOffset, y: centerY };
  const north: Coords = { x: centerX, y: northOffset };
  const center: Coords = applyCenterOffset(targetCoords, targetDims, tooltipDims);

  const standardPositions = [
    { orientation: CardinalOrientation.EAST, coords: east },
    { orientation: CardinalOrientation.SOUTH, coords: south },
    { orientation: CardinalOrientation.WEST, coords: west },
    { orientation: CardinalOrientation.NORTH, coords: north },
  ];

  let additionalPositions: OrientationCoords[];
  if (includeAllPositions) {
    const eastAlign: number = targetCoords.x - (tooltipDims.width - targetDims.width) + padding;
    const southAlign: number = targetCoords.y - (tooltipDims.height - targetDims.height) + padding;
    const westAlign: number = targetCoords.x - padding;
    const northAlign: number = targetCoords.y - padding;

    const eastNorth: Coords = { x: eastOffset, y: northAlign }
    const eastSouth: Coords = { x: eastOffset, y: southAlign }
    const southEast: Coords = { x: eastAlign, y: southOffset }
    const southWest: Coords = { x: westAlign, y: southOffset }
    const westSouth: Coords = { x: westOffset, y: southAlign }
    const westNorth: Coords = { x: westOffset, y: northAlign }
    const northWest: Coords = { x: westAlign, y: northOffset }
    const northEast: Coords = { x: eastAlign, y: northOffset }

    additionalPositions = [
      { orientation: CardinalOrientation.EASTNORTH, coords: eastNorth },
      { orientation: CardinalOrientation.EASTSOUTH, coords: eastSouth },
      { orientation: CardinalOrientation.SOUTHEAST, coords: southEast },
      { orientation: CardinalOrientation.SOUTHWEST, coords: southWest },
      { orientation: CardinalOrientation.WESTSOUTH, coords: westSouth },
      { orientation: CardinalOrientation.WESTNORTH, coords: westNorth },
      { orientation: CardinalOrientation.NORTHWEST, coords: northWest },
      { orientation: CardinalOrientation.NORTHEAST, coords: northEast }
    ]
  }

  return [
    ...standardPositions,
    ...additionalPositions,
    { orientation: CardinalOrientation.CENTER, coords: center }
  ]
}

// simple reducer who selects for coordinates closest to the current center of the viewport
function getCenterReducer(root: Element, tooltip: HTMLElement): ((acc: Coords, cur: OrientationCoords, ind: number, arr: OrientationCoords[]) => Coords) {
  const center: Coords = getViewportCenter(root, tooltip);

  return (acc: Coords, cur: OrientationCoords, ind: number, arr: OrientationCoords[]): Coords => {
    if (cur.orientation === CardinalOrientation.CENTER) { //ignore centered coords since those will always be closest to the center
      if (ind === arr.length - 1 && acc === undefined) { //unless  we're at the end and we still haven't picked a coord
        return cur.coords;
      } else {
        return acc;
      }
    } else if (acc === undefined) {
      return cur.coords;
    } else {
      if (dist(center, cur.coords) > dist(center, acc)) {
        return acc;
      } else {
        return cur.coords;
      }
    }
  }
}

function filterPreferredCandidates(candidates: OrientationCoords[], orientationPreferences?: CardinalOrientation[]): OrientationCoords[] {
  if (!orientationPreferences || orientationPreferences.length === 0) {
    return candidates;
  } else {
    const preferenceFilter = (cc: OrientationCoords) => orientationPreferences.indexOf(cc.orientation) !== -1;
    return candidates.filter(preferenceFilter);
  }
}

export function getTooltipPosition(args: GetTooltipPositionArgs): Coords {
  const { target, tooltip, padding, tooltipSeparation, orientationPreferences, getPositionFromCandidates, tourRoot } = args;
  const defaultPosition: Coords = addAppropriateOffset(tourRoot, getViewportCenter(tourRoot, tooltip));

  if (!tooltip || !tourRoot) {
    return;
  } else if (!target) {
    return defaultPosition;
  }

  const candidates: OrientationCoords[] = getTooltipPositionCandidates(target, tooltip, padding, tooltipSeparation, true);
  const choosePosition = getPositionFromCandidates || ((candidates: OrientationCoords[]) => candidates.reduce(getCenterReducer(tourRoot, tooltip), undefined));

  const rawPosition: Coords = choosePosition(filterPreferredCandidates(candidates, orientationPreferences)); //position relative to current viewport

  if (!rawPosition) {
    return defaultPosition;
  }

  return addAppropriateOffset(tourRoot, rawPosition);
}

export function getTargetPosition(root: Element, target: HTMLElement): Coords {
  return addAppropriateOffset(root, getElementCoords(target));
}