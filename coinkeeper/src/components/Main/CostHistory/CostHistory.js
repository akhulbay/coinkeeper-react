import cs from "./CostHistory.module.css";
import DailyReport from "../DailyReport/DailyReport";

function CostHistory({expensesList, incomeList}) {
    return (
        <div className={cs.CostHistory}>
            <DailyReport expensesList={expensesList} incomeList={incomeList} />
        </div>
    );
}

export default CostHistory;