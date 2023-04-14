import ms from "./Main.module.css";
import Features from "./Features/Features";
import CostHistory from "./CostHistory/CostHistory";
import Header from "../Header/Header";
import {Navigate} from "react-router-dom";
import MoneyAccount from "../MoneyAccount/MoneyAccount";
import CategoryAccount from "../CategoryAccount/CategoryAccount";

function Main({
                  income,
                  accounts,
                  expenses,
                  incomeList,
                  expensesList,
                  setCurrentAccount,
                  setCurrentExpense,
                  addIncomeTransaction
              }) {
    let loginIn = JSON.parse(localStorage.getItem("loginIn"));
    if (!loginIn) return <Navigate to="/register"/>;
    return (
        <div>
            <Header/>
            <div className={ms.main}>
                <Features
                    income={income}
                    accounts={accounts}
                    expenses={expenses}
                    setCurrentAccount={setCurrentAccount}
                    setCurrentExpense={setCurrentExpense}
                    addIncomeTransaction={addIncomeTransaction}
                    incomeList={incomeList}
                    expensesList={expensesList}
                />
                <CostHistory expensesList={expensesList} incomeList={incomeList} expenses={expenses}/>

            </div>
        </div>
    );
}

export default Main;
