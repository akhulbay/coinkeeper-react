import ds from "./DailyReport.module.css"


function DailyReport({expensesList, incomeList}) {
    return (
        <div className={ds.reportBlock}>
            <span className={ds.reportTitle}>Сегодня, 1 апреля</span>
            <div className={ds.incomeOutcomeList}>
                {
                    incomeList.map((item) => (
                            <div className={ds.incomeOutcomeRecord}>
                                <div className={ds.incomeOutcomeRecordDate}>
                                    <span>{item.date}</span>
                                </div>
                                <hr/>
                                <div className={ds.incomeOutcomeRecordContent}>
                                    <div className={ds.incomeAndAccountTitle}>
                                                <span className={ds.incomeTitle}>{
                                                    item.income !== null ?
                                                        item.income.title
                                                        :
                                                        null
                                                }</span> <br/>
                                        <span className={ds.accountTitle}>{
                                            item.account !== null ?
                                                item.account.title
                                                :
                                                null
                                        }</span>
                                    </div>
                                    <div className={ds.incomeRecordSum}>
                                        <span>+ {item.sum} тг</span>
                                    </div>
                                </div>
                            </div>
                        )
                    )

                }
            </div>
        </div>
    )
}

export default DailyReport;