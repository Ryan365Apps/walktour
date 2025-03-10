import {jsx as $f3Ts0$jsx, jsxs as $f3Ts0$jsxs, Fragment as $f3Ts0$Fragment} from "react/jsx-runtime";
import {useState as $f3Ts0$useState, useRef as $f3Ts0$useRef, useEffect as $f3Ts0$useEffect} from "react";
import {createPortal as $f3Ts0$createPortal} from "react-dom";






const $96301362cf7e18dd$export$2e9b417052b9cf9a = 9;
const $96301362cf7e18dd$export$acea64b1933eb668 = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, [tabindex]:not([tabindex^="-"]):not([disabled]), [contenteditable]';





function $d9acba4dcfd99e46$export$dd288f276f209c41(root) {
    return {
        x: root.scrollLeft,
        y: root.scrollTop
    };
}
function $d9acba4dcfd99e46$export$a775a410672ed63c(root, coords) {
    const curOffset = $d9acba4dcfd99e46$export$dd288f276f209c41(root);
    return {
        x: coords.x + curOffset.x,
        y: coords.y + curOffset.y
    };
}
function $d9acba4dcfd99e46$export$430934ae19568046(root, coords) {
    if (!coords || !root) return;
    // if there's a custom root, then we need to offset by that root's positioning relative to the window
    // before adjusting for its scroll values
    if (!$d64876b425f82911$export$419ab5e26c450fc3(root)) {
        const rootCoords = $d64876b425f82911$export$ef5328c5d0eb9c72(root);
        return $d9acba4dcfd99e46$export$a775a410672ed63c(root, {
            x: coords.x - rootCoords.x,
            y: coords.y - rootCoords.y
        });
    } else return $d9acba4dcfd99e46$export$a775a410672ed63c(root, coords);
}
function $d9acba4dcfd99e46$export$a4ab1d3df2ef8875(aCoords, aDims, b) {
    return {
        x: aCoords.x + aDims.width / 2 - b.width / 2,
        y: aCoords.y + aDims.height / 2 - b.height / 2
    };
}
function $d9acba4dcfd99e46$export$a0d7885acfd4e9c7(root, a, b, aPosition, bPosition) {
    if (!root || !a || !b) return;
    const aCoords = aPosition || $d64876b425f82911$export$ef5328c5d0eb9c72(a);
    const bCoords = bPosition || $d64876b425f82911$export$ef5328c5d0eb9c72(b);
    const aDims = $d64876b425f82911$export$79d06a7c1f7c19a7(a);
    const bDims = $d64876b425f82911$export$79d06a7c1f7c19a7(b);
    const { coords: coords , dims: dims  } = $d64876b425f82911$export$7db4c71964185719(aCoords, aDims, bCoords, bDims);
    return $d9acba4dcfd99e46$export$bda7e4396715fc6a(root, coords, dims);
}
function $d9acba4dcfd99e46$export$bda7e4396715fc6a(root, coords, dims) {
    return $d9acba4dcfd99e46$export$a4ab1d3df2ef8875(coords, dims, $f2e9deeaafc7eb67$export$c6ede3dc83dbc6e9(root));
}
function $d9acba4dcfd99e46$export$444f2778cb89cc55(root, element) {
    const elementDims = $d64876b425f82911$export$79d06a7c1f7c19a7(element);
    const elementCoords = $d64876b425f82911$export$ef5328c5d0eb9c72(element);
    return $d9acba4dcfd99e46$export$bda7e4396715fc6a(root, elementCoords, elementDims);
}
function $d9acba4dcfd99e46$export$1222dddc82728b6a(root, element, atViewportPosition) {
    if (!root) return;
    const startCoords = atViewportPosition || $f2e9deeaafc7eb67$export$cf5a5470998eafae(root);
    const viewportDims = $f2e9deeaafc7eb67$export$c6ede3dc83dbc6e9(root);
    const elementDims = element ? $d64876b425f82911$export$79d06a7c1f7c19a7(element) : {
        height: 0,
        width: 0
    };
    return $d9acba4dcfd99e46$export$a4ab1d3df2ef8875(startCoords, viewportDims, elementDims);
}



