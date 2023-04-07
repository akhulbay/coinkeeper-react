// @flow

import ms from "./MoneyAccount.module.css";
import IncomeList from "./IncomeList";
import ExpensesList from "./ExpensesList";
import {useState} from "react";
import uuid from "react-uuid";

export const IncomeOutcomeAdding = ({
                                        income,
                                        expenses,
                                        incomeList,
                                        setIncomeList,
                                        expensesList,
                                        setExpensesList,
                                        accounts,
                                        accountId
                                    }) => {

    const [hideHiddenIncomeDiv, setHideHiddenIncomeDiv] = useState(true);
    const [hideHiddenExpensesDiv, setHideHiddenExpensesDiv] = useState(true);

    const [incomeDate, setIncomeDate] = useState("");
    const [incomeSum, setIncomeSum] = useState("");
    const [incomeAccount, setIncomeAccount] = useState(null);
    const [incomeType, setIncomeType] = useState(null);


    const [expenseDate, setExpenseDate] = useState("");
    const [expenseSum, setExpenseSum] = useState(null);
    const [expenseFromIncome, setExpenseFromIncome] = useState(null);
    const [expenseCategory, setExpenseCategory] = useState(null);

    const setAccount = () => {
        accounts.filter((account) => {
            if (account.id === accountId) {
                setIncomeType(account);
            }
        })
    }

    const saveIncome = () => {
        if (incomeDate !== "" && incomeSum !== "" && incomeAccount !== null) {
            setAccount();
            setIncomeList(
                [...incomeList, {
                    id: uuid(),
                    date: incomeDate,
                    sum: incomeSum,
                    account: incomeType,
                    income: incomeAccount
                }]
            );

            setIncomeSum("");
            setIncomeDate("");
            setIncomeAccount(null)
        }
    }

    const saveExpense = () => {
        if (expenseDate !== "" && expenseSum !== "" && expenseCategory !== null) {
            setAccount();
            setExpensesList(
                [...expensesList, {
                    id: uuid(),
                    date: expenseDate,
                    sum: expenseSum,
                    account: incomeType,
                    category: expenseCategory
                }]
            );

            setExpenseSum("");
            setExpenseDate("");
            setExpenseCategory(null)
        }
    }
    return (
        <div className={ms.incomeOutcomeAdding}>
            <div className={ms.incomeAdding}>
                <span className={ms.incomeOutcomeTitle}>Список Доходов</span>
                <div className={ms.incomeContent}>
                    <div className={ms.incomeOutcomeList}>
                        {
                            incomeList.map((item) => (
                                    <div className={ms.incomeOutcomeRecord}>
                                        <div className={ms.incomeOutcomeRecordDate}>
                                            <span>{item.date}</span>
                                        </div>
                                        <hr/>
                                        <div className={ms.incomeOutcomeRecordContent}>
                                            <div className={ms.incomeAndAccountTitle}>
                                                <span className={ms.incomeTitle}>{
                                                    item.income !== null ?
                                                        item.income.title
                                                        :
                                                        null
                                                }</span> <br/>
                                                <span className={ms.accountTitle}>{
                                                    item.account !== null ?
                                                        item.account.title
                                                        :
                                                        null
                                                }</span>
                                            </div>
                                            <div className={ms.incomeRecordSum}>
                                                <span>+ {item.sum} тг</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )

                        }
                    </div>
                    <div className={`hiddenIncomes ${hideHiddenIncomeDiv ? " hide-div" : " "}`}>
                        <IncomeList income={income} setHideHiddenIncomeDiv={setHideHiddenIncomeDiv}
                                    setIncomeAccount={setIncomeAccount}/>
                    </div>
                    <div className={ms.addIncome}>
                        <div className={ms.sumAndButton}>
                            <input id={ms.sum} placeholder={"Enter sum"} value={incomeSum}
                                   onChange={(e) => setIncomeSum(e.target.value)}/>
                            <div className={ms.addIncomeOptions} onClick={() => {
                                setHideHiddenIncomeDiv(false)
                            }}>

                                {/*<span>Incomes</span>*/}
                                {
                                    incomeAccount === null ?
                                        <span>Accounts</span>
                                        :
                                        <span>{incomeAccount.title}</span>
                                }
                            </div>
                        </div>
                        <div className={ms.date}>
                            <input id={ms.date} type={"date"} value={incomeDate}
                                   onChange={(e) => setIncomeDate(e.target.value)}/>
                            <button className={ms.addButton} onClick={saveIncome}>Add</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className={ms.outcomeAdding}>
                <span className={ms.incomeOutcomeTitle}>Список Расходов</span>
                <div className={ms.incomeContent}>
                    <div className={ms.incomeOutcomeList}>
                        {
                            expensesList.map((item) => (
                                    <div className={ms.incomeOutcomeRecord}>
                                        <div className={ms.incomeOutcomeRecordDate}>
                                            <span>{item.date}</span>
                                        </div>
                                        <hr/>
                                        <div className={ms.incomeOutcomeRecordContent}>
                                            <div className={ms.incomeAndAccountTitle}>
                                                <span className={ms.incomeTitle}>{
                                                    item.category !== null ?
                                                        item.category.title
                                                        :
                                                        null
                                                }</span> <br/>
                                                <span className={ms.accountTitle}>{
                                                    item.account !== null ?
                                                        item.account.title
                                                        :
                                                        null}
                                                    </span>
                                            </div>
                                            <div className={ms.expenseRecordSum}>
                                                <span>- {item.sum} тг</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )

                        }
                    </div>
                    <div className={`hiddenExpenses ${hideHiddenExpensesDiv ? " hide-div" : " "}`}>
                        <ExpensesList expenses={expenses} setHideHiddenExpensesDiv={setHideHiddenExpensesDiv}
                                      setExpenseCategory={setExpenseCategory}/>
                    </div>
                    <div className={ms.addIncome}>
                        <div className={ms.sumAndButton}>
                            <input id={ms.sum} placeholder={"Enter sum"} value={expenseSum}
                                   onChange={(e) => setExpenseSum(e.target.value)}/>
                            <div className={ms.addExpensesOptions} onClick={() => {
                                setHideHiddenExpensesDiv(false)
                            }}>

                                {/*<span>Category</span>*/}
                                {
                                    expenseCategory === null ?
                                        <span>Category</span>
                                        :
                                        <span>{expenseCategory.title}</span>
                                }
                            </div>
                        </div>
                        <div className={ms.date}>
                            <input id={ms.date} type={"date"} value={expenseDate}
                                   onChange={(e) => setExpenseDate(e.target.value)}/>
                            <button className={ms.addButton} onClick={saveExpense}>Add</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};