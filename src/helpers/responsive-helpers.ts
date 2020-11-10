import * as System from "../lighthouse"

export const getMediaQuery = (breakpoint: number): string =>
  `@media screen and (max-width: ${breakpoint}px)`

export const getMediaQueries = (breakpoints: System.BreakpointsT): string[] =>
  Object.keys(breakpoints)
    .map((key) => breakpoints[key])
    .sort((a, b) => a - b)
    .map(getMediaQuery)
