import { useState } from "react";
import "./App.css";
import { FinanceControl } from "./components/financeControl/financeControl";
import { Header } from "./components/header/header";
import { Movement } from "./models/interfaces/movement/movement";
import { Movements } from "./components/moviments/movements";
import { FormatMoney } from "./utils/util";

function App() {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [currentExpenses, setCurrentExpenses] = useState(0);
  const [movementsItens, setMovementsItens] = useState<Array<Movement>>([]);

  const setNewMovement = (movement: Movement) => {
    if (movement) {
      setMovementsItens((prevMovements) => {
        const movements = [...prevMovements];
        movements.unshift({
          name: movement.name,
          value: FormatMoney(movement.value),
          type: movement.type,
          id: Math.random().toString(),
        });
        return movements;
      });

      movement.type === "Input" &&
        setCurrentBalance(
          (prevBalance) => prevBalance + Number(movement.value)
        );

      if (movement.type === "Output") {
        setCurrentExpenses(
          (prevExpenses) => prevExpenses + Number(movement.value)
        );

        currentBalance > 0 &&
          setCurrentBalance(
            (prevBalance) => prevBalance - Number(movement.value)
          );
      }
    }
  };

  return (
    <div>
      <Header />
      <FinanceControl
        balance={currentBalance}
        expenses={currentExpenses}
        handleSetMovement={setNewMovement}
      />
      <Movements movementsList={movementsItens} />
    </div>
  );
}

export default App;
