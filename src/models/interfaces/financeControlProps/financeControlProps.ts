import { Movement } from "../movement/movement";

export interface FinanceControlProps {
  handleSetMovement: (movement: Movement) => void;
  balance: number;
  expenses: number;
}
