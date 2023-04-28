import cs from "./CostHistory.module.css";
import {OutcomeHistory} from "./OutcomeHistory";
import {IncomeHistory} from "./IncomeHistory";
import {ArcElement, Chart as ChartJs, Legend, Title, Tooltip} from 'chart.js';
import {useEffect, useState} from "react";
import {Doughnut} from "react-chartjs-2";
import {getExpenseCurrentBalance} from "../../../data/MainFunctionUtil";

ChartJs.register(
    Tooltip, Title, ArcElement, Legend
);


function CostHistory({expensesList, incomeList, expenses}) {
    const [data, setData] = useState({
        datasets: [{
            data: [],
            backgroundColor:[]
        },
        ],
        labels: [],
    });
    useEffect(()=> {
        const label = [];
        const data = [];
        const fetchData = () =>  {
            for(const i of expenses) {
                label.push(i.title)
                data.push(getExpenseCurrentBalance(i, expensesList))
            }
                setData(
                    {
                        datasets: [{
                            data:data,
                            backgroundColor:[
                                'rgb(255, 205, 0)',
                                'rgb(0, 190, 238)',
                                '#05d398',
                                '#fc392f',
                                '#A02FFC',
                                '#FC2FF2',
                                '#392FFC'

                            ]
                        },
                        ],
                        labels:label,
                    }
                )

            }
        fetchData();
    }, [])
    return (
        <div className={cs.CostHistory}>
            <IncomeHistory incomeList={incomeList} expensesList={expensesList}/>
            <OutcomeHistory expensesList={expensesList} incomeList={incomeList}/>
            <div className={cs.chartBlock} style={{width:'80%', height:'33%'}}>
                <Doughnut data={data}/>
            </div>
        </div>
    );
}

export default CostHistory;