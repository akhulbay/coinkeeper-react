import cs from "./CostHistory.module.css";
import DailyReport from "../DailyReport/DailyReport";

function CostHistory({incomeExpenseList}) {
    return (
        <div className={cs.CostHistory}>
            <DailyReport incomeExpenseList={incomeExpenseList}/>
        </div>
    );
}

export default CostHistory;