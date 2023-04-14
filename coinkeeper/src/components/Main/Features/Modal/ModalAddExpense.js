import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ModalFeature.css";
import storage from "../../../Icons/component";
import uuid from "react-uuid";
import { createIncome } from "../../../../data/MainFunctionUtil";

function ModalAddExpense({
  modalExpenseActive,
  setModalExpenseActive,
  addNewExpense,
}) {
  const [incomeName, setIncomeName] = useState("");
  const [staticIcon, setStaticIcon] = useState(storage.iconsForIncome[2]);
  const addExpense = () => {
    if (incomeName) {
      addNewExpense(incomeName, 0, staticIcon);
      setIncomeName("");
      setStaticIcon(storage.iconsForIncome[2]);
    }
  };

  return (
    <div
      className={
        modalExpenseActive ? "modalAddExpense active" : "modalAddExpense"
      }
    >
      <div
        className={
          modalExpenseActive
            ? "modalAddExpense_content active"
            : "modalAddExpense_content"
        }
      >
        <div className="tableFeature">
          <button
            className="xButton"
            onClick={() => {
              setModalExpenseActive(false);
            }}
          >
            x
          </button>
          <div>
            <h4>Название счета</h4>
            <input
              type={"text"}
              value={incomeName}
              onChange={(e) => setIncomeName(e.target.value)}
            />
          </div>
          <div>
            <div className="iconItemsMenu">
              <div
                className="iconItem"
                onClick={() => {
                  setStaticIcon(storage.iconsForExpenses[1]);
                }}
              >
                <img src={storage.iconsForExpenses[1]} />
              </div>
              <div
                className="iconItem"
                onClick={() => {
                  setStaticIcon(storage.iconsForExpenses[2]);
                }}
              >
                <img src={storage.iconsForExpenses[2]} />
              </div>
              <div
                className="iconItem"
                onClick={() => {
                  setStaticIcon(storage.iconsForExpenses[3]);
                }}
              >
                <img src={storage.iconsForExpenses[3]} />
              </div>
              <div
                className="iconItem"
                onClick={() => {
                  setStaticIcon(storage.iconsForExpenses[4]);
                }}
              >
                <img src={storage.iconsForExpenses[4]} />
              </div>
              <div
                className="iconItem"
                onClick={() => {
                  setStaticIcon(storage.iconsForExpenses[5]);
                }}
              >
                <img src={storage.iconsForExpenses[5]} />
              </div>
              <div
                className="iconItem"
                onClick={() => {
                  setStaticIcon(storage.iconsForExpenses[6]);
                }}
              >
                <img src={storage.iconsForExpenses[6]} />
              </div>
              <div
                className="iconItem"
                onClick={() => {
                  setStaticIcon(storage.iconsForExpenses[7]);
                }}
              >
                <img src={storage.iconsForExpenses[7]} />
              </div>
            </div>
          </div>
          <button onClick={addExpense}>Save</button>
        </div>
      </div>
    </div>
  );
}
export default ModalAddExpense;
