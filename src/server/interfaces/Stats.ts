import { StatsBase } from "./StatsBase";
import { Block } from "./Block";

export interface Stats extends StatsBase {
  propagationAvg: number
  propagationHistory?: number[]
  name?: string
  pending: number
  block: Block
  readonly signer?: string
  readonly clientTime?: number
}