var $80855a25311548c2$export$17997607e7979e9b;
(function(CardinalOrientation) {
    CardinalOrientation["EAST"] = 'east';
    CardinalOrientation["SOUTH"] = 'south';
    CardinalOrientation["WEST"] = 'west';
    CardinalOrientation["NORTH"] = 'north';
    CardinalOrientation["CENTER"] = 'center';
    CardinalOrientation["EASTNORTH"] = 'east-north';
    CardinalOrientation["EASTSOUTH"] = 'east-south';
    CardinalOrientation["SOUTHEAST"] = 'south-east';
    CardinalOrientation["SOUTHWEST"] = 'south-west';
    CardinalOrientation["WESTSOUTH"] = 'west-south';
    CardinalOrientation["WESTNORTH"] = 'west-north';
    CardinalOrientation["NORTHWEST"] = 'north-west';
    CardinalOrientation["NORTHEAST"] = 'north-east';
})($80855a25311548c2$export$17997607e7979e9b || ($80855a25311548c2$export$17997607e7979e9b = {
}));
function $80855a25311548c2$var$getTooltipPositionCandidates(target, tooltip, padding, tooltipDistance, includeAllPositions) {
    if (!target || !tooltip) return;
    const tooltipDims = $d64876b425f82911$export$79d06a7c1f7c19a7(tooltip);
    const targetCoords = $d64876b425f82911$export$ef5328c5d0eb9c72(target);
    const targetDims = $d64876b425f82911$export$79d06a7c1f7c19a7(target);
    const centerX = targetCoords.x - (tooltipDims.width - targetDims.width) / 2;
    const centerY = targetCoords.y - (tooltipDims.height - targetDims.height) / 2;
    const eastOffset = targetCoords.x + targetDims.width + padding + tooltipDistance;
    const southOffset = targetCoords.y + targetDims.height + padding + tooltipDistance;
    const westOffset = targetCoords.x - tooltipDims.width - padding - tooltipDistance;
    const northOffset = targetCoords.y - tooltipDims.height - padding - tooltipDistance;
    const east = {
        x: eastOffset,
        y: centerY
    };
    const south = {
        x: centerX,
        y: southOffset
    };
    const west = {
        x: westOffset,
        y: centerY
    };
    const north = {
        x: centerX,
        y: northOffset
    };
    const center = $d9acba4dcfd99e46$export$a4ab1d3df2ef8875(targetCoords, targetDims, tooltipDims);
    const standardPositions = [
        {
            orientation: $80855a25311548c2$export$17997607e7979e9b.EAST,
            coords: east
        },
        {
            orientation: $80855a25311548c2$export$17997607e7979e9b.SOUTH,
            coords: south
        },
        {
            orientation: $80855a25311548c2$export$17997607e7979e9b.WEST,
            coords: west
        },
        {
            orientation: $80855a25311548c2$export$17997607e7979e9b.NORTH,
            coords: north
        }, 
    ];
    let additionalPositions;
    if (includeAllPositions) {
        const eastAlign = targetCoords.x - (tooltipDims.width - targetDims.width) + padding;
        const southAlign = targetCoords.y - (tooltipDims.height - targetDims.height) + padding;
        const westAlign = targetCoords.x - padding;
        const northAlign = targetCoords.y - padding;
        const eastNorth = {
            x: eastOffset,
            y: northAlign
        };
        const eastSouth = {
            x: eastOffset,
            y: southAlign
        };
        const southEast = {
            x: eastAlign,
            y: southOffset
        };
        const southWest = {
            x: westAlign,
            y: southOffset
        };
        const westSouth = {
            x: westOffset,
            y: southAlign
        };
        const westNorth = {
            x: westOffset,
            y: northAlign
        };
        const northWest = {
            x: westAlign,
            y: northOffset
        };
        const northEast = {
            x: eastAlign,
            y: northOffset
        };
        additionalPositions = [
            {
                orientation: $80855a25311548c2$export$17997607e7979e9b.EASTNORTH,
                coords: eastNorth
            },
            {
                orientation: $80855a25311548c2$export$17997607e7979e9b.EASTSOUTH,
                coords: eastSouth
            },
            {
                orientation: $80855a25311548c2$export$17997607e7979e9b.SOUTHEAST,
                coords: southEast
            },
            {
                orientation: $80855a25311548c2$export$17997607e7979e9b.SOUTHWEST,
                coords: southWest
            },
            {
                orientation: $80855a25311548c2$export$17997607e7979e9b.WESTSOUTH,
                coords: westSouth
            },
            {
                orientation: $80855a25311548c2$export$17997607e7979e9b.WESTNORTH,
                coords: westNorth
            },
            {
                orientation: $80855a25311548c2$export$17997607e7979e9b.NORTHWEST,
                coords: northWest
            },
            {
                orientation: $80855a25311548c2$export$17997607e7979e9b.NORTHEAST,
                coords: northEast
            }
        ];
    }
    return [
        ...standardPositions,
        ...additionalPositions,
        {
            orientation: $80855a25311548c2$export$17997607e7979e9b.CENTER,
            coords: center
        }
    ];
}
// simple reducer who selects for coordinates closest to the current center of the viewport
function $80855a25311548c2$var$getCenterReducer(root, tooltip, target, predictViewport) {
    const currentCenter = $d9acba4dcfd99e46$export$1222dddc82728b6a(root, tooltip);
    // store the center of the predicted viewport location with the tooltip at acc
    // to have a meaningful distance comparison
    let accCenter = currentCenter;
    const getCenter = (coords)=>{
        if (predictViewport && (!$f2e9deeaafc7eb67$export$b0ee05d02dd6bfe1(root, target) || !$f2e9deeaafc7eb67$export$b0ee05d02dd6bfe1(root, tooltip, coords, true))) return $d9acba4dcfd99e46$export$1222dddc82728b6a(root, tooltip, $f2e9deeaafc7eb67$export$f94b3ff01764c98f(root, $d9acba4dcfd99e46$export$a0d7885acfd4e9c7(root, tooltip, target, coords)));
        else return currentCenter;
    };
    return (acc, cur, ind, arr)=>{
        if (cur.orientation === $80855a25311548c2$export$17997607e7979e9b.CENTER) {
            if (ind === arr.length - 1 && acc === undefined) return cur;
            else return acc;
        } else if (acc === undefined) {
            accCenter = getCenter(cur.coords);
            return cur;
        } else {
            const center = getCenter(cur.coords);
            if ($d64876b425f82911$export$6c4a311cc157c764(center, cur.coords) > $d64876b425f82911$export$6c4a311cc157c764(accCenter, acc.coords)) return acc;
            else {
                accCenter = center;
                return cur;
            }
        }
    };
}
// complex candidate reducer function that tries to place the tooltip as close to the center of the 
// screen as possible, even after the screen has scrolled to a particular location.
function $80855a25311548c2$var$chooseBestTooltipPosition(preferredCandidates, root, tooltip, target, scrollDisabled) {
    if (preferredCandidates.length === 1) //if there's only a single pref candidate, use that
    return preferredCandidates[0];
    else if (scrollDisabled) // if scrolling is disabled, there's not much we can do except use the naive center reducer
    return preferredCandidates.reduce($80855a25311548c2$var$getCenterReducer(root, tooltip, target, false), undefined);
    else {
        // scrolling is allowed, which means we have to figure out:
        // 1. what candidates are valid positions (not out of the scrolling root's bounds)
        // 2. which positions are absolutely compatible (allow both target & tooltip to fit within the viewport at the same time)
        // 3. which positions are currently compatible (allow both target & tooltip to fit with the CURRENT viewport)
        // 4. which of those positions is *best* - use same closest-to-center heuristic.
        // priority is 3 > 2 > 1 for the pool of positions from which 4 is chosen
        const viewportDims = $f2e9deeaafc7eb67$export$c6ede3dc83dbc6e9(root);
        const viewportScrollStart = $f2e9deeaafc7eb67$export$b4c4b4abed3d9138(root);
        const viewportCurrentStart = $f2e9deeaafc7eb67$export$cf5a5470998eafae(root);
        const viewportScrollEnd = $f2e9deeaafc7eb67$export$f8a1db598d32d350(root);
        const tooltipDims = $d64876b425f82911$export$79d06a7c1f7c19a7(tooltip);
        const targetDims = $d64876b425f82911$export$79d06a7c1f7c19a7(target);
        const targetCoords = $d64876b425f82911$export$ef5328c5d0eb9c72(target);
        const curriedGetCombinedData = (coords)=>$d64876b425f82911$export$7db4c71964185719(coords, tooltipDims, targetCoords, targetDims)
        ;
        const validPositions = preferredCandidates.filter($80855a25311548c2$var$getInBoundsFilter(tooltipDims, viewportScrollStart, viewportScrollEnd));
        const absoluteCompatiblePositions = validPositions.filter($80855a25311548c2$var$getAbsoluteCompatibleArrangementFilter(curriedGetCombinedData, viewportDims));
        const currentCompatiblePositions = absoluteCompatiblePositions.filter($80855a25311548c2$var$getCurrentInViewFilter(curriedGetCombinedData, viewportDims, viewportCurrentStart));
        // // if possible, use only those positions which don't force a scroll. Default back to those which can fit in the viewport, even if that means scrolling
        const compatiblePositions = currentCompatiblePositions.length > 0 ? currentCompatiblePositions : absoluteCompatiblePositions;
        // if there are NO compatible positions, the viewport is too small to accomodate both the target/tooltip, in any arrangement.
        // we default to our valid positions, even if that means placing the elements slightly off screen.
        const filteredList = compatiblePositions.length > 0 ? compatiblePositions : validPositions;
        return filteredList.reduce($80855a25311548c2$var$getCenterReducer(root, tooltip, target, true), undefined);
    }
}
// filter out any positions which would have the tooltip be out of the bounds of the root container 
// (i.e. in a position that the viewport can't "reach"/scroll to)
function $80855a25311548c2$var$getInBoundsFilter(tooltipDims, viewportScrollStart, viewportScrollEnd) {
    return (oc)=>{
        const coords = oc.coords;
        return !(coords.x < viewportScrollStart.x || coords.y < viewportScrollStart.y || coords.x + tooltipDims.width > viewportScrollEnd.x || coords.y + tooltipDims.height > viewportScrollEnd.y);
    };
}
// filters out any positions which would cause the target/tooltip to not fit within the viewport
function $80855a25311548c2$var$getAbsoluteCompatibleArrangementFilter(curriedGetCombinedData, viewportDims) {
    return (oc)=>{
        const coords = oc.coords;
        // we only care about the resultant dims but the input coords are critical here
        const { dims: combinedDims  } = curriedGetCombinedData(coords);
        return $d64876b425f82911$export$71182177f2c8f7eb(combinedDims, viewportDims);
    };
}
function $80855a25311548c2$var$getCurrentInViewFilter(curriedGetCombinedData, viewportDims, viewportCurrentStart) {
    return (oc)=>{
        const coords = oc.coords;
        const { dims: combinedDims , coords: combinedCoords  } = curriedGetCombinedData(coords);
        return $d64876b425f82911$export$5d4677df95f71444(combinedDims, viewportDims, combinedCoords, viewportCurrentStart);
    };
}
function $80855a25311548c2$var$getPreferredCandidates(candidates, orientationPreferences) {
    if (!orientationPreferences || orientationPreferences.length === 0) return candidates;
    else if (orientationPreferences.length === 1) {
        const specifiedCandidate = candidates.find((oc)=>oc.orientation === orientationPreferences[0]
        );
        if (specifiedCandidate) return [
            specifiedCandidate
        ];
        else return candidates; // if the specified orientation isn't available for whatever reason, default to standard behavior
    } else {
        const preferenceFilter = (cc)=>orientationPreferences.indexOf(cc.orientation) !== -1
        ;
        return candidates.filter(preferenceFilter);
    }
}
function $80855a25311548c2$var$restrictToCurrentViewport(root, coords, dims, padding) {
    if (!root) return coords;
    const viewportStart = $d9acba4dcfd99e46$export$dd288f276f209c41(root);
    const viewportDims = $f2e9deeaafc7eb67$export$c6ede3dc83dbc6e9(root);
    const viewportEnd = {
        x: viewportStart.x + viewportDims.width,
        y: viewportStart.y + viewportDims.height
    };
    const sx = viewportStart.x + padding;
    const sy = viewportStart.y + padding;
    const ex = viewportEnd.x - dims.width - padding;
    const ey = viewportEnd.y - dims.height - padding;
    let x = coords.x;
    let y = coords.y;
    if (coords.x < sx) x = sx;
    else if (coords.x + dims.width > ex) x = ex;
    if (coords.y < sy) y = sy;
    else if (coords.y + dims.height > ey) y = ey;
    return {
        x: x,
        y: y
    };
}
function $80855a25311548c2$export$9a2c00effd7508cb(args) {
    const { target: target , tooltip: tooltip , padding: padding , tooltipSeparation: tooltipSeparation , orientationPreferences: orientationPreferences , getPositionFromCandidates: getPositionFromCandidates , root: tourRoot , disableAutoScroll: scrollDisabled , allowForeignTarget: allowForeignTarget , selector: selector  } = args;
    const center = target ? $d9acba4dcfd99e46$export$1222dddc82728b6a(tourRoot, tooltip, $f2e9deeaafc7eb67$export$f94b3ff01764c98f(tourRoot, $d9acba4dcfd99e46$export$444f2778cb89cc55(tourRoot, target))) : $d9acba4dcfd99e46$export$1222dddc82728b6a(tourRoot, tooltip);
    const defaultPosition = $d9acba4dcfd99e46$export$430934ae19568046(tourRoot, center);
    if (!tooltip || !tourRoot) return;
    if (!target) return {
        orientation: null,
        coords: defaultPosition
    };
    const foreignTarget = allowForeignTarget && $d64876b425f82911$export$71c76d60f158144(tourRoot, selector);
    const noScroll = scrollDisabled || foreignTarget;
    const candidates = $80855a25311548c2$var$getTooltipPositionCandidates(target, tooltip, padding, tooltipSeparation, true);
    const choosePosition = getPositionFromCandidates || ((cans)=>$80855a25311548c2$var$chooseBestTooltipPosition(cans, tourRoot, tooltip, target, noScroll)
    );
    const rawPosition = choosePosition($80855a25311548c2$var$getPreferredCandidates(candidates, orientationPreferences)); //position relative to current viewport
    if (!rawPosition) return {
        orientation: $80855a25311548c2$export$17997607e7979e9b.CENTER,
        coords: defaultPosition
    };
    const adjustedPosition = {
        orientation: rawPosition.orientation,
        coords: $d9acba4dcfd99e46$export$430934ae19568046(tourRoot, rawPosition.coords)
    };
    if (foreignTarget) return {
        orientation: adjustedPosition.orientation,
        coords: $80855a25311548c2$var$restrictToCurrentViewport(tourRoot, adjustedPosition.coords, $d64876b425f82911$export$79d06a7c1f7c19a7(tooltip), padding + tooltipSeparation)
    };
    return adjustedPosition;
}
function $80855a25311548c2$export$2952c3b2d86d9aa2(root, target) {
    return $d9acba4dcfd99e46$export$430934ae19568046(root, $d64876b425f82911$export$ef5328c5d0eb9c72(target));
}


