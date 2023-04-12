import cs from './CostHistory.module.css';
import React from "react";
import ms from "../../MoneyAccount/MoneyAccount.module.css";

export const IncomeHistory = ({
                                  incomeList
                              }) => {

    return (
        <div className={cs.OutcomeHistory}>
            <div className={cs.OutcomeList}>
                <span className={cs.outcomeTitle}>All Incomes:</span>
                {
                    incomeList.map((item) => (
                            <div className={cs.OutcomeRecord}>
                                <div className={cs.incomeOutcomeRecordDate}>
                                    <span>{item.date}</span>
                                </div>
                                <hr/>
                                <div className={cs.OutcomeRecordContent}>
                                    <div className={ms.incomeAndAccountTitle}>
                                        <span className={ms.incomeTitle}>
                                            {item.income !== null ? item.income.title : null}
                                        </span>{" "}
                                        <br/>
                                        <span className={ms.accountTitle}>
                                            {item.account !== null ? item.account.title : null}
                                        </span>
                                    </div>
                                    <div className={ms.incomeRecordSum}>
                                        <span>+ {item.sum} тг</span>
                                    </div>
                                </div>
                            </div>
                        )
                    )

                }
            </div>
        </div>
    );
};