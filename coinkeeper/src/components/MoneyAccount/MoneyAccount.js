import ms from "./MoneyAccount.module.css";
import {useEffect, useState} from "react";
import CircleProgressBar from "../CircleProgressBar/CircleProgressBar";
import IncomeList from "./IncomeList";
import ExpensesList from "./ExpensesList";
import uuid from "react-uuid";
import {IncomeOutcomeVisual} from "./IncomeOutcomeVisual";
import {IncomeOutcomeAdding} from "./IncomeOutcomeAdding";
import Header from "../Header/Header";

function MoneyAccount({
                          income,
                          expenses,
                          incomeList,
                          expensesList,
                          currentAccount,
                          addIncomeTransaction,
                          addOutcomeTransaction
                      }) {
    const [outcomePercentage, setOutcomePercentage] = useState(
        // (currentAccount.sum / currentAccount.finishSum) * 100
    );
    // function getPercentage() {
    //   let totalSum = expensesList !== null ? expensesList.reduce((sum, e) => e.expense.amount + sum) : 0;
    //   let maxSum = expensesList !== null ? expensesList.reduce((sum, e) => e.expense.amount + sum): 0;
    // }
    // getPercentage();
    const [incomePercentage, setIncomePercentage] = useState(
        expensesList.map((expensesList) => {
            if (expensesList.expense.id === currentAccount.id) {
                console.log(expensesList.expense);
                return (
                    (expensesList.expense.amount / expensesList.expense.amount) * 100
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
            <Header/>
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
                    expensesList={expensesList}
                    currentAccount={currentAccount}
                    addIncomeTransaction={addIncomeTransaction}
                    addOutcomeTransaction={addOutcomeTransaction}
                />
            </div>
        </div>
    );
}

export default MoneyAccount;
