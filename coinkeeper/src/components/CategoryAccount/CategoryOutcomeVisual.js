import * as React from "react";
import cs from "./CategoryAccount.module.css";
import CircleProgressBar from "../CircleProgressBar/CircleProgressBar";
import { useState } from "react";
import ModalCategory from "../Modal/ModalCategory";

export const CategoryOutcomeVisual = ({
  canSpendSum,
  setCanSpendSum,
  categoryOutcomePercentage,
  currentExpense,
  updateCategory,
  getPercentage,
  setCategoryOutcomePercentage,
}) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={cs.incomeOutcomeVisual}>
      <div className={cs.outcomeBlock}>
        <span className={cs.title}>Расходы {currentExpense.title}</span>
        <CircleProgressBar percentage={categoryOutcomePercentage} />
        <div className={cs.needToEarn}>{currentExpense.spendPlan} тг</div>
      </div>
      <div className={cs.changeButton}>
        <button onClick={() => setModalActive(!modalActive)}>Изменить</button>
      </div>
      <ModalCategory
        active={modalActive}
        setActive={setModalActive}
        canSpendSum={canSpendSum}
        setCanSpendSum={setCanSpendSum}
        currentExpense={currentExpense}
        updateCategory={updateCategory}
        getPercentage={getPercentage}
        setCategoryOutcomePercentage={setCategoryOutcomePercentage}
      />
    </div>
  );
};
