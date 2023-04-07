import cs from "./CategoryAccount.module.css";
import {CategoryOutcomeVisual} from "./CategoryOutcomeVisual";
import {useState} from "react";
import {CategoryOutcomeAdding} from "./CategoryOutcomeAdding";

function CategoryAccount({
                             expenses,
                             expensesList,
                             setExpensesList,
                             expenseId,
                             accounts
                         }) {

    const [categoryOutcomePercentage, setCategoryOutcomePercentage] = useState(0);
    const canSpendSum = 20_000;
    return (
        <div className={cs.CategoryAccount}>
            <CategoryOutcomeVisual canSpendSum={canSpendSum} categoryOutcomePercentage={categoryOutcomePercentage}/>
            <CategoryOutcomeAdding expenses={expenses} expenseId={null} setExpensesList={setExpensesList} expensesList={expensesList} accounts={accounts}/>
        </div>
    );
}

export default CategoryAccount;