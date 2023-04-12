import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./components/Account/Account";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import './App.css'
import storage from "./components/Icons/component";
import MoneyAccount from "./components/MoneyAccount/MoneyAccount";
import CategoryAccount from "./components/CategoryAccount/CategoryAccount";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const loginIn = JSON.parse(localStorage.getItem("loginIn"));
  if (!loginIn)
    localStorage.setItem(
      "loginIn",
      JSON.stringify({
        users: [{ login: "ainur", password: "qwerty", isAuth: false }],
      })
    );
  useEffect(() => {
    loginIn.users.forEach((user) => {
      if (user.isAuth) {
        setIsAuth(true);
      }
    });
  }, []);
  const [income, setIncome] = useState(
    JSON.parse(localStorage.getItem("income")) || [
      {
        id: 1,
        title: "IITU",
        sum: 100000,
        icon: storage.iconsForIncome[1],
        color: "rgb(0, 190, 238)",
      },
      {
        id: 2,
        title: "Salary",
        sum: 150000,
        icon: storage.iconsForIncome[4],
        color: "rgb(0, 190, 238)",
      },
      {
        id: 3,
        title: "Other",
        sum: 30000,
        icon: storage.iconsForIncome[2],
        color: "rgb(0, 190, 238)",
      },
      {
        id: 4,
        title: "Other",
        sum: 0,
        icon: storage.iconsForIncome[2],
        color: "rgb(0, 190, 238)",
      },
      {
        id: 5,
        title: "Other",
        sum: 0,
        icon: storage.iconsForIncome[2],
        color: "rgb(0, 190, 238)",
      },
      {
        id: 6,
        title: "Other",
        sum: 0,
        icon: storage.iconsForIncome[2],
        color: "rgb(0, 190, 238)",
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
        sum: 15000,
        finishSum: 25000,
        icon: storage.iconsForAccount[1],
        color: "rgb(255, 205, 0)",
        fill: "linear-gradient(to top, rgb(255, 205, 0) 100%, transparent 0%)",
      },
      {
        id: 2,
        title: "Halyk",
        sum: 80000,
        finishSum: 100000,
        icon: storage.iconsForAccount[3],
        color: "rgb(255, 205, 0)",
        fill: "linear-gradient(to top, rgb(255, 205, 0) 100%, transparent 0%)",
      },
      {
        id: 3,
        title: "Cash",
        sum: 0,
        finishSum: 180000,
        icon: storage.iconsForAccount[2],
        color: "rgb(255, 205, 0)",
        fill: "linear-gradient(to top, rgb(255, 205, 0) 100%, transparent 0%)",
      },
    ]
  );

  accounts.map((accounts) => {
    if (
      accounts.sum == accounts.finishSum ||
      accounts.sum < accounts.finishSum
    ) {
      accounts.color = "rgb(255, 205, 0)";
      accounts.fill =
        "linear-gradient(to top, " +
        accounts.color +
        " " +
        Math.round((accounts.sum / accounts.finishSum) * 100) +
        "%, red " +
        Math.round((accounts.sum / accounts.finishSum) * 100) +
        "%)";
      console.log(accounts.fill);
    }
    //   else {
    //   accounts.color = "red";
    //   accounts.fill = "linear-gradient(to top, red 100%, transparent 0%";
    //   console.log(accounts.fill);
    // }
  });

  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }, [accounts]);

  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses")) || [
      {
        id: 1,
        title: "Products",
        icon: storage.iconsForExpenses[1],
        maxSum: 30000,
        totalSum: 15000,
        color: "rgb(194, 198, 202)",
        fill: "",
      },
      {
        id: 2,
        title: "Clothing",
        icon: storage.iconsForExpenses[2],
        maxSum: 70000,
        totalSum: 45000,
        color: "rgb(194, 198, 202)",
        fill: "",
      },
      {
        id: 3,
        title: "Home",
        icon: storage.iconsForExpenses[3],
        maxSum: 30000,
        totalSum: 30000,
        color: "rgb(194, 198, 202)",
        fill: "",
      },
      {
        id: 4,
        title: "Phone",
        icon: storage.iconsForExpenses[4],
        maxSum: 10000,
        totalSum: 0,
        color: "rgb(194, 198, 202)",
        fill: "",
      },
      {
        id: 5,
        title: "Transport",
        icon: storage.iconsForExpenses[5],
        maxSum: 25000,
        totalSum: 1500,
        color: "rgb(194, 198, 202)",
        fill: "",
      },
      {
        id: 6,
        title: "Entertain",
        icon: storage.iconsForExpenses[6],
        maxSum: 40000,
        totalSum: 47000,
        color: "rgb(194, 198, 202)",
        fill: "",
      },
      {
        id: 7,
        title: "Services",
        icon: storage.iconsForExpenses[7],
        maxSum: 15000,
        totalSum: 12000,
        color: "rgb(194, 198, 202)",
        fill: "",
      },
    ]
  );

  expenses.map((expenses) => {
    if (
      expenses.maxSum == expenses.totalSum ||
      expenses.maxSum > expenses.totalSum
    ) {
      expenses.color = "green";
      expenses.fill =
        "linear-gradient(to top, " +
        expenses.color +
        " " +
        Math.round((expenses.totalSum / expenses.maxSum) * 100) +
        "%, rgb(194, 198, 202) " +
        Math.round((expenses.totalSum / expenses.maxSum) * 100) +
        "%)";
      console.log(expenses.fill);
    } else {
      expenses.color = "red";
      expenses.fill = "linear-gradient(to top, red 100%, transparent 0%";
      console.log(expenses.fill);
    }
  });

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
        category: expenses.at(0),
      },
      {
        id: 2,
        date: "2023-03-07",
        sum: "20000",
        account: accounts.at(0),
        category: expenses.at(0),
      },
    ]
  );
  useEffect(() => {
    localStorage.setItem("expensesList", JSON.stringify(expensesList));
  }, [expensesList]);

  const [incomeList, setIncomeList] = useState(
    JSON.parse(localStorage.getItem("incomeList")) || [
      {
        id: 1,
        date: "2023-03-06",
        sum: "30000",
        account: accounts.at(0),
        income: income.at(0),
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("incomeList", JSON.stringify(incomeList));
  }, [incomeList]);

  const [incomeExpenseList, setIncomeExpenseList] = useState(
    JSON.parse(localStorage.getItem("incomeExpenseList")) || [
      {
        id: "2023-03-06",
        data: [
          {
            transactionId: 1,
            sum: "30000",
            status: true, // true for income and false for expense
            account: accounts.at(0),
            category: null, //this field is only for expanse
            income: income.at(0), //this field is only for income
          },
        ],
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem(
      "incomeExpenseList",
      JSON.stringify(incomeExpenseList)
    );
  }, [incomeExpenseList]);

  const [currentAccount, setCurrentAccount] = useState(null);
  const [currentExpense, setCurrentExpense] = useState(null);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="container">
          <Routes>
            <Route path={"/"} element={<Login setIsAuth={setIsAuth} />} />
            <Route path={"/register"} element={<Register />} />
            <Route
              path={"/main"}
              element={
                <Main
                  income={income}
                  setIncome={setIncome}
                  accounts={accounts}
                  setAccounts={setAccounts}
                  expenses={expenses}
                  setExpense={setExpenses}
                  incomeList={incomeList}
                  setIncomeList={setIncomeList}
                  expensesList={expensesList}
                  setExpensesList={setExpensesList}
                  currentAccount={currentAccount}
                  setCurrentAccount={setCurrentAccount}
                  currentExpense={currentExpense}
                  setCurrentExpense={setCurrentExpense}
                />
              }
            />
            <Route path={"/account"} element={<Account />} />
            <Route
              path={"main/moneyAccount"}
              element={
                <MoneyAccount
                  income={income}
                  expenses={expenses}
                  incomeList={incomeList}
                  setIncomeList={setIncomeList}
                  expensesList={expensesList}
                  setExpensesList={setExpensesList}
                  accountId={null}
                  accounts={accounts}
                  incomeExpenseList={incomeExpenseList}
                  setIncomeExpenseList={setIncomeExpenseList}
                  currentAccount={currentAccount}
                  currentExpense={currentExpense}
                />
              }
            />
            <Route
              path={"main/categoryAccount"}
              element={
                <CategoryAccount
                  expensesList={expensesList}
                  setExpensesList={setExpensesList}
                  expenses={expenses}
                  expenseId={null}
                  accounts={accounts}
                  incomeExpenseList={incomeExpenseList}
                  setIncomeExpenseList={setIncomeExpenseList}
                  currentExpense={currentExpense}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
