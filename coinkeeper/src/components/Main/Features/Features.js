import fm from "./Features.module.css";
import storage from "../../Icons/component";
import { Link } from "react-router-dom";

function Features({
  income,
  setIncome,
  accounts,
  setAccounts,
  expenses,
  setExpenses,
}) {
  return (
    <div className={fm.body}>
      <div className={fm.income}>
        {income.map((income) => (
          <div className={fm.incomeItem}>
            <div>{income.title}</div>
            <div className={fm.icons} style={{ backgroundColor: income.color }}>
              <img src={income.icon} className={fm.iconStyle} />
            </div>
            <div style={{ color: income.color }}>{income.sum}</div>
          </div>
        ))}
        <div className={fm.incomeItem}>
          <div>ADD</div>
          <div
            className={fm.icons}
            style={{ backgroundColor: "rgb(0, 190, 238)", color: "white" }}
          >
            <img src={storage.iconsForIncome[3]} className={fm.iconStyle} />
          </div>
          <div>&nbsp;</div>
        </div>
      </div>
      <div className={fm.accounts}>
        {accounts.map((accounts) => (
          <div className={fm.incomeItem}>
            <div>{accounts.title}</div>
            <Link to="moneyAccount">
              <div
                className={fm.icons}
                style={{ backgroundColor: accounts.color }}
              >
                <img src={accounts.icon} className={fm.iconStyle} />
              </div>
            </Link>
            <div style={{ color: accounts.color }}>{accounts.sum}</div>
          </div>
        ))}
        <div className={fm.incomeItem}>
          <div>ADD</div>
          <div
            className={fm.icons}
            style={{ backgroundColor: "rgb(255, 205, 0)", color: "white" }}
          >
            <img src={storage.iconsForIncome[3]} className={fm.iconStyle} />
          </div>
          <div>&nbsp;</div>
        </div>
      </div>
      <div className={fm.expenses}>
        {expenses.map((expenses) => (
          <div className={fm.incomeItem}>
            <div>{expenses.title}</div>
            <div className={fm.icons} style={{ background: expenses.fill }}>
              <img src={expenses.icon} className={fm.iconStyle} />
            </div>
            <div style={{ color: expenses.color }}>{expenses.totalSum}</div>
            <div>{expenses.maxSum}</div>
          </div>
        ))}
        <div className={fm.incomeItem}>
          <div>ADD</div>
          <div
            className={fm.icons}
            style={{ backgroundColor: "rgb(194, 198, 202)", color: "white" }}
          >
            <img src={storage.iconsForIncome[3]} className={fm.iconStyle} />
          </div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </div>
      </div>
    </div>
  );
}

export default Features;
