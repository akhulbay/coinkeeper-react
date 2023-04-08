import ds from "./DailyReport.module.css"


function DailyReport({incomeExpenseList}) {
    return (
        <div className={ds.reportBlock}>
            <span className={ds.reportTitle}>Сегодня, 1 апреля</span>
            <div className={ds.incomeOutcomeList}>
                {
                    incomeExpenseList.map((item) => (
                        item.data.map((i) => (
                            <div className={ds.incomeOutcomeRecord}>
                                <div className={ds.incomeOutcomeRecordDate}>
                                    <span>{i.transactionId}</span>
                                </div>
                                <hr/>
                                <div className={ds.incomeOutcomeRecordContent}>
                                    <div className={ds.incomeAndAccountTitle}>
                                                <span className={ds.incomeTitle}>{
                                                    i.income !== null ?
                                                        i.income.title
                                                        :
                                                        null
                                                }</span> <br/>
                                        <span className={ds.accountTitle}>{
                                            i.account !== null ?
                                                i.account.title
                                                :
                                                null
                                        }</span>
                                    </div>
                                    <div className={ds.incomeRecordSum}>
                                        <span>+ {i.sum} тг</span>
                                    </div>
                                </div>
                            </div>
                        ))
                        )
                    )

                }
            </div>
        </div>
    )
}

export default DailyReport;