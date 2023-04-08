import cs from "./CategoryAccount.module.css";
import React, {useState} from "react";
import uuid from "react-uuid";
import AccountList from "./AccountList";


export const CategoryOutcomeAdding = ({
                                          expenses,
                                          expensesList,
                                          setExpensesList,
                                          expenseId,
                                          accounts,
                                          incomeExpenseList,
                                          setIncomeExpenseList,
                                          currentExpense
                                      }) => {

    const [hideHiddenAccountDiv, setHideHiddenAccountDiv] = useState(true);

    const [expenseDate, setExpenseDate] = useState("");
    const [expenseSum, setExpenseSum] = useState(null);
    const [expenseFromIncome, setExpenseFromIncome] = useState(null);
    const [expenseCategory, setExpenseCategory] = useState(null);
    const [newExpenseList, setNewExpenseList] = useState(null);

    const setAccount = () => {
        setExpenseCategory(currentExpense)
    }

    const saveExpense = () => {
        if (expenseDate !== "" && expenseSum !== "" && expenseFromIncome !== null) {
            setAccount();
            setExpensesList(
                [...expensesList, {
                    id: uuid(),
                    date: expenseDate,
                    sum: expenseSum,
                    account: expenseFromIncome,
                    category: currentExpense
                }]
            );

            incomeExpenseList.map((item) => {
                if (item.id === expenseDate) {
                    setIncomeExpenseList((incomeExpenseList) => {
                            const myExpense = incomeExpenseList.find(i => i.id === expenseDate)
                            return [
                                ...incomeExpenseList.filter(i => i.id !== expenseDate), {
                                    ...myExpense,
                                    data: [...myExpense.data, {
                                        transactionId: uuid(),
                                        sum: expenseSum,
                                        status: false, // true for income and false for expense
                                        account: expenseFromIncome,
                                        category: currentExpense, //this field is only for expanse
                                        income: null
                                    }]
                                }
                            ]
                        }
                    )
                } else {
                    setIncomeExpenseList(
                        [...incomeExpenseList, {
                            id: expenseDate,
                            data: [{
                                transactionId: uuid(),
                                sum: expenseSum,
                                status: false, // true for income and false for expense
                                account: expenseFromIncome,
                                category: currentExpense, //this field is only for expanse
                                income: null
                            },]
                        }]
                    );
                }
            })

            console.log(incomeExpenseList)
            setExpenseSum("");
            setExpenseDate("");
            setExpenseFromIncome(null)
        }

    }

    const convertToExpenseList = () => {
        incomeExpenseList.map((item) => {
            item.data.filter((i) => {
                if (i.category === currentExpense && i.status === false) {
                    return true
                }
            })
        })
    }


    return (
        <div className={cs.incomeOutcomeAdding}>
            <div className={cs.outcomeAdding}>
                <span className={cs.incomeOutcomeTitle}>Список Расходов</span>
                <div className={cs.incomeContent}>
                    <div className={cs.incomeOutcomeList}>
                        {
                            expensesList.map((item) => (
                                item.category === currentExpense ?
                                    <div className={cs.incomeOutcomeRecord}>
                                        <div className={cs.incomeOutcomeRecordDate}>
                                            <span>{item.date}</span>
                                        </div>
                                        <hr/>
                                        <div className={cs.incomeOutcomeRecordContent}>
                                            <div className={cs.incomeAndAccountTitle}>
                                                <span className={cs.incomeTitle}>{
                                                    item.category !== null ?
                                                        item.category.title
                                                        :
                                                        null
                                                }</span> <br/>
                                                <span className={cs.accountTitle}>{
                                                    item.account !== null ?
                                                        item.account.title
                                                        :
                                                        null}
                                                    </span>
                                            </div>
                                            <div className={cs.expenseRecordSum}>
                                                <span>- {item.sum} тг</span>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    null
                                )
                            )

                        }
                    </div>
                    <div className={`hiddenAccounts ${hideHiddenAccountDiv ? " hide-div" : " "}`}>
                        <AccountList accounts={accounts} setHideHiddenAccountDiv={setHideHiddenAccountDiv}
                                     setExpenseFromIncome={setExpenseFromIncome}/>
                    </div>
                    <div className={cs.addIncome}>
                        <div className={cs.sumAndButton}>
                            <input id={cs.sum} placeholder={"Enter sum"} value={expenseSum}
                                   onChange={(e) => setExpenseSum(e.target.value)}/>
                            <div className={cs.addExpensesOptions} onClick={() => {
                                setHideHiddenAccountDiv(false)
                            }}>

                                {/*<span>Category</span>*/}
                                {
                                    expenseFromIncome === null ?
                                        <span>Account</span>
                                        :
                                        <span>{expenseFromIncome.title}</span>
                                }
                            </div>
                        </div>
                        <div className={cs.date}>
                            <input id={cs.date} type={"date"} value={expenseDate}
                                   onChange={(e) => setExpenseDate(e.target.value)}/>
                            <button className={cs.addButton} onClick={saveExpense}>Add</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};