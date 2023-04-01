import ms from "./Main.module.css";
import Features from "./Features/Features";
import CostHistory from "./CostHistory/CostHistory";

function Main({
  income,
  setIncome,
  accounts,
  setAccounts,
  expenses,
  setExpenses,
}) {
  return (
    <div className={ms.main}>
      <Features
        income={income}
        setIncome={setIncome}
        accounts={accounts}
        setAccounts={setAccounts}
        expenses={expenses}
        setExpense={setExpenses}
      />
      <CostHistory />
    </div>
  );
}

export default Main;