function $d64876b425f82911$export$d7554ab90e9d17f9(coords) {
    if (!coords) return false;
    else if (!coords.x && coords.x !== 0 || !coords.y && coords.y !== 0) return false;
    else return true;
}
function $d64876b425f82911$export$adc64d167c373487(dims) {
    if (!dims) return false;
    else if (!dims.height && dims.height !== 0 || !dims.width && dims.height !== 0) return false;
    else if (dims.height < 0 || dims.width < 0) return false;
    else return true;
}
function $d64876b425f82911$export$6c4a311cc157c764(a, b) {
    if (!$d64876b425f82911$export$d7554ab90e9d17f9(a) || !$d64876b425f82911$export$d7554ab90e9d17f9(b)) return;
    return Math.sqrt(Math.pow(Math.abs(a.x - b.x), 2) + Math.pow(Math.abs(a.y - b.y), 2));
}
function $d64876b425f82911$export$22b7a610826e0571(a, b) {
    if (!$d64876b425f82911$export$adc64d167c373487(a) || !$d64876b425f82911$export$adc64d167c373487(b)) return;
    return Math.abs(a.height * a.width - b.height * b.width);
}
function $d64876b425f82911$export$ef5328c5d0eb9c72(element) {
    if (!element) return;
    const elementData = element.getBoundingClientRect();
    return {
        x: elementData.left,
        y: elementData.top
    };
}
function $d64876b425f82911$export$79d06a7c1f7c19a7(element) {
    if (!element) return;
    const elementData = element.getBoundingClientRect();
    return {
        width: elementData.width,
        height: elementData.height
    };
}
function $d64876b425f82911$export$e6a63138435cb7d8(element) {
    const regex = /(auto|scroll)/;
    const style = (el, prop)=>getComputedStyle(el, null).getPropertyValue(prop)
    ;
    const scroll = (el)=>regex.test(style(el, "overflow") + style(el, "overflow-y") + style(el, "overflow-x"))
    ;
    if (!element || $d64876b425f82911$export$419ab5e26c450fc3(element)) return $d64876b425f82911$export$95d7a7cb6d0b752e();
    else {
        if (scroll(element)) return element;
        else return $d64876b425f82911$export$e6a63138435cb7d8(element.parentElement);
    }
}
function $d64876b425f82911$export$95d7a7cb6d0b752e() {
    const windowStart = window.pageYOffset; //slightly better support than scrollY
    document.documentElement.scrollTop = windowStart + 1;
    if (window.pageXOffset > windowStart) {
        document.documentElement.scrollTop = windowStart; //reset
        return document.documentElement;
    } else return document.scrollingElement || document.body;
}
function $d64876b425f82911$export$419ab5e26c450fc3(root) {
    return root.isSameNode(document.body) || root.isSameNode(document.scrollingElement) || root.isSameNode(document.documentElement);
}
function $d64876b425f82911$export$bce1a5eda244692c(root) {
    // check for the potential default scrolling elements that might be returned from the above function
    if ($d64876b425f82911$export$419ab5e26c450fc3(root)) return document.body;
    else return root;
}
function $d64876b425f82911$export$7db4c71964185719(aCoords, aDims, bCoords, bDims) {
    // generates similar data as getBoundingClientRect but using hypothetical positions
    const generateBounds = (coords, dims)=>{
        return {
            left: coords.x,
            right: coords.x + dims.width,
            top: coords.y,
            bottom: coords.y + dims.height
        };
    };
    const mostExtreme = (a, b, largest)=>{
        return a > b ? largest ? a : b : largest ? b : a;
    };
    const aBounds = generateBounds(aCoords, aDims);
    const bBounds = generateBounds(bCoords, bDims);
    const left = mostExtreme(aBounds.left, bBounds.left, false);
    const right = mostExtreme(aBounds.right, bBounds.right, true);
    const top = mostExtreme(aBounds.top, bBounds.top, false);
    const bottom = mostExtreme(aBounds.bottom, bBounds.bottom, true);
    return {
        coords: {
            x: left,
            y: top
        },
        dims: {
            height: bottom - top,
            width: right - left
        }
    };
}
function $d64876b425f82911$export$71182177f2c8f7eb(aDims, bDims) {
    if (!$d64876b425f82911$export$adc64d167c373487(aDims) || !$d64876b425f82911$export$adc64d167c373487(bDims)) return false;
    return aDims.height <= bDims.height && aDims.width <= bDims.width;
}
function $d64876b425f82911$export$5d4677df95f71444(aDims, bDims, aCoords, bCoords) {
    if (!$d64876b425f82911$export$adc64d167c373487(aDims) || !$d64876b425f82911$export$adc64d167c373487(bDims)) return false;
    const validCoordsA = $d64876b425f82911$export$d7554ab90e9d17f9(aCoords) ? aCoords : {
        x: 0,
        y: 0
    };
    const validCoordsB = $d64876b425f82911$export$d7554ab90e9d17f9(bCoords) ? bCoords : {
        x: 0,
        y: 0
    };
    const fitsDims = $d64876b425f82911$export$71182177f2c8f7eb(aDims, bDims);
    const fitsHorizontally = validCoordsA.x >= validCoordsB.x && validCoordsA.x + aDims.width <= validCoordsB.x + bDims.width;
    const fitsVertically = validCoordsA.y >= validCoordsB.y && validCoordsA.y + aDims.height <= validCoordsB.y + bDims.height;
    return fitsDims && fitsHorizontally && fitsVertically;
}
function $d64876b425f82911$export$433aaa1f216cf32d(root, includeSelf) {
    const focusableChildren = root.querySelectorAll($96301362cf7e18dd$export$acea64b1933eb668);
    let array = [];
    if (includeSelf && root.matches($96301362cf7e18dd$export$acea64b1933eb668)) array.push(root);
    if (focusableChildren.length > 0) focusableChildren.forEach((el)=>array.push(el)
    );
    return array;
}
function $d64876b425f82911$export$a24cd78cd8382070(defaultElement, container, includeSelf) {
    if (container) {
        const containerFocusables = $d64876b425f82911$export$433aaa1f216cf32d(container, includeSelf);
        if (containerFocusables.length > 0) return {
            start: containerFocusables[0],
            end: containerFocusables[containerFocusables.length - 1]
        };
    }
    return {
        start: defaultElement,
        end: defaultElement
    };
}
function $d64876b425f82911$export$3abef78aae9f014d(root, target) {
    if (!root || !target) return;
    const dims = $d64876b425f82911$export$79d06a7c1f7c19a7(target);
    const coords = $80855a25311548c2$export$2952c3b2d86d9aa2(root, target);
    return {
        coords: coords,
        dims: dims
    };
}
function $d64876b425f82911$export$71c76d60f158144(root, selector) {
    return !root.querySelector(selector);
}



function $f2e9deeaafc7eb67$export$4f01c15d21ef9cc6(root) {
    return root.clientHeight;
}
function $f2e9deeaafc7eb67$export$a497a1dcb4408212(root) {
    return root.clientWidth;
}
function $f2e9deeaafc7eb67$export$c6ede3dc83dbc6e9(root) {
    return {
        width: $f2e9deeaafc7eb67$export$a497a1dcb4408212(root),
        height: $f2e9deeaafc7eb67$export$4f01c15d21ef9cc6(root)
    };
}
function $f2e9deeaafc7eb67$export$bdaa4181fdecf79e(root) {
    return root.scrollHeight;
}
function $f2e9deeaafc7eb67$export$d5083ddaa818f28d(root) {
    return root.scrollWidth;
}
function $f2e9deeaafc7eb67$export$db45b410fec7ea5f(root) {
    return {
        width: $f2e9deeaafc7eb67$export$d5083ddaa818f28d(root),
        height: $f2e9deeaafc7eb67$export$bdaa4181fdecf79e(root)
    };
}
function $f2e9deeaafc7eb67$export$cf5a5470998eafae(root) {
    if ($d64876b425f82911$export$419ab5e26c450fc3(root)) return {
        x: 0,
        y: 0
    };
    else return $d64876b425f82911$export$ef5328c5d0eb9c72(root);
}
function $f2e9deeaafc7eb67$export$b4f7820fc9fe2c32(root) {
    const startCoords = $f2e9deeaafc7eb67$export$cf5a5470998eafae(root);
    return {
        x: startCoords.x + $f2e9deeaafc7eb67$export$a497a1dcb4408212(root),
        y: startCoords.y + $f2e9deeaafc7eb67$export$4f01c15d21ef9cc6(root)
    };
}
function $f2e9deeaafc7eb67$export$b4c4b4abed3d9138(root) {
    const curScrollOffset = $d9acba4dcfd99e46$export$dd288f276f209c41(root);
    const start = $f2e9deeaafc7eb67$export$cf5a5470998eafae(root);
    return {
        x: start.x - curScrollOffset.x,
        y: start.y - curScrollOffset.y
    };
}
function $f2e9deeaafc7eb67$export$f8a1db598d32d350(root) {
    const startCoords = $f2e9deeaafc7eb67$export$b4c4b4abed3d9138(root);
    const { width: width , height: height  } = $f2e9deeaafc7eb67$export$db45b410fec7ea5f(root);
    return {
        x: startCoords.x + width,
        y: startCoords.y + height
    };
}
function $f2e9deeaafc7eb67$export$b0ee05d02dd6bfe1(root, element, atPosition, needsAdjusting) {
    if (!root || !element) return false;
    const explicitPosition = atPosition && (needsAdjusting ? $d9acba4dcfd99e46$export$430934ae19568046(root, atPosition) : atPosition);
    const position = explicitPosition || $d9acba4dcfd99e46$export$430934ae19568046(root, $d64876b425f82911$export$ef5328c5d0eb9c72(element));
    const elementDims = $d64876b425f82911$export$79d06a7c1f7c19a7(element);
    const startCoords = $d9acba4dcfd99e46$export$430934ae19568046(root, $f2e9deeaafc7eb67$export$cf5a5470998eafae(root));
    const viewportDims = $f2e9deeaafc7eb67$export$c6ede3dc83dbc6e9(root);
    return $d64876b425f82911$export$5d4677df95f71444(elementDims, viewportDims, position, startCoords);
}
function $f2e9deeaafc7eb67$export$f94b3ff01764c98f(root, scrollDestination) {
    const dims = $f2e9deeaafc7eb67$export$c6ede3dc83dbc6e9(root);
    const startCoords = $f2e9deeaafc7eb67$export$b4c4b4abed3d9138(root);
    const endCoords = $f2e9deeaafc7eb67$export$f8a1db598d32d350(root);
    const rightmost = endCoords.x - dims.width;
    const bottommost = endCoords.y - dims.height;
    let coords = scrollDestination;
    if (scrollDestination.x < startCoords.x) coords.x = startCoords.x;
    else if (scrollDestination.x > rightmost) coords.x = rightmost;
    else coords.x = scrollDestination.x;
    if (scrollDestination.y < startCoords.y) coords.y = startCoords.y;
    else if (scrollDestination.y > bottommost) coords.y = bottommost;
    else coords.y = scrollDestination.y;
    return coords;
}


function $53a175a5d1c3ad4d$export$991dcf7284de63d(props) {
    const { targetInfo: targetInfo , disableMaskInteraction: disableMaskInteraction , padding: padding , radius: radius , tourRoot: tourRoot , close: close , disableCloseOnClick: disableCloseOnClick , maskId: maskId  } = props;
    const { width: containerWidth , height: containerHeight  } = $f2e9deeaafc7eb67$export$db45b410fec7ea5f(tourRoot);
    const pathId = `clip-path-${maskId}`;
    const getCutoutPath = (target)=>{
        if (!target) return '';
        const { dims: dims , coords: coords  } = target;
        const cutoutTop = coords.y - padding;
        const cutoutLeft = coords.x - padding;
        const cutoutRight = coords.x + dims.width + padding;
        const cutoutBottom = coords.y + dims.height + padding;
        if (radius > 0) return `M 0, 0
              L 0, ${containerHeight}
              L ${cutoutLeft}, ${containerHeight}
              L ${cutoutLeft}, ${cutoutTop + radius}
              Q ${cutoutLeft}, ${cutoutTop}, ${cutoutLeft + radius}, ${cutoutTop}
              L ${cutoutRight - radius}, ${cutoutTop}
              Q ${cutoutRight}, ${cutoutTop}, ${cutoutRight}, ${cutoutTop + radius}
              L ${cutoutRight}, ${cutoutBottom - radius}
              Q ${cutoutRight}, ${cutoutBottom}, ${cutoutRight - radius}, ${cutoutBottom}
              L ${cutoutLeft + radius}, ${cutoutBottom}
              Q ${cutoutLeft}, ${cutoutBottom}, ${cutoutLeft}, ${cutoutBottom - radius}
              L ${cutoutLeft}, ${containerHeight}
              L ${containerWidth}, ${containerHeight}
              L ${containerWidth}, 0`;
        return `M 0, 0
            L 0, ${containerHeight}
            L ${cutoutLeft}, ${containerHeight}
            L ${cutoutLeft}, ${cutoutTop}
            L ${cutoutRight}, ${cutoutTop}
            L ${cutoutRight}, ${cutoutBottom}
            L ${cutoutLeft}, ${cutoutBottom}
            L ${cutoutLeft}, ${containerHeight}
            L ${containerWidth}, ${containerHeight}
            L ${containerWidth}, 0`;
    };
    const svgStyle = {
        height: containerHeight,
        width: containerWidth,
        pointerEvents: disableMaskInteraction ? 'auto' : 'none'
    };
    return(/*#__PURE__*/ $f3Ts0$jsxs("svg", {
        style: svgStyle,
        children: [
            targetInfo && /*#__PURE__*/ $f3Ts0$jsx("defs", {
                children: /*#__PURE__*/ $f3Ts0$jsx("clipPath", {
                    id: pathId,
                    children: /*#__PURE__*/ $f3Ts0$jsx("path", {
                        d: getCutoutPath(targetInfo)
                    })
                })
            }),
            /*#__PURE__*/ $f3Ts0$jsx("rect", {
                onClick: disableCloseOnClick ? undefined : close,
                x: 0,
                y: 0,
                width: containerWidth,
                height: containerHeight,
                fill: "black",
                fillOpacity: 0.3,
                pointerEvents: "auto",
                clipPath: targetInfo ? `url(#${pathId})` : undefined
            })
        ]
    }));
}




const $2acef720dfa55e67$var$contentMargin = 4;
const $2acef720dfa55e67$var$baseButtonStyle = {
    cursor: 'pointer',
    padding: '4px 16px',
    textAlign: 'center',
    border: 0,
    borderRadius: 3,
    backgroundColor: '#0084ff',
    color: '#fff',
    fontSize: 14,
    margin: $2acef720dfa55e67$var$contentMargin
};
const $2acef720dfa55e67$export$214b055320e0bf32 = {
    tooltip: {
        display: 'flex',
        flexDirection: 'column',
        zIndex: 9999,
        // fontFamily: 'Roboto, sans-serif',
        // fontSize: 14,
        backgroundColor: 'white',
        // padding: '10px 10px 5px 10px',
        borderRadius: '5px',
        boxShadow: '0 3px 8px 0 rgba(0,0,0,.25)'
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: $2acef720dfa55e67$var$contentMargin
    },
    title: {
        margin: $2acef720dfa55e67$var$contentMargin,
        fontSize: 24
    },
    description: {
        margin: $2acef720dfa55e67$var$contentMargin
    },
    primaryButton: {
        ...$2acef720dfa55e67$var$baseButtonStyle,
        backgroundColor: "#0084ff",
        color: "#ffffff"
    },
    secondaryButton: {
        ...$2acef720dfa55e67$var$baseButtonStyle,
        backgroundColor: "#8400ff",
        color: "#fff",
        border: "solid 1px #8400ff"
    },
    tertiaryButton: {
        ...$2acef720dfa55e67$var$baseButtonStyle,
        marginRight: 'auto',
        backgroundColor: `transparent`,
        color: "#025c53",
        border: "solid 1px #025c53"
    },
    disabledButton: {
        ...$2acef720dfa55e67$var$baseButtonStyle,
        backgroundColor: "#bebebe",
        color: "#989898",
        cursor: "default"
    }
};


function $bbdfcdc82b4594cb$export$28c660c63b792dea(props) {
    const { next: next , prev: prev , close: close , stepContent: { title: title , description: description , customTitleRenderer: customTitleRenderer , customDescriptionRenderer: customDescriptionRenderer , customFooterRenderer: customFooterRenderer , disableClose: disableClose , disableNext: disableNext , disablePrev: disablePrev , nextLabel: nextLabel , prevLabel: prevLabel , closeLabel: closeLabel ,  } , stepIndex: stepIndex , allSteps: allSteps , styles: styles ,  } = {
        styles: $2acef720dfa55e67$export$214b055320e0bf32,
        ...props
    };
    const tooltipStyle = {
        ...styles.tooltip
    };
    const prevDisabled = disablePrev !== undefined ? disablePrev : stepIndex === 0;
    const nextDisabled = disableNext !== undefined ? disableNext : stepIndex + 1 === allSteps.length;
    return(/*#__PURE__*/ $f3Ts0$jsxs("div", {
        style: tooltipStyle,
        children: [
            customTitleRenderer ? customTitleRenderer(title, props) : title && /*#__PURE__*/ $f3Ts0$jsx("div", {
                style: styles.title,
                children: title
            }),
            customDescriptionRenderer ? customDescriptionRenderer(description, props) : /*#__PURE__*/ $f3Ts0$jsx("div", {
                style: styles.description,
                children: description
            }),
            customFooterRenderer ? customFooterRenderer(props) : /*#__PURE__*/ $f3Ts0$jsxs("div", {
                style: styles.footer,
                children: [
                    /*#__PURE__*/ $f3Ts0$jsx("button", {
                        onClick: ()=>close()
                        ,
                        style: {
                            ...styles.tertiaryButton,
                            ...disableClose && styles.disabledButton
                        },
                        disabled: disableClose,
                        children: closeLabel || "close"
                    }),
                    /*#__PURE__*/ $f3Ts0$jsx("button", {
                        onClick: prev,
                        disabled: prevDisabled,
                        style: {
                            ...styles.secondaryButton,
                            ...prevDisabled && styles.disabledButton
                        },
                        children: prevLabel || "prev"
                    }),
                    /*#__PURE__*/ $f3Ts0$jsx("button", {
                        onClick: ()=>next()
                        ,
                        disabled: nextDisabled,
                        style: {
                            ...styles.primaryButton,
                            ...nextDisabled && styles.disabledButton
                        },
                        children: nextLabel || "next"
                    })
                ]
            })
        ]
    }));
}





function $12e5d8b76e0bec7c$export$2353115f31f4d15(root, element, disableSmoothScrolling) {
    if (!root || !element) return;
    const coords = $d9acba4dcfd99e46$export$430934ae19568046(root, $d9acba4dcfd99e46$export$444f2778cb89cc55(root, element));
    $12e5d8b76e0bec7c$export$f813b596fbb754ff(root, coords, disableSmoothScrolling);
}
function $12e5d8b76e0bec7c$export$f813b596fbb754ff(root, destination, disableSmoothScrolling) {
    if (!root || !destination) return;
    // check if the 'scrollBehavior' property is supported. Support for this property is consistent
    // with support for scrollToOptions, and if it's supported we can scroll smoothly
    const smoothScrollingIsSupported = 'scrollBehavior' in document.documentElement.style;
    if (smoothScrollingIsSupported && !disableSmoothScrolling) {
        const scrollOptions = {
            top: destination.y,
            left: destination.x,
            behavior: 'smooth'
        };
        root.scrollTo(scrollOptions);
    } else {
        root.scrollTop = destination.y;
        root.scrollLeft = destination.x;
    }
}







function $6360593a613062e0$export$61fc7d43ac8f84b0(f, interval = 300) {
    let timeoutId;
    return (...args)=>{
        if (timeoutId) window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(()=>f(...args)
        , interval);
    };
}
function $6360593a613062e0$export$ec4b868a2e3a65e8(base, identifier) {
    return `${base}${identifier ? `-${identifier}` : ``}`;
}
function $6360593a613062e0$export$10cb34243a926c8(callback, interval) {
    const intervalId = window.setInterval(callback, interval);
    return ()=>window.clearInterval(intervalId)
    ;
}
function $6360593a613062e0$export$614902ffce9c647a(args) {
    const { update: update , customSetListener: customSetListener , customRemoveListener: customRemoveListener , event: event  } = {
        event: 'resize',
        ...args
    };
    if (customSetListener && customRemoveListener) {
        customSetListener(update);
        return ()=>customRemoveListener(update)
        ;
    } else {
        window.addEventListener(event, update);
        return ()=>window.removeEventListener(event, update)
        ;
    }
}
// helper function to create a keyboard focus trap, potentially including multiple elements
function $6360593a613062e0$var$getFocusTrapHandler(args) {
    const { start: start , end: end , beforeStart: beforeStart , afterEnd: afterEnd , lightningRod: lightningRod  } = args;
    return (e)=>{
        if (e.keyCode === $96301362cf7e18dd$export$2e9b417052b9cf9a) {
            if (e.shiftKey && e.target === start) {
                e.preventDefault();
                beforeStart ? beforeStart.focus() : end.focus();
            } else if (!e.shiftKey && e.target === end) {
                e.preventDefault();
                afterEnd ? afterEnd.focus() : start.focus();
            } else if (e.target === lightningRod) {
                e.preventDefault();
                start.focus();
            }
        }
    };
}
const $6360593a613062e0$export$5a96a0533d18cc6b = (tooltipContainer, target, disableMaskInteraction)=>{
    if (!tooltipContainer) return;
    const { start: tooltipFirst , end: tooltipLast  } = $d64876b425f82911$export$a24cd78cd8382070(tooltipContainer, tooltipContainer);
    const { start: targetFirst , end: targetLast  } = $d64876b425f82911$export$a24cd78cd8382070(undefined, target, true);
    let tooltipBeforeStart;
    let tooltipAfterEnd;
    let targetTrapHandler;
    if (target && !disableMaskInteraction && targetFirst && targetLast) {
        tooltipAfterEnd = targetFirst;
        tooltipBeforeStart = targetLast;
        targetTrapHandler = $6360593a613062e0$var$getFocusTrapHandler({
            start: targetFirst,
            end: targetLast,
            beforeStart: tooltipLast,
            afterEnd: tooltipFirst
        });
        target.addEventListener('keydown', targetTrapHandler);
    }
    const tooltipTrapHandler = $6360593a613062e0$var$getFocusTrapHandler({
        start: tooltipFirst,
        end: tooltipLast,
        beforeStart: tooltipBeforeStart,
        afterEnd: tooltipAfterEnd,
        lightningRod: tooltipContainer
    });
    tooltipContainer.addEventListener('keydown', tooltipTrapHandler);
    return ()=>{
        if (target) target.removeEventListener('keydown', targetTrapHandler);
        tooltipContainer.removeEventListener('keydown', tooltipTrapHandler);
    };
};
function $6360593a613062e0$var$naiveShouldScroll(args) {
    const { root: root , tooltip: tooltip , tooltipPosition: tooltipPosition , target: target  } = args;
    if (!$f2e9deeaafc7eb67$export$b0ee05d02dd6bfe1(root, tooltip, tooltipPosition)) return true;
    if (!$f2e9deeaafc7eb67$export$b0ee05d02dd6bfe1(root, target)) return $d64876b425f82911$export$71182177f2c8f7eb($d64876b425f82911$export$79d06a7c1f7c19a7(target), $f2e9deeaafc7eb67$export$c6ede3dc83dbc6e9(root));
    return false;
}
function $6360593a613062e0$export$d78ff247300e1ac2(args) {
    const { root: root , tooltip: tooltip , target: target , disableAutoScroll: disableAutoScroll , allowForeignTarget: allowForeignTarget , selector: targetSelector  } = args;
    if (!root || !tooltip || !target) return false;
    if (disableAutoScroll) return false;
    if (allowForeignTarget && targetSelector) return !$d64876b425f82911$export$71c76d60f158144(root, targetSelector);
    return $6360593a613062e0$var$naiveShouldScroll({
        ...args
    });
}
function $6360593a613062e0$export$60b7fba4c20ebfeb(args) {
    const { root: root , target: target , targetCoords: targetCoords , targetDims: targetDims , rerenderTolerance: rerenderTolerance  } = args;
    if (!target && !targetCoords && !targetDims) return false;
    // when the target / target data are out of sync. usually due to a movingTarget, i.e. the target arg is more up to date than the pos/dims args
    if (!target && targetCoords && targetDims || target && !targetCoords && !targetDims) return true;
    const currentTargetSize = $d64876b425f82911$export$79d06a7c1f7c19a7(target);
    const currentTargetPosition = $80855a25311548c2$export$2952c3b2d86d9aa2(root, target);
    const sizeChanged = $d64876b425f82911$export$22b7a610826e0571(currentTargetSize, targetDims) > rerenderTolerance;
    const positionChanged = $d64876b425f82911$export$6c4a311cc157c764(currentTargetPosition, targetCoords) > rerenderTolerance;
    return sizeChanged || positionChanged;
}
function $6360593a613062e0$export$5aae9ac432f50d84(args) {
    const { target: target , root: root , tooltip: tooltip , tooltipPosition: currentPosition  } = args;
    if (target || !root || !tooltip) return false;
    const newPosition = $80855a25311548c2$export$9a2c00effd7508cb({
        ...args
    });
    // if there's a difference between the newly calculated position and the current position, we need to update
    return $d64876b425f82911$export$6c4a311cc157c764(newPosition.coords, currentPosition) !== 0;
}
function $6360593a613062e0$export$ea8391e230935df(args) {
    const { root: root , tooltip: tooltip  } = args;
    if (!root || !tooltip) return false; // bail if these aren't present; need them for calculations
    return $6360593a613062e0$export$60b7fba4c20ebfeb({
        ...args
    }) || $6360593a613062e0$export$d78ff247300e1ac2({
        ...args
    }) || $6360593a613062e0$export$5aae9ac432f50d84({
        ...args
    });
}
const $6360593a613062e0$export$b33bc920614c9da5 = async (action, actionValidator)=>{
    if (actionValidator) {
        const valid = await actionValidator();
        if (valid) action();
    } else action();
};
const $6360593a613062e0$export$57d1e2b4683f37dd = (target, next, validateNext)=>{
    if (!target) return;
    // if valid, call a handler which 1. calls the tetheredAction function and 2. removes itself from the target
    const clickHandler = ()=>{
        const actionWithCleanup = ()=>{
            next(true);
            target.removeEventListener('click', clickHandler);
        };
        $6360593a613062e0$export$b33bc920614c9da5(actionWithCleanup, validateNext);
    };
    target.addEventListener('click', clickHandler);
    return ()=>target.removeEventListener('click', clickHandler)
    ; // return so we can remove the event elsewhere if the action doesn't get called
};


const $0b7adaded218def2$var$walktourDefaultProps = {
    maskPadding: 5,
    maskRadius: 0,
    tooltipSeparation: 10,
    transition: 'top 300ms ease, left 300ms ease',
    disableMaskInteraction: false,
    disableCloseOnClick: false,
    zIndex: 9999,
    renderTolerance: 2,
    updateInterval: 500
};
const $0b7adaded218def2$var$basePortalString = 'walktour-portal';
const $0b7adaded218def2$var$baseMaskString = 'walktour-mask';
const $0b7adaded218def2$var$baseTooltipContainerString = 'walktour-tooltip-container';
const $0b7adaded218def2$export$980563f9945f3c63 = (props)=>{
    const { steps: steps , initialStepIndex: initialStepIndex , isOpen: isOpen  } = props;
    const controlled = isOpen !== undefined;
    const [isOpenState, setIsOpenState] = $f3Ts0$useState(isOpen == undefined);
    const [target, setTarget] = $f3Ts0$useState(undefined);
    const [tooltipPosition1, setTooltipPosition] = $f3Ts0$useState(undefined);
    const [currentStepIndex, setCurrentStepIndex] = $f3Ts0$useState(initialStepIndex || 0);
    const [tourRoot, setTourRoot] = $f3Ts0$useState(undefined);
    const cleanupRefs = $f3Ts0$useRef([]);
    const tooltip = $f3Ts0$useRef(undefined);
    const portal = $f3Ts0$useRef(undefined);
    const targetPosition = $f3Ts0$useRef(undefined);
    const targetSize = $f3Ts0$useRef(undefined);
    const currentStepContent = steps[currentStepIndex];
    const tourOpen = controlled ? isOpen : isOpenState;
    const options = {
        ...$0b7adaded218def2$var$walktourDefaultProps,
        ...props,
        ...currentStepContent
    };
    const { selector: selector , maskPadding: maskPadding , maskRadius: maskRadius , disableMaskInteraction: disableMaskInteraction , disableCloseOnClick: disableCloseOnClick , tooltipSeparation: tooltipSeparation , transition: transition , orientationPreferences: orientationPreferences , customTooltipRenderer: customTooltipRenderer , zIndex: zIndex , rootSelector: rootSelector , customNextFunc: customNextFunc , customPrevFunc: customPrevFunc , customCloseFunc: customCloseFunc , disableClose: disableClose , disableNext: disableNext , disablePrev: disablePrev , disableAutoScroll: disableAutoScroll , identifier: identifier , getPositionFromCandidates: getPositionFromCandidates , movingTarget: movingTarget , renderTolerance: renderTolerance , updateInterval: updateInterval , disableMask: disableMask , setUpdateListener: setUpdateListener , removeUpdateListener: removeUpdateListener , disableListeners: disableListeners , disableSmoothScroll: disableSmoothScroll , debug: debug , allowForeignTarget: allowForeignTarget , nextOnTargetClick: nextOnTargetClick , validateNextOnTargetClick: validateNextOnTargetClick , renderMask: renderMask  } = options;
    $f3Ts0$useEffect(()=>{
        return cleanup;
    }, []);
    // set/reset the tour root 
    $f3Ts0$useEffect(()=>{
        let root;
        if (rootSelector) root = document.querySelector(rootSelector);
        if (!root) root = $d64876b425f82911$export$e6a63138435cb7d8(portal.current);
        if (tourOpen !== false && root !== tourRoot) setTourRoot(root);
    }, [
        rootSelector,
        portal.current,
        tourOpen
    ]);
    // update tour when step changes
    $f3Ts0$useEffect(()=>{
        if (debug) console.log(`walktour debug (${identifier ? `${identifier}, ` : ""}${currentStepIndex}):`, {
            "options:": options,
            "tour logic:": tourLogic,
            "previous state/vars:": {
                isOpenState: isOpenState,
                tourRoot: tourRoot,
                target: target,
                tooltipPosition: tooltipPosition1,
                targetPosition: targetPosition,
                currentStepIndex: currentStepIndex,
                targetSize: targetSize
            }
        });
        if (tooltip.current && tourOpen) {
            tooltip.current.focus();
            updateTour();
        } else cleanup();
    }, [
        currentStepIndex,
        currentStepContent,
        tourOpen,
        tourRoot,
        tooltip.current
    ]);
    // update tooltip and target position in state
    const updateTour = ()=>{
        cleanup();
        const root = tourRoot;
        const tooltipContainer = tooltip.current;
        if (!root || !tooltipContainer) {
            setTarget(null);
            setTooltipPosition(null);
            targetPosition.current = null;
            targetSize.current = null;
            return;
        }
        const targetScope = allowForeignTarget ? document : root;
        const getTarget = ()=>targetScope.querySelector(selector)
        ;
        const currentTarget = getTarget();
        const currentTargetPosition = $80855a25311548c2$export$2952c3b2d86d9aa2(root, currentTarget);
        const currentTargetDims = $d64876b425f82911$export$79d06a7c1f7c19a7(currentTarget);
        const smartPadding = disableMask ? 0 : maskPadding;
        const tooltipPosition = $80855a25311548c2$export$9a2c00effd7508cb({
            target: currentTarget,
            tooltip: tooltipContainer,
            padding: smartPadding,
            tooltipSeparation: tooltipSeparation,
            orientationPreferences: orientationPreferences,
            root: root,
            getPositionFromCandidates: getPositionFromCandidates,
            disableAutoScroll: disableAutoScroll,
            allowForeignTarget: allowForeignTarget,
            selector: selector
        });
        setTarget(currentTarget);
        setTooltipPosition(tooltipPosition);
        targetPosition.current = currentTargetPosition;
        targetSize.current = currentTargetDims;
        //focus trap subroutine
        const cleanupFocusTrap = $6360593a613062e0$export$5a96a0533d18cc6b(tooltipContainer, currentTarget, disableMaskInteraction);
        cleanupRefs.current.push(cleanupFocusTrap);
        if ($6360593a613062e0$export$d78ff247300e1ac2({
            disableAutoScroll: disableAutoScroll,
            allowForeignTarget: allowForeignTarget,
            selector: selector,
            root: root,
            target: currentTarget,
            tooltip: tooltipContainer,
            tooltipPosition: tooltipPosition.coords
        })) $12e5d8b76e0bec7c$export$f813b596fbb754ff(root, $d9acba4dcfd99e46$export$a0d7885acfd4e9c7(root, tooltipContainer, currentTarget, tooltipPosition.coords, currentTargetPosition), disableSmoothScroll);
        if (!disableListeners) {
            const conditionalUpdate = ()=>{
                const availableTarget = getTarget();
                if ($6360593a613062e0$export$ea8391e230935df({
                    root: root,
                    tooltipPosition: tooltipPosition.coords,
                    tooltip: tooltipContainer,
                    target: availableTarget,
                    disableAutoScroll: disableAutoScroll,
                    rerenderTolerance: renderTolerance,
                    targetCoords: targetPosition.current,
                    targetDims: targetSize.current,
                    allowForeignTarget: allowForeignTarget,
                    selector: selector,
                    getPositionFromCandidates: getPositionFromCandidates,
                    orientationPreferences: orientationPreferences,
                    padding: smartPadding,
                    tooltipSeparation: tooltipSeparation
                })) updateTour();
            };
            const cleanupUpdateListener = $6360593a613062e0$export$614902ffce9c647a({
                update: $6360593a613062e0$export$61fc7d43ac8f84b0(conditionalUpdate),
                customSetListener: setUpdateListener,
                customRemoveListener: removeUpdateListener
            });
            cleanupRefs.current.push(cleanupUpdateListener);
            // if the user requests a watcher and there's supposed to be a target
            if (movingTarget && (currentTarget || selector)) {
                const cleanupWatcher = $6360593a613062e0$export$10cb34243a926c8(conditionalUpdate, updateInterval);
                cleanupRefs.current.push(cleanupWatcher);
            }
            if (nextOnTargetClick && currentTarget) {
                const cleanupTargetTether = $6360593a613062e0$export$57d1e2b4683f37dd(currentTarget, tourLogic.next, validateNextOnTargetClick);
                cleanupRefs.current.push(cleanupTargetTether);
            }
        }
    };
    const goToStep = (stepIndex)=>{
        if (stepIndex >= steps.length || stepIndex < 0) return;
        setCurrentStepIndex(stepIndex);
    };
    const cleanup = ()=>{
        cleanupRefs.current.forEach((f)=>f()
        );
        cleanupRefs.current = [];
    };
    const closeTour = (reset)=>{
        reset && goToStep(0);
        !controlled && setIsOpenState(false);
        cleanup();
        target && target.focus(); // return focus to last target when closed
    };
    const baseLogic = {
        next: ()=>goToStep(currentStepIndex + 1)
        ,
        prev: ()=>goToStep(currentStepIndex - 1)
        ,
        close: (reset)=>closeTour(reset)
        ,
        goToStep: goToStep,
        stepContent: {
            ...options
        },
        stepIndex: currentStepIndex,
        allSteps: steps,
        tooltipPosition: tooltipPosition1
    };
    const tourLogic = {
        ...baseLogic,
        ...customNextFunc && {
            next: (fromTarget)=>customNextFunc(baseLogic, fromTarget)
        },
        ...customPrevFunc && {
            prev: ()=>customPrevFunc(baseLogic)
        },
        ...customCloseFunc && {
            close: ()=>customCloseFunc(baseLogic)
        }
    };
    const keyPressHandler = (event)=>{
        switch(event.key){
            case "Escape":
                event.preventDefault();
                if (!disableClose) tourLogic.close();
                break;
            case "ArrowRight":
                event.preventDefault();
                if (!disableNext) tourLogic.next();
                break;
            case "ArrowLeft":
                event.preventDefault();
                if (!disablePrev) tourLogic.prev();
                break;
        }
    };
    //don't render if the tour is hidden or if there's no step data
    if (!tourOpen || !currentStepContent) return null;
    const portalStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: zIndex,
        visibility: tooltipPosition1 ? 'visible' : 'hidden',
        pointerEvents: "none"
    };
    const tooltipContainerStyle = {
        position: 'absolute',
        top: tooltipPosition1?.coords?.y,
        left: tooltipPosition1?.coords?.x,
        transition: transition,
        pointerEvents: 'auto'
    };
    const MaskTag = renderMask ? renderMask : $53a175a5d1c3ad4d$export$991dcf7284de63d;
    // render mask, tooltip, and their shared "portal" container
    const render = ()=>/*#__PURE__*/ $f3Ts0$jsx("div", {
            ref: (ref)=>portal.current = ref
            ,
            id: $6360593a613062e0$export$ec4b868a2e3a65e8($0b7adaded218def2$var$basePortalString, identifier),
            style: portalStyle,
            children: tourRoot && /*#__PURE__*/ $f3Ts0$jsxs($f3Ts0$Fragment, {
                children: [
                    !disableMask && /*#__PURE__*/ $f3Ts0$jsx(MaskTag, {
                        maskId: $6360593a613062e0$export$ec4b868a2e3a65e8($0b7adaded218def2$var$baseMaskString, identifier),
                        targetInfo: $d64876b425f82911$export$3abef78aae9f014d(tourRoot, target),
                        disableMaskInteraction: disableMaskInteraction,
                        disableCloseOnClick: disableCloseOnClick,
                        padding: maskPadding,
                        radius: maskRadius,
                        tourRoot: tourRoot,
                        close: tourLogic.close
                    }),
                    /*#__PURE__*/ $f3Ts0$jsx("div", {
                        ref: (ref)=>tooltip.current = ref
                        ,
                        id: $6360593a613062e0$export$ec4b868a2e3a65e8($0b7adaded218def2$var$baseTooltipContainerString, identifier),
                        style: tooltipContainerStyle,
                        onKeyDown: keyPressHandler,
                        tabIndex: 0,
                        children: customTooltipRenderer ? customTooltipRenderer(tourLogic) : /*#__PURE__*/ $f3Ts0$jsx($bbdfcdc82b4594cb$export$28c660c63b792dea, {
                            ...tourLogic
                        })
                    })
                ]
            })
        })
    ;
    // on first render, put everything in its normal context.
    // after first render (once we've determined the tour root) spawn a portal there for rendering.
    if (tourRoot) return(/*#__PURE__*/ $f3Ts0$createPortal(render(), $d64876b425f82911$export$bce1a5eda244692c(tourRoot)));
    else return render();
};






export {$0b7adaded218def2$export$980563f9945f3c63 as Walktour, $53a175a5d1c3ad4d$export$991dcf7284de63d as Mask, $80855a25311548c2$export$17997607e7979e9b as CardinalOrientation};
//# sourceMappingURL=index.js.map
