// @flow
import * as React from "react";
import ms from "./MoneyAccount.module.css";
import { useState } from "react";
import CircleProgressBar from "../CircleProgressBar/CircleProgressBar";
import ModalInput from "../Modal/ModalInput";
import { getAccountCurrentBalance, getAccountCurrentExpense } from "../../data/MainFunctionUtil";

export const IncomeOutcomeVisual = ({
  incomePercentage,
  outcomePercentage,
  needToEarnSum,
  setneedToEarnSum,
  canSpendSum,
  setCanSpendSum,
  currentAccount,
  userInfo,
  setUserInfo,
  updateAccount,
  incomeList,
  expensesList,
  setIncomePercentage,
}) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={ms.incomeOutcomeVisual}>
      <div className={ms.incomeBlock}>
        <span className={ms.title}>Плановый расход</span>
        <span className={ms.titleValue}>{currentAccount.title}</span>
        <div className={ms.needToEarn}>{currentAccount.initialBalance} тг</div>
      </div>
      <div className={ms.changeButton}>
        <div className={ms.circleBar}>
          <CircleProgressBar percentage={outcomePercentage} />
        </div>
        <div className={ms.changeButton}>
          <button onClick={() => setModalActive(!modalActive)}>Изменить</button>
        </div>
      </div>
      <ModalInput
        active={modalActive}
        setActive={setModalActive}
        setneedToEarnSum={setneedToEarnSum}
        setCanSpendSum={setCanSpendSum}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        currentAccount={currentAccount}
        updateAccount={updateAccount}
      />
      <div className={ms.outcomeBlock}>
        <span className={ms.title}> Текущий расход</span>
        <span className={ms.titleValue}>{currentAccount.title}</span>
        <div className={ms.needToEarn}>
          {getAccountCurrentExpense(currentAccount,expensesList)}{" "}
          тг
        </div>
      </div>
    </div>
  );
};
