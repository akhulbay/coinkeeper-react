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
                                        expensesList,
                                        currentAccount,
                                        addIncomeTransaction,
                                        addOutcomeTransaction
                                    }) => {
    const [hideHiddenIncomeDiv, setHideHiddenIncomeDiv] = useState(true);
    const [hideHiddenExpensesDiv, setHideHiddenExpensesDiv] = useState(true);

    const [incomeDate, setIncomeDate] = useState('');
    const [incomeSum, setIncomeSum] = useState("");
    const [incomeFromAccount, setIncomeFromAccount] = useState(null);

    const [expenseDate, setExpenseDate] = useState("");
    const [expenseSum, setExpenseSum] = useState(null);
    const [expenseCategory, setExpenseCategory] = useState(null);


    const saveIncome = () => {
        if (incomeDate !== "" && incomeSum !== "" && incomeFromAccount !== null) {
            addIncomeTransaction(incomeDate, Number(incomeSum), currentAccount, incomeFromAccount)

            setIncomeSum("");
            setIncomeDate("");
            setIncomeFromAccount(null);
        }
    };

    const saveExpense = () => {
        if (expenseDate !== "" && expenseSum !== "" && expenseCategory !== null) {
            addOutcomeTransaction(expenseDate, Number(expenseSum), currentAccount, expenseCategory)

            setExpenseSum("");
            setExpenseDate("");
            setExpenseCategory(null);
        }
    };
    return (
        <div className={ms.incomeOutcomeAdding}>
            <div className={ms.incomeAdding}>
                <span className={ms.incomeOutcomeTitle}>Список Доходов</span>
                <div className={ms.incomeContent}>
                    <div className={ms.incomeOutcomeList}>
                        {incomeList
                            .filter((i) => i.account.id === currentAccount.id)
                            .map((item) => (
                                <div className={ms.incomeOutcomeRecord}>
                                    <div className={ms.incomeOutcomeRecordDate}>
                                        <span>{item.date}</span>
                                    </div>
                                    <hr/>
                                    <div className={ms.incomeOutcomeRecordContent}>
                                        <div className={ms.incomeAndAccountTitle}>
                    <span className={ms.incomeTitle}>
                      {item.income !== null ? item.income.title : null}
                    </span>{" "}
                                            <br/>
                                            <span className={ms.accountTitle}>
                      {item.account !== null ? item.account.title : null}
                    </span>
                                        </div>
                                        <div className={ms.incomeRecordSum}>
                                            <span>+ {item.amount} тг</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div
                        className={`hiddenIncomes ${
                            hideHiddenIncomeDiv ? " hide-div" : " "
                        }`}
                    >
                        <IncomeList
                            income={income}
                            setHideHiddenIncomeDiv={setHideHiddenIncomeDiv}
                            setIncomeAccount={setIncomeFromAccount}
                        />
                    </div>
                    <div className={ms.addIncome}>
                        <div className={ms.sumAndButton}>
                            <input
                                id={ms.sum}
                                placeholder={"Enter sum"}
                                value={incomeSum}
                                onChange={(e) => setIncomeSum(e.target.value)}
                            />
                            <div
                                className={ms.addIncomeOptions}
                                onClick={() => {
                                    setHideHiddenIncomeDiv(false);
                                }}
                            >
                                {/*<span>Incomes</span>*/}
                                {incomeFromAccount === null ? (
                                    <span>Incomes</span>
                                ) : (
                                    <span>{incomeFromAccount.title}</span>
                                )}
                            </div>
                        </div>
                        <div className={ms.date}>
                            <input
                                id={ms.date}
                                type={"date"}
                                value={incomeDate}
                                onChange={(e) => setIncomeDate(e.target.value)}
                            />
                            <button className={ms.addButton} onClick={saveIncome}>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={ms.outcomeAdding}>
                <span className={ms.incomeOutcomeTitle}>Список Расходов</span>
                <div className={ms.incomeContent}>
                    <div className={ms.incomeOutcomeList}>
                        {expensesList
                            .filter((e) => e.account.id === currentAccount.id)
                            .map((item) => (
                            <div className={ms.incomeOutcomeRecord}>
                                <div className={ms.incomeOutcomeRecordDate}>
                                    <span>{item.date}</span>
                                </div>
                                <hr/>
                                <div className={ms.incomeOutcomeRecordContent}>
                                    <div className={ms.incomeAndAccountTitle}>
                    <span className={ms.incomeTitle}>
                      {item.expense !== null ? item.expense.title : null}
                    </span>{" "}
                                        <br/>
                                        <span className={ms.accountTitle}>
                      {item.account !== null ? item.account.title : null}
                    </span>
                                    </div>
                                    <div className={ms.expenseRecordSum}>
                                        <span>- {item.amount} тг</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        className={`hiddenExpenses ${
                            hideHiddenExpensesDiv ? " hide-div" : " "
                        }`}
                    >
                        <ExpensesList
                            expenses={expenses}
                            setHideHiddenExpensesDiv={setHideHiddenExpensesDiv}
                            setExpenseCategory={setExpenseCategory}
                        />
                    </div>
                    <div className={ms.addIncome}>
                        <div className={ms.sumAndButton}>
                            <input
                                id={ms.sum}
                                placeholder={"Enter sum"}
                                value={expenseSum}
                                onChange={(e) => setExpenseSum(e.target.value)}
                            />
                            <div
                                className={ms.addExpensesOptions}
                                onClick={() => {
                                    setHideHiddenExpensesDiv(false);
                                }}
                            >
                                {/*<span>Category</span>*/}
                                {expenseCategory === null ? (
                                    <span>Category</span>
                                ) : (
                                    <span>{expenseCategory.title}</span>
                                )}
                            </div>
                        </div>
                        <div className={ms.date}>
                            <input
                                id={ms.date}
                                type={"date"}
                                value={expenseDate}
                                onChange={(e) => setExpenseDate(e.target.value)}
                            />
                            <button className={ms.addButton} onClick={saveExpense}>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
