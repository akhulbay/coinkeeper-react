import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ModalFeature.css";
import storage from "../../../Icons/component";
import uuid from "react-uuid";
import { createIncome } from "../../../../data/MainFunctionUtil";

function ModalAddAccount({
  modalAccountActive,
  setModalAccountActive,
  addNewAccount,
}) {
  const [accountName, setAccountName] = useState("");
  const [staticIcon, setStaticIcon] = useState(storage.iconsForIncome[2]);
  const addAccount = () => {
    if (accountName) {
      addNewAccount(accountName, 0, staticIcon);
      setAccountName("");
      setStaticIcon(storage.iconsForIncome[2]);
    }
  };

  return (
    <div
      className={
        modalAccountActive ? "modalAddAccount active" : "modalAddAccount"
      }
    >
      <div
        className={
          modalAccountActive
            ? "modalAddAccount_content active"
            : "modalAddAccount_content"
        }
      >
        <div className="tableFeature">
          <button
            className="xButton"
            onClick={() => {
              setModalAccountActive(false);
            }}
          >
            x
          </button>
          <div>
            <h4>Название счета</h4>
            <input
              type={"text"}
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
            />
          </div>
          <div>
            <div className="iconItemsMenu">
              <div
                className="iconItem"
                onClick={() => {
                  setStaticIcon(storage.iconsForAccount[1]);
                }}
              >
                <img src={storage.iconsForAccount[1]} />
              </div>
              <div
                className="iconItem"
                onClick={() => {
                  setStaticIcon(storage.iconsForAccount[2]);
                }}
              >
                <img src={storage.iconsForAccount[2]} />
              </div>
              <div
                className="iconItem"
                onClick={() => {
                  setStaticIcon(storage.iconsForAccount[3]);
                }}
              >
                <img src={storage.iconsForAccount[3]} />
              </div>
            </div>
          </div>
          <button onClick={addAccount}>Save</button>
        </div>
      </div>
    </div>
  );
}
export default ModalAddAccount;
