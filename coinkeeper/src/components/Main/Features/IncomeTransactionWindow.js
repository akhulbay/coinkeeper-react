import fs from './Features.module.css'
import {useState} from "react";

export const IncomeTransactionWindow = ({income, accounts, addIncomeTransaction}) => {
    const [amountInput, setAmountInput] = useState(0);
    const [date, setDate] = useState('2023-04-15')
    const [incomeInput, setIncomeInput] = useState(0);
    const [accountInput, setAccountInput] = useState(0);

    function parseDate() {
        let date = new Date();
        const month = date.getMonth() + 1; //months from 1-12
        const day = date.getDate();
        const year = date.getFullYear();

        let newdate = year + "-" + month + "-" + day;
        setDate(newdate);
    }

    const handleSubmit = (e) => {

        // parseDate()

        e.preventDefault()
        if (!isNaN(amountInput) && date && !isNaN(incomeInput) && !isNaN(accountInput)) {
            addIncomeTransaction(date, amountInput, accounts[accountInput], income[incomeInput])
        }

    }

    const handleSourceChange = (e) => {
        let newIncome = e.currentTarget.value
        setIncomeInput(newIncome)
    }
    return (
        <div className={fs.transactionBlock}>
            <div className={fs.transactionContent}>
                <div className={fs.selectFrom}>
                    <select onChange={e => setIncomeInput(e.target.value)}>
                        {
                            income.map((d,i) => (
                                    <option value={i}>{d.title}</option>
                                )
                            )
                        }
                    </select>
                </div>
                <div className={fs.transInputSum}>
                    <input type={"number"}
                           onChange={e => setAmountInput(e.target.value)}/>
                </div>
                <div className={fs.selectTo}>
                    <select onChange={event => setAccountInput(event.target.value)}>
                        {
                            accounts.map((d,i) => (
                                    <option value={i}>{d.title}</option>
                                )
                            )
                        }
                    </select>
                </div>
                <button onClick={handleSubmit}>Send</button>
            </div>
        </div>
    );

};