import cs from "./CategoryAccount.module.css";
import {CategoryOutcomeVisual} from "./CategoryOutcomeVisual";
import {useEffect, useState} from "react";
import {CategoryOutcomeAdding} from "./CategoryOutcomeAdding";
import Header from "../Header/Header";

function CategoryAccount({
                             expensesList,
                             accounts,
                             currentExpense,
                             addOutcomeTransaction
                         }) {
    const [categoryOutcomePercentage, setCategoryOutcomePercentage] = useState(0);
    const [canSpendSum, setCanSpendSum] = useState(
        JSON.parse(localStorage.getItem("canSpendSum")) || 20_000
    );

    useEffect(() => {
        localStorage.setItem("canSpendSum", canSpendSum);
    });

    return (
        <div className={cs.CategoryAccount}>
            <Header/>
            <div className={cs.container}>
                <CategoryOutcomeVisual
                    canSpendSum={canSpendSum}
                    setCanSpendSum={setCanSpendSum}
                    categoryOutcomePercentage={categoryOutcomePercentage}
                    currentExpense={currentExpense}
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
