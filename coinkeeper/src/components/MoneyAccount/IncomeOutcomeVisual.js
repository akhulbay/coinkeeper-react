// @flow
import * as React from "react";
import ms from "./MoneyAccount.module.css";
import { useState } from "react";
import CircleProgressBar from "../CircleProgressBar/CircleProgressBar";
import ModalInput from "../Modal/ModalInput";

export const IncomeOutcomeVisual = ({
  incomePercentage,
  outcomePercentage,
  needToEarnSum,
  setneedToEarnSum,
  canSpendSum,
  setCanSpendSum,
  currentAccount,
}) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={ms.incomeOutcomeVisual}>
      <div className={ms.incomeBlock}>
        <span className={ms.title}>Доходы {currentAccount.title}</span>
        <CircleProgressBar percentage={incomePercentage} />
        <div className={ms.needToEarn}>{currentAccount.finishSum} тг</div>
      </div>
      <div className={ms.changeButton}>
        <button onClick={() => setModalActive(!modalActive)}>Изменить</button>
      </div>
      <ModalInput
        active={modalActive}
        setActive={setModalActive}
        setneedToEarnSum={setneedToEarnSum}
        setCanSpendSum={setCanSpendSum}
      />
      <div className={ms.outcomeBlock}>
        <span className={ms.title}>Расходы {currentAccount.title}</span>
        <CircleProgressBar percentage={outcomePercentage} />
        <div className={ms.needToEarn}>{currentAccount.sum} тг</div>
      </div>
    </div>
  );
};
