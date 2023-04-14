import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./components/Account/Account";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import "./App.css";
import storage from "./components/Icons/component";
import MoneyAccount from "./components/MoneyAccount/MoneyAccount";
import CategoryAccount from "./components/CategoryAccount/CategoryAccount";
import {
  createExpense,
  createAccount,
  createIncome,
  getUserInfo,
  createIncomeTransaction,
  createOutcomeTransaction,
} from "./data/MainFunctionUtil";

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

  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo")) || getUserInfo(true)
  );

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  function updateAccount(currentAccount, initialBalance) {
    if (currentAccount) {
      let index = userInfo.accounts.findIndex(
        (i) => i.id === currentAccount.id
      );
      let newList = [...userInfo.accounts];
      newList[index] = currentAccount;

      const updatedUser = {
        ...userInfo,
        accounts: newList,
      };
      setUserInfo(updatedUser);
    }
  }

  function updateCategory(currentExpense, spendPlan) {
    if (currentExpense) {
      let index = userInfo.expenses.findIndex((i) => i.id === createExpense.id);
      let newList = [...userInfo.expenses];
      newList[index] = createExpense;

      const updatedUserCat = {
        ...userInfo,
        expenses: newList,
      };
      setUserInfo(updatedUserCat);
    }
  }

  function addNewIncome(title, icon) {
    const updatedUser = {
      ...userInfo,
      incomes: [...userInfo.incomes, createIncome(title, 0, icon)],
    };
    setUserInfo(updatedUser);
  }

  function addNewAccount(title, initialBalance, icon) {
    const updatedUser = {
      ...userInfo,
      accounts: [
        ...userInfo.accounts,
        createAccount(title, initialBalance, icon),
      ],
    };
    setUserInfo(updatedUser);
  }

  function addNewExpense(title, spendPlan, icon) {
    const updatedUser = {
      ...userInfo,
      expenses: [...userInfo.expenses, createExpense(title, spendPlan, icon)],
    };
    setUserInfo(updatedUser);
  }

  function addIncomeTransaction(date, amount: number, account, income) {
    if (date && !isNaN(amount) && account && income) {
      let newTransactions = [
        ...(userInfo.incomeTransactionList || []),
        createIncomeTransaction(date, amount, account, income),
      ];
      const newUserInfo = {
        ...userInfo,
        incomeTransactionList: newTransactions,
      };
      setUserInfo(newUserInfo);
    }
  }

  function addOutcomeTransaction(date, amount: number, account, expense) {
    if (date && !isNaN(amount) && account && expense) {
      let newTransactions = [
        ...(userInfo.expenseTransactionList || []),
        createOutcomeTransaction(date, amount, account, expense),
      ];
      const newUserInfo = {
        ...userInfo,
        expenseTransactionList: newTransactions,
      };
      setUserInfo(newUserInfo);
    }
  }

  function getIncomeTransactions() {
    return userInfo.incomeTransactionList;
  }

  function getOutcomeTransactions() {
    return userInfo.expenseTransactionList;
  }

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

  const [currentAccount, setCurrentAccount] = useState(
    JSON.parse(localStorage.getItem("currentAccount") || null)
  );

  useEffect(() => {
    localStorage.setItem("currentAccount", JSON.stringify(currentAccount));
  }, [currentAccount]);

  const [currentExpense, setCurrentExpense] = useState(
    JSON.parse(localStorage.getItem("currentExpense") || null)
  );

  useEffect(() => {
    localStorage.setItem("currentExpense", JSON.stringify(currentExpense));
  }, [currentExpense]);

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
                  income={userInfo.incomes}
                  accounts={userInfo.accounts}
                  expenses={userInfo.expenses}
                  incomeList={getIncomeTransactions()}
                  expensesList={getOutcomeTransactions()}
                  setCurrentAccount={setCurrentAccount}
                  setCurrentExpense={setCurrentExpense}
                  addIncomeTransaction={addIncomeTransaction}
                  userInfo={userInfo}
                  setUserInfo={setUserInfo}
                  addNewIncome={addNewIncome}
                  addNewAccount={addNewAccount}
                  addNewExpense={addNewExpense}
                />
              }
            />
            <Route path={"/account"} element={<Account />} />
            <Route
              path={"main/moneyAccount"}
              element={
                <MoneyAccount
                  income={userInfo.incomes}
                  expenses={userInfo.expenses}
                  incomeList={getIncomeTransactions()}
                  expensesList={getOutcomeTransactions()}
                  currentAccount={currentAccount}
                  addIncomeTransaction={addIncomeTransaction}
                  addOutcomeTransaction={addOutcomeTransaction}
                  userInfo={userInfo}
                  setUserInfo={setUserInfo}
                  updateAccount={updateAccount}
                />
              }
            />
            <Route
              path={"main/categoryAccount"}
              element={
                <CategoryAccount
                  expensesList={getOutcomeTransactions()}
                  accounts={userInfo.accounts}
                  currentExpense={currentExpense}
                  addOutcomeTransaction={addOutcomeTransaction}
                  userInfo={userInfo}
                  updateCategory={updateCategory}
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
