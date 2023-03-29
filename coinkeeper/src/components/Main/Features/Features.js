import fm from "./Features.module.css";

function Features({ income, setIncome }) {
  return (
    <div className={fm.body}>
      <div className={fm.income}>
        {income.map((income) => (
          <div className={fm.income}>
            <i class="bi bi-globe"></i>
            {income.title}
          </div>
        ))}
      </div>
      <div className={fm.accounts}>sssh</div>
      <div className={fm.expenses}>ssssh</div>
    </div>
  );
}

export default Features;