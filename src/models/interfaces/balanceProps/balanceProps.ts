import { Movement } from "../movement/movement";

export interface BalanceProps {
  emitMovement: (movement: Movement) => void;
  currentBalance: number;
}