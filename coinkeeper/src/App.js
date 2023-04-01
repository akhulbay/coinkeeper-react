import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useEffect, useState } from "react";
import {BrowserRouter,Route,Routes } from "react-router-dom";
import Account from "./components/Account/Account";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
function App() {
  const [income, setIncome] = useState(
    JSON.parse(localStorage.getItem("income")) || [
      {
        id: 1,
        title: "IITU",
        icon: "",
      },
      {
        id: 2,
        title: "Salary",
        // icon: ,
      },
      {
        id: 3,
        title: "Other",
        // icon: ,
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("income", JSON.stringify(income));
  }, [income]);

  return (
      <BrowserRouter>
          <div>

              <Routes>
                  <Route path={"/"}
                         element={<Login/>}/>
                  <Route path={"/register"}
                         element={<Register/>}/>
                  <Route
                      path={"/login"}
                      element={
                      <Main income={income} setIncome={setIncome} />} />
                  <Route
                      path={"/account"}
                      element={<Account></Account>} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;
