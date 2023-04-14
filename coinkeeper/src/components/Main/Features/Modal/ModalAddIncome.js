import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ModalFeature.css";
import storage from "../../../Icons/component";
import uuid from "react-uuid";
import { createIncome } from "../../../../data/MainFunctionUtil";

function ModalAddIncome({
  modalIncomeActive,
  setModalIncomeActive,
  addNewIncome,
}) {
  const [incomeName, setIncomeName] = useState("");
  const [staticIcon, setStaticIcon] = useState(storage.iconsForIncome[2]);
  const addIncome = () => {
    if (incomeName) {
      addNewIncome(incomeName, staticIcon);
      setIncomeName("");
      setStaticIcon(storage.iconsForIncome[2]);
    }
  };

  return (
    <div
      className={modalIncomeActive ? "modalAddIncome active" : "modalAddIncome"}
    >
      <div
        className={
          modalIncomeActive
            ? "modalAddIncome_content active"
            : "modalAddIncome_content"
        }
      >
        <div className="tableFeature">
          <button
            className="xButton"
            onClick={() => {
              setModalIncomeActive(false);
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
                  setStaticIcon(storage.iconsForIncome[1]);
                }}
              >
                <img src={storage.iconsForIncome[1]} />
              </div>
              <div
                className="iconItem"
                onClick={() => {
                  setStaticIcon(storage.iconsForIncome[2]);
                }}
              >
                <img src={storage.iconsForIncome[2]} />
              </div>
              <div
                className="iconItem"
                onClick={() => {
                  setStaticIcon(storage.iconsForIncome[4]);
                }}
              >
                <img src={storage.iconsForIncome[4]} />
              </div>
            </div>
          </div>
          <button onClick={addIncome}>Save</button>
        </div>
      </div>
    </div>
  );
}
export default ModalAddIncome;
