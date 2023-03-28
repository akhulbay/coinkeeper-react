import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useEffect, useState } from "react";

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
    <div>
      <Header />
      <Main income={income} setIncome={setIncome} />
    </div>
  );
}

export default App;
