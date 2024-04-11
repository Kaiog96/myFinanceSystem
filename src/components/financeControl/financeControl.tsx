import { FinanceControlProps } from "../../models/interfaces/financeControlProps/financeControlProps";
import { Movement } from "../../models/interfaces/movement/movement";
import Balance from "../balance/balance";
import "./financeControl.css";

const FinanceControl = ({
  handleSetMovement,
  balance,
  expenses,
}: FinanceControlProps) => {
  const receiveNewMovement = (movement: Movement) => {
    movement && handleSetMovement(movement);
  };

  return (
    <div className="container_finances">
      <Balance currentBalance={balance} emitMovement={receiveNewMovement} />
      {/* EXPENSE */}
    </div>
  );
};

export default FinanceControl;
