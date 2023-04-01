import ms from "./Main.module.css";
import Features from "./Features/Features";
import CostHistory from "./CostHistory/CostHistory";
import Header from "../Header/Header";

function Main({ income, setIncome }) {
  return (
    <div>
        <Header />
        <div className={ms.main}>
      <Features income={income} setIncome={setIncome} />
      <CostHistory />
        </div>
    </div>
  );
}

export default Main;
