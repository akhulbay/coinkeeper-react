import cs from "./CategoryAccount.module.css";
import {useState} from "react";
import uuid from "react-uuid";
import AccountList from "./AccountList";

export const CategoryOutcomeAdding = ({
                                        expenses,
                                        expensesList,
                                        setExpensesList,
                                        expenseId,
                                        accounts
                                    }) => {

    const [hideHiddenAccountDiv, setHideHiddenAccountDiv] = useState(true);

    const [expenseDate, setExpenseDate] = useState("");
    const [expenseSum, setExpenseSum] = useState(null);
    const [expenseFromIncome, setExpenseFromIncome] = useState(null);
    const [expenseCategory, setExpenseCategory] = useState(null);

    const setAccount = () => {
        expenses.filter((expense) => {
            if (expense.id === expenseId) {
                setExpenseCategory(expense);
            }
        })
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
                    category: expenseCategory
                }]
            );

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
                            expensesList.map((item) => (
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