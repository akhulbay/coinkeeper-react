import cs from "./CostHistory.module.css";
import DailyReport from "../DailyReport/DailyReport";
import {OutcomeHistory} from "./OutcomeHistory";
import {IncomeHistory} from "./IncomeHistory";

function CostHistory({expensesList, incomeList}) {
    return (
        <div className={cs.CostHistory}>
            <IncomeHistory incomeList={incomeList}></IncomeHistory>
            <OutcomeHistory expensesList={expensesList} incomeList={incomeList}/>
        </div>
    );
}

export default CostHistory;