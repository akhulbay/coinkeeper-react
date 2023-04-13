import fs from './Features.module.css'

export const IncomeTransactionWindow = () => {

    return (
        <div className={fs.transactionBlock}>
            <div className={fs.transactionContent}>
                <div className={fs.selectFrom}>
                    <select>
                        <option>IITU</option>
                        <option>Salary</option>
                    </select>
                </div>
                <div className={fs.transInputSum}>
                    <input type={"text"}/>
                </div>
                <div className={fs.selectTo}>
                    <select>
                        <option>Kaspi</option>
                        <option>Halyk</option>
                    </select>
                </div>
                <button className="btn btn-success btn-sm">Send</button>
            </div>
        </div>
    );

};