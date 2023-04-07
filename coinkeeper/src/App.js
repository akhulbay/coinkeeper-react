import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Account from "./components/Account/Account";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import storage from "./components/Icons/component";
import icod from "./components/Icons/building.svg";

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const loginIn = JSON.parse(localStorage.getItem("loginIn"))
    if (!loginIn) localStorage.setItem(
        "loginIn",
        JSON.stringify({
            users: [{login: "ainur", password: "qwerty", isAuth: false}],
        })
    );
    useEffect(() => {
        loginIn.users.forEach((user) => {
            if (user.isAuth) {
                setIsAuth(true)
            }
        })
    }, [])
    const [income, setIncome] = useState(
        JSON.parse(localStorage.getItem("income")) || [
            {
                id: 1,
                title: "IITU",
                sum: 100000,
                icon: storage.icons[1],
            },
            {
                id: 2,
                title: "Salary",
                sum: 150000,
                icon: "build",
            },
            {
                id: 3,
                title: "Other",
                sum: 30000,
                icon: "build",
            },
            {
                id: 4,
                title: "Other",
                sum: 0,
                icon: "build",
            },
            {
                id: 5,
                title: "Other",
                sum: 0,
                icon: "build",
            },
            {
                id: 6,
                title: "Other",
                sum: 0,
                icon: "build",
            },
        ]
    );

    useEffect(() => {
        localStorage.setItem("income", JSON.stringify(income));
    }, [income]);

    const [accounts, setAccounts] = useState(
        JSON.parse(localStorage.getItem("accounts")) || [
            {
                id: 1,
                title: "Kaspi",
                sum: 25000,
            },
            {
                id: 2,
                title: "Halyk",
                sum: 100000,
            },
            {
                id: 3,
                title: "Cash",
                sum: 180000,
            },
        ]
    );

    useEffect(() => {
        localStorage.setItem("accounts", JSON.stringify(accounts));
    }, [accounts]);

    const [expenses, setExpenses] = useState(
        JSON.parse(localStorage.getItem("expenses")) || [
            {
                id: 1,
                title: "Products",
                maxSum: 30000,
                totalSum: 15000,
            },
            {
                id: 2,
                title: "Clothing",
                maxSum: 70000,
                totalSum: 45000,
                icon: icod,
            },
            {
                id: 3,
                title: "Home",
                maxSum: 30000,
                totalSum: 30000,
            },
            {
                id: 4,
                title: "Phone",
                maxSum: 10000,
                totalSum: 0,
            },
            {
                id: 5,
                title: "Transport",
                maxSum: 25000,
                totalSum: 1500,
            },
            {
                id: 6,
                title: "Entertain",
                maxSum: 40000,
                totalSum: 47000,
            },
            {
                id: 7,
                title: "Services",
                maxSum: 15000,
                totalSum: 12000,
            },
        ]
    );

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

    const [expensesList, setExpensesList] = useState(
        JSON.parse(localStorage.getItem("expensesList")) || [
            {
                id: 1,
                date: "2023-03-06",
                sum: "30000",
                account: accounts.at(0),
                category: expenses.at(0)
            },
        ]
    );

    useEffect(() => {
        localStorage.setItem("expensesList", JSON.stringify(expensesList))
    }, [expensesList]);

    const [incomeList, setIncomeList] = useState(
        JSON.parse(localStorage.getItem("incomeList")) || [
            {
                id: 1,
                date: "2023-03-06",
                sum: "30000",
                account: accounts.at(0),
                income: income.at(0)
            },
        ]
    );

    useEffect(() => {
        localStorage.setItem("incomeList", JSON.stringify(incomeList))
    }, [incomeList]);




    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path={"/"}
                           element={<Login setIsAuth={setIsAuth}/>}/>
                    <Route path={"/register"}
                           element={<Register/>}/>
                    <Route
                        path={"/main"}
                        element={
                            <Main income={income}
                                  setIncome={setIncome}
                                  accounts={accounts}
                                  setAccounts={setAccounts}
                                  expenses={expenses}
                                  setExpense={setExpenses}
                                  incomeList={incomeList}
                                  setIncomeList={setIncomeList}
                                  expensesList={expensesList}
                                  setExpensesList={setExpensesList}
                            />}/>
                    <Route
                        path={"/account"}
                        element={<Account/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
