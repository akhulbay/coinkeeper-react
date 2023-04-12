import ms from "./Main.module.css";
import Features from "./Features/Features";
import CostHistory from "./CostHistory/CostHistory";
import Header from "../Header/Header";
import {Navigate} from "react-router-dom";
import MoneyAccount from "../MoneyAccount/MoneyAccount";
import CategoryAccount from "../CategoryAccount/CategoryAccount";

function Main({
                  income,
                  setIncome,
                  accounts,
                  setAccounts,
                  expenses,
                  setExpenses,
                  incomeList,
                  setIncomeList,
                  expensesList,
                  setExpensesList,
                  incomeExpenseList,
                  setIncomeExpenseList,
                  currentAccount,
                  setCurrentAccount,
                  currentExpense,
                  setCurrentExpense
              }) {
    let loginIn = JSON.parse(localStorage.getItem("loginIn"));
    if (!loginIn) return <Navigate to="/register"/>;
    return (
        <div>
            <Header/>
            <div className={ms.main}>
                <Features
                    income={income}
                    setIncome={setIncome}
                    accounts={accounts}
                    setAccounts={setAccounts}
                    expensesList={expensesList}
                    setExpensesList={setExpensesList}
                    expenses={expenses}
                    expenseId={null}
                    incomeExpenseList={incomeExpenseList}
                    setIncomeExpenseList={setIncomeExpenseList}
                    setExpense={setExpenses}
                    setCurrentAccount={setCurrentAccount}
                    setCurrentExpense={setCurrentExpense}
                    currentExpense={currentExpense}
                />
                {/*<CostHistory incomeExpenseList={incomeExpenseList}/>*/}
                {/*<MoneyAccount income={income}*/}
                {/*              expenses={expenses}*/}
                {/*              incomeList={incomeList}*/}
                {/*              setIncomeList={setIncomeList}*/}
                {/*              expensesList={expensesList}*/}
                {/*              setExpensesList={setExpensesList}*/}
                {/*              accountId={null}*/}
                {/*              accounts={accounts}*/}
                {/*              incomeExpenseList={incomeExpenseList}*/}
                {/*              setIncomeExpenseList={setIncomeExpenseList}*/}
                {/*/>*/}

            </div>
        </div>
    );
}

export default Main;
