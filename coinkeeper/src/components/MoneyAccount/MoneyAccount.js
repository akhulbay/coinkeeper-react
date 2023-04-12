import ms from "./MoneyAccount.module.css";
import { useEffect, useState } from "react";
import CircleProgressBar from "../CircleProgressBar/CircleProgressBar";
import IncomeList from "./IncomeList";
import ExpensesList from "./ExpensesList";
import uuid from "react-uuid";
import { IncomeOutcomeVisual } from "./IncomeOutcomeVisual";
import { IncomeOutcomeAdding } from "./IncomeOutcomeAdding";
import Header from "../Header/Header";

function MoneyAccount({
  income,
  expenses,
  incomeList,
  setIncomeList,
  expensesList,
  setExpensesList,
  accountId,
  accounts,
  incomeExpenseList,
  setIncomeExpenseList,
  currentAccount,
  currentExpense,
}) {
  const [outcomePercentage, setOutcomePercentage] = useState(
    (currentAccount.sum / currentAccount.finishSum) * 100
  );
  function getPersentage() {
    let totalSum = expensesList.reduce((sum, e) => e.category.totalSum + sum);
    let maxSum = expensesList.reduce((sum, e) => e.category.maxSum + sum);
  }
  getPersentage();
  const [incomePercentage, setIncomePercentage] = useState(
    expensesList.map((expensesList) => {
      if (expensesList.account.id === currentAccount.id) {
        console.log(expensesList.category);
        return (
          (expensesList.category.totalSum / expensesList.category.maxSum) * 100
        );
      } else {
        return 0;
      }
    })
  );
  const [needToEarnSum, setneedToEarnSum] = useState(
    JSON.parse(localStorage.getItem("needToEarnSum")) || 100_000
  );
  const [canSpendSum, setCanSpendSum] = useState(
    JSON.parse(localStorage.getItem("canSpendSum")) || 50_000
  );

  // let needToEarnSum = 100_000;
  // let canSpendSum = 50_000;

  useEffect(() => {
    localStorage.setItem("needToEarnSum", needToEarnSum);
  });
  useEffect(() => {
    localStorage.setItem("canSpendSum", canSpendSum);
  });

  return (
    <div className={ms.MoneyAccount}>
      <Header />
      <div className={ms.container}>
        <IncomeOutcomeVisual
          incomePercentage={incomePercentage}
          outcomePercentage={outcomePercentage}
          needToEarnSum={needToEarnSum}
          setneedToEarnSum={setneedToEarnSum}
          canSpendSum={canSpendSum}
          setCanSpendSum={setCanSpendSum}
          currentAccount={currentAccount}
        />
        <IncomeOutcomeAdding
          income={income}
          expenses={expenses}
          incomeList={incomeList}
          setIncomeList={setIncomeList}
          expensesList={expensesList}
          setExpensesList={setExpensesList}
          accountId={accountId}
          accounts={accounts}
          incomeExpenseList={incomeExpenseList}
          setIncomeExpenseList={setIncomeExpenseList}
        />
      </div>
    </div>
  );
}

export default MoneyAccount;
