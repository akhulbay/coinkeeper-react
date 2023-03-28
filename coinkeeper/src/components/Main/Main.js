import ms from "./Main.module.css";
import Features from "./Features/Features";
import CostHistory from "./CostHistory/CostHistory";

function Main({ income, setIncome }) {
  return (
    <div className={ms.main}>
      <Features income={income} setIncome={setIncome} />
      <CostHistory />
    </div>
  );
}

export default Main;
