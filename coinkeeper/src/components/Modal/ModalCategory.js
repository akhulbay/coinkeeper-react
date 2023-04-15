import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Modal.css";

const ModalCategory = ({
  active,
  setActive,
  canSpendSum,
  setCanSpendSum,
  currentExpense,
  updateCategory,
  getPercentage,
  setCategoryOutcomePercentage,
}) => {
  const [expense, setExpense] = useState("");

  const saveSum = () => {
    const newBalance = currentExpense;
    newBalance.spendPlan = expense;
    updateCategory(newBalance);
    setActive(!active);
    setCategoryOutcomePercentage(getPercentage);
  };
  //   console.log(income + " " + expense);
  return (
    <div className={active ? "modalCategory active" : "modalCategory"}>
      <div
        className={
          active ? "modalCategory_content active" : "modalCategory_content"
        }
      >
        <button className="modal_close1" onClick={() => setActive(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="modal_close_x1"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
        <div className="tableInput1">
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
