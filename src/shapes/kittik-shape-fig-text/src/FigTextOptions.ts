import type { Options } from "figlet";
import type { ShapeOptions } from "kittik-shape-basic";

// @ts-expect-error there is a compatibility issue between mine options and theirs
export interface FigTextOptions extends ShapeOptions, Options {}
