import fm from "./Features.module.css";
import storage from "../../Icons/component";
import build from "../../Icons/building.svg";

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
            <i class="bi bi-0-square-fill"></i>
            <div>{income.sum}</div>
          </div>
        ))}
        <div className={fm.incomeItem}>
          <div>ADD</div>
          <img src={build} />
          <div>&nbsp;</div>
        </div>
      </div>
      <div className={fm.accounts}>
        {accounts.map((accounts) => (
          <div className={fm.incomeItem}>
            <div>{accounts.title}</div>
            <img src={build} />
            <div>{accounts.sum}</div>
          </div>
        ))}
        <div className={fm.incomeItem}>
          <div>ADD</div>
          <img src={build} />
          <div>&nbsp;</div>
        </div>
      </div>
      <div className={fm.expenses}>
        {expenses.map((expenses) => (
          <div className={fm.incomeItem}>
            <div>{expenses.title}</div>
            <img src={build} />
            <div>{expenses.totalSum}</div>
            <div>{expenses.maxSum}</div>
          </div>
        ))}
        <div className={fm.incomeItem}>
          <div>ADD</div>
          <img src={build} />
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </div>
      </div>
    </div>
  );
}

export default Features;
