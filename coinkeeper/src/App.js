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
