import ms from "./Main.module.css";
import Features from "./Features/Features";
import CostHistory from "./CostHistory/CostHistory";
import Header from "../Header/Header";
import { Navigate } from "react-router-dom";
function Main({ income,
                  setIncome,
                  accounts,
                  setAccounts,
                  expenses,
                  setExpenses,}) {
    let loginIn = JSON.parse(localStorage.getItem("loginIn"));
    if (!loginIn) return <Navigate to="/register" />;
  return (
    <div>
        <Header />
        <div className={ms.main}>
      <Features income={income}
                setIncome={setIncome}
                accounts={accounts}
                setAccounts={setAccounts}
                expenses={expenses}
                setExpense={setExpenses} />
      <CostHistory/>
        </div>
    </div>
  );
}

export default Main;
