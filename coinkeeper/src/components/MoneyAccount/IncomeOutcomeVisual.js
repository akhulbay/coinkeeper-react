// @flow
import * as React from 'react';
import ms from "./MoneyAccount.module.css";
import CircleProgressBar from "../CircleProgressBar/CircleProgressBar";

export const IncomeOutcomeVisual = ({incomePercentage, outcomePercentage, needToEarnSum, canSpendSum}) => {
    return (
        <div className={ms.incomeOutcomeVisual}>
            <div className={ms.incomeBlock}>
                <span className={ms.title}>Доходы</span>
                <CircleProgressBar percentage={outcomePercentage}/>
                <div className={ms.needToEarn}>
                    {needToEarnSum} тг
                </div>
            </div>
            <div className={ms.changeButton}>
                <button>Изменить</button>
            </div>
            <div className={ms.outcomeBlock}>
                <span className={ms.title}>Расходы</span>
                <CircleProgressBar percentage={incomePercentage}/>
                <div className={ms.needToEarn}>
                    {canSpendSum} тг
                </div>
            </div>

        </div>
    );
};