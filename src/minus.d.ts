import { Negate } from "./number";
import { Sum } from "./sum";

export type Minus<A extends number, B extends number> = Sum<A, Negate<B>>;
