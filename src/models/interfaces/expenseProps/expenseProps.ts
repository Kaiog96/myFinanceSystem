import { Movement } from "../movement/movement";

export interface ExpenseProps {
  emitMovement: (movement: Movement) => void;
  currentExpenses: number;
  currentBalance: number;
}
