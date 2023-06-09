import cs from "./CategoryAccount.module.css";
import React, {useState} from "react";
import uuid from "react-uuid";
import AccountList from "./AccountList";


export const CategoryOutcomeAdding = ({
                                          expensesList,
                                          accounts,
                                          currentExpense,
                                          addOutcomeTransaction
                                      }) => {

    const [hideHiddenAccountDiv, setHideHiddenAccountDiv] = useState(true);

    const [expenseDate, setExpenseDate] = useState("");
    const [expenseSum, setExpenseSum] = useState(null);
    const [expenseFromIncome, setExpenseFromIncome] = useState(null);
    const [expenseCategory, setExpenseCategory] = useState(currentExpense);

    const saveExpense = () => {
        if (expenseDate !== "" && expenseSum !== "" && expenseFromIncome !== null) {
            addOutcomeTransaction(expenseDate, Number(expenseSum), expenseFromIncome, expenseCategory)

            setExpenseSum("");
            setExpenseDate("");
            setExpenseFromIncome(null)
        }

    }

    return (
        <div className={cs.incomeOutcomeAdding}>
            <div className={cs.outcomeAdding}>
                <span className={cs.incomeOutcomeTitle}>Список Расходов</span>
                <div className={cs.incomeContent}>
                    <div className={cs.incomeOutcomeList}>
                        {
                            expensesList ?
                                expensesList
                                    .filter((e) => e.expense.id === currentExpense.id)
                                    .map((item) => (
                                            <div className={cs.incomeOutcomeRecord}>
                                                <div className={cs.incomeOutcomeRecordDate}>
                                                    <span>{item.date}</span>
                                                </div>
                                                <hr/>
                                                <div className={cs.incomeOutcomeRecordContent}>
                                                    <div className={cs.incomeAndAccountTitle}>
                                                <span className={cs.incomeTitle}>{
                                                    item.expense !== null ?
                                                        item.expense.title
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
                                                        <span>- {item.amount} тг</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )
                                :
                                null

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