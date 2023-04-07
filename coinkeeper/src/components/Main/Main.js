import ms from "./Main.module.css";
import Features from "./Features/Features";
import CostHistory from "./CostHistory/CostHistory";
import Header from "../Header/Header";
import { Navigate } from "react-router-dom";
import MoneyAccount from "../MoneyAccount/MoneyAccount";
import CategoryAccount from "../CategoryAccount/CategoryAccount";

function Main({
  income,
  setIncome,
  accounts,
  setAccounts,
  expenses,
  setExpenses,
  incomeList,
  setIncomeList,
  expensesList,
  setExpensesList,
}) {
  let loginIn = JSON.parse(localStorage.getItem("loginIn"));
  if (!loginIn) return <Navigate to="/register" />;
  return (
    <div>
      <Header />
      <div className={ms.main}>
        <Features
          income={income}
          setIncome={setIncome}
          accounts={accounts}
          setAccounts={setAccounts}
          expenses={expenses}
          setExpense={setExpenses}
        />
        <CostHistory expensesList={expensesList} incomeList={incomeList} />
        <MoneyAccount
          income={income}
          expenses={expenses}
          incomeList={incomeList}
          setIncomeList={setIncomeList}
          expensesList={expensesList}
          setExpensesList={setExpensesList}
          accountId={null}
          accounts={accounts}
        />
        {/* <CategoryAccount
          expensesList={expensesList}
          setExpensesList={setExpensesList}
          expenses={expenses}
          expenseId={null}
          accounts={accounts}
        /> */}
      </div>
    </div>
  );
}

export default Main;
