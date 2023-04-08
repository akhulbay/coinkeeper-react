import * as React from "react";
import cs from "./CategoryAccount.module.css";
import CircleProgressBar from "../CircleProgressBar/CircleProgressBar";
import { useState } from "react";
import ModalCategory from "../Modal/ModalCategory";

export const CategoryOutcomeVisual = ({
  canSpendSum,
  setCanSpendSum,
  categoryOutcomePercentage,
}) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={cs.incomeOutcomeVisual}>
      <div className={cs.outcomeBlock}>
        <span className={cs.title}>Расходы</span>
        <CircleProgressBar percentage={categoryOutcomePercentage} />
        <div className={cs.needToEarn}>{canSpendSum} тг</div>
      </div>
      <div className={cs.changeButton}>
        <button onClick={() => setModalActive(!modalActive)}>Изменить</button>
      </div>
      <ModalCategory
        active={modalActive}
        setActive={setModalActive}
        canSpendSum={canSpendSum}
        setCanSpendSum={setCanSpendSum}
      />
    </div>
  );
};
