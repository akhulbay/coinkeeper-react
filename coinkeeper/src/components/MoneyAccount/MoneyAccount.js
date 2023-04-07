import ms from "./MoneyAccount.module.css";
import {useState} from "react";
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
                          setIncomeList,
                          expensesList,
                          setExpensesList,
                          accountId,
                          accounts,
                          incomeExpenseList,
                          setIncomeExpenseList
                      }) {
    const [outcomePercentage, setOutcomePercentage] = useState(100);
    const [incomePercentage, setIncomePercentage] = useState(50);


    let needToEarnSum = 100_000;
    let canSpendSum = 50_000;


    return (
        <div className={ms.MoneyAccount}>
            <Header/>
            <div className={ms.container}>
                <IncomeOutcomeVisual incomePercentage={incomePercentage} outcomePercentage={outcomePercentage}
                                     needToEarnSum={needToEarnSum} canSpendSum={canSpendSum}/>
                <IncomeOutcomeAdding income={income} expenses={expenses} incomeList={incomeList}
                                     setIncomeList={setIncomeList} expensesList={expensesList}
                                     setExpensesList={setExpensesList} accountId={accountId} accounts={accounts}
                                     incomeExpenseList={incomeExpenseList}
                                     setIncomeExpenseList={setIncomeExpenseList}/>
            </div>
        </div>
    );

}

export default MoneyAccount;