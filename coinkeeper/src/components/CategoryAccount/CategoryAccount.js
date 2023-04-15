import cs from "./CategoryAccount.module.css";
import { CategoryOutcomeVisual } from "./CategoryOutcomeVisual";
import { useEffect, useState } from "react";
import { CategoryOutcomeAdding } from "./CategoryOutcomeAdding";
import Header from "../Header/Header";
import { getExpenseCurrentBalance } from "../../data/MainFunctionUtil";

function CategoryAccount({
  expensesList,
  accounts,
  currentExpense,
  addOutcomeTransaction,
  updateCategory,
}) {
  const [categoryOutcomePercentage, setCategoryOutcomePercentage] =
    useState(getPercentage);
  const [canSpendSum, setCanSpendSum] = useState(
    JSON.parse(localStorage.getItem("canSpendSum")) || 20_000
  );

  function getPercentage() {
    let result =
      (getExpenseCurrentBalance(currentExpense, expensesList) /
        currentExpense.spendPlan) *
      100;
    if (result > 100) {
      return 100;
    }
    return isNaN(result) ? 0 : Math.round(result);
  }
  // getExpenseCurrentBalance(expense, expensesList)

  useEffect(() => {
    localStorage.setItem("canSpendSum", canSpendSum);
  });

  return (
    <div className={cs.CategoryAccount}>
      <Header />
      <div className={cs.container}>
        <CategoryOutcomeVisual
          canSpendSum={canSpendSum}
          setCanSpendSum={setCanSpendSum}
          categoryOutcomePercentage={categoryOutcomePercentage}
          currentExpense={currentExpense}
          updateCategory={updateCategory}
          getPercentage={getPercentage}
          setCategoryOutcomePercentage={setCategoryOutcomePercentage}
        />
        <CategoryOutcomeAdding
          expensesList={expensesList}
          accounts={accounts}
          currentExpense={currentExpense}
          addOutcomeTransaction={addOutcomeTransaction}
        />
      </div>
    </div>
  );
}

export default CategoryAccount;
