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
}) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={ms.incomeOutcomeVisual}>
      <div className={ms.incomeBlock}>
        <span className={ms.title}>Доходы</span>
        <CircleProgressBar percentage={outcomePercentage} />
        <div className={ms.needToEarn}>{needToEarnSum} тг</div>
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
        <span className={ms.title}>Расходы</span>
        <CircleProgressBar percentage={incomePercentage} />
        <div className={ms.needToEarn}>{canSpendSum} тг</div>
      </div>
    </div>
  );
};
