import fm from "./Features.module.css";
import storage from "../../Icons/component";
import {Link} from "react-router-dom";
import {IncomeTransactionWindow} from "./IncomeTransactionWindow";
import {getAccountCurrentBalance, getExpenseCurrentBalance, getCurrentIncomeBalance} from "../../../data/MainFunctionUtil";

function Features({
                      income,
                      accounts,
                      expenses,
                      setCurrentAccount,
                      setCurrentExpense,
                      addIncomeTransaction,
                      incomeList,
                      expensesList
                  }) {

    return (
        <div className={fm.body}>
            <IncomeTransactionWindow income={income} accounts={accounts} addIncomeTransaction={addIncomeTransaction}/>
            <div className={fm.income}>
                {income.map((i) => (
                    <div className={fm.incomeItem}>
                        <div>{i.title}</div>
                        <div className={fm.icons} style={{backgroundColor: i.color}}>
                            <img src={i.icon} className={fm.iconStyle}/>
                        </div>
                        <div style={{color: i.color}}>{i.plannedIncome}</div>
                        <div>{getCurrentIncomeBalance(i, incomeList)}</div>
                    </div>
                ))}
                <div className={fm.incomeItem}>
                    <div>ADD</div>
                    <div
                        className={fm.icons}
                        style={{backgroundColor: "rgb(0, 190, 238)", color: "white"}}
                    >
                        <img src={storage.iconsForIncome[3]} className={fm.iconStyle}/>
                    </div>
                    <div>&nbsp;</div>
                </div>
            </div>
            <div className={fm.accounts}>
                {accounts.map((account) => (
                    <div
                        className={fm.incomeItem}
                        onClick={() => {
                            setCurrentAccount(account);
                            console.log(account);
                        }}
                    >
                        <div>{account.title}</div>
                        <Link to="moneyAccount">
                            <div
                                className={fm.icons}
                                style={{backgroundColor: account.color}}
                            >
                                <img src={account.icon} className={fm.iconStyle}/>
                            </div>
                        </Link>
                        <div style={{color: account.color}}>{account.initialBalance}</div>
                        <div>{getAccountCurrentBalance(account, incomeList, expensesList)}</div>
                    </div>
                ))}
                <div className={fm.incomeItem}>
                    <div>ADD</div>
                    <div
                        className={fm.icons}
                        style={{backgroundColor: "rgb(255, 205, 0)", color: "white"}}
                    >
                        <img src={storage.iconsForIncome[3]} className={fm.iconStyle}/>
                    </div>
                    <div>&nbsp;</div>
                </div>
            </div>
            <div className={fm.expenses}>
                {expenses.map((expense) => (
                    <div
                        onClick={() => {
                            setCurrentExpense(expense);
                            console.log(expense);
                        }}
                        className={fm.incomeItem}
                    >
                        <div>{expense.title}</div>
                        <Link to="categoryAccount">
                            <div className={fm.icons} style={{background: expense.fill}}>
                                <img src={expense.icon} className={fm.iconStyle}/>
                            </div>
                        </Link>
                        <div style={{color: expense.color}}>{expense.spendPlan}</div>
                        <div>{getExpenseCurrentBalance(expense, expensesList)}</div>
                    </div>
                ))}
                <div className={fm.incomeItem}>
                    <div>ADD</div>
                    <div
                        className={fm.icons}
                        style={{backgroundColor: "rgb(194, 198, 202)", color: "white"}}
                    >
                        <img src={storage.iconsForIncome[3]} className={fm.iconStyle}/>
                    </div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                </div>
            </div>
        </div>
    );
}

export default Features;
