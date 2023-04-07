import ms from "./MoneyAccount.module.css";

function IncomeList({income, setHideHiddenIncomeDiv, setIncomeAccount}) {

    function handleFunctions (item) {
        setHideHiddenIncomeDiv(true);
        setIncomeAccount(item);
    }

    return (
        <ul>
            {
                income.map(item => (
                    <li className={ms.incomeBlock} key={item.id} onClick={() => handleFunctions(item)}>

                        {
                            item.title
                        }
                        <hr/>
                    </li>

                ))
            }
        </ul>
    )
}

export default IncomeList;