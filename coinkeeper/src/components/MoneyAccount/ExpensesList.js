import ms from "./MoneyAccount.module.css";

function ExpensesList({expenses, setHideHiddenExpensesDiv, setExpenseCategory}) {

    function handleFunctions (item) {
        setHideHiddenExpensesDiv(true);
        setExpenseCategory(item)
    }

    return (
        <ul>
            {
                expenses.map(item => (
                    <li className={ms.expensesBlock} key={item.id} onClick={() => handleFunctions(item)}>

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

export default ExpensesList;