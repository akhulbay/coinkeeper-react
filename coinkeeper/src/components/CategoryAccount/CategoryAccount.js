import cs from "./CategoryAccount.module.css";
import {CategoryOutcomeVisual} from "./CategoryOutcomeVisual";
import {useState} from "react";
import {CategoryOutcomeAdding} from "./CategoryOutcomeAdding";
import Header from "../Header/Header";

function CategoryAccount({
                             expenses,
                             expensesList,
                             setExpensesList,
                             expenseId,
                             accounts,
                             incomeExpenseList,
                             setIncomeExpenseList,
                             currentExpense
                         }) {

    const [categoryOutcomePercentage, setCategoryOutcomePercentage] = useState(0);
    const canSpendSum = 20_000;
    return (
        <div className={cs.CategoryAccount}>
            <Header/>
            <div className={cs.container}>
                <CategoryOutcomeVisual canSpendSum={canSpendSum} categoryOutcomePercentage={categoryOutcomePercentage}
                                       currentExpense={currentExpense}/>
                <CategoryOutcomeAdding expenses={expenses} expenseId={null} setExpensesList={setExpensesList}
                                       expensesList={expensesList} accounts={accounts}
                                       incomeExpenseList={incomeExpenseList}
                                       setIncomeExpenseList={setIncomeExpenseList}
                                       currentExpense={currentExpense}
                />
            </div>
        </div>
    );
}

export default CategoryAccount;