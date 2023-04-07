import cs from "./CategoryAccount.module.css";

function AccountList({accounts, setHideHiddenAccountDiv, setExpenseFromIncome}) {

    function handleFunctions (item) {
        setHideHiddenAccountDiv(true);
        setExpenseFromIncome(item)
    }

    return (
        <ul>
            {
                accounts.map(item => (
                    <li className={cs.accountsBlock} key={item.id} onClick={() => handleFunctions(item)}>

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

export default AccountList;