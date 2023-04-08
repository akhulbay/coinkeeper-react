import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Modal.css";

const ModalCategory = ({ active, setActive, canSpendSum, setCanSpendSum }) => {
  const [expense, setExpense] = useState("");

  const saveSum = () => {
    setCanSpendSum(expense);
    setActive(!active);
  };
  //   console.log(income + " " + expense);
  return (
    <div className={active ? "modalInput active" : "modalInput"}>
      <div
        className={active ? "modalInput_content active" : "modalInput_content"}
      >
        <div className="tableInput">
          <div>
            <h4>Расход</h4>
            <input type="number" onChange={(e) => setExpense(e.target.value)} />
          </div>
          <button onClick={saveSum}>Save</button>
        </div>
      </div>
    </div>
  );
};
export default ModalCategory;
