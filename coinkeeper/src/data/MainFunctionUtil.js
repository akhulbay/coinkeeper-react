import uuid from "react-uuid";
import storage from "../components/Icons/component";


export function getUserInfo(userInfo) {
    return userInfo ? {
            accounts: [
                createAccount('Cash', 0),
                createAccount('Kaspi', 0)
            ],
            incomes: [
                createIncome('IITU', 100000),
                createIncome('Salary', 150000)
            ],
            incomeTransactionList: [],
            expenseTransactionList: [],
            expenses: [
                createExpense('Products', 10000, storage.iconsForExpenses[1]),
                createExpense('Clothing', 10000, storage.iconsForExpenses[2]),
                createExpense('Home', 1000, storage.iconsForExpenses[3]),
                createExpense('Phone', 10000, storage.iconsForExpenses[4]),
                createExpense('Transport', 10000, storage.iconsForExpenses[5]),
                createExpense('Entertain', 10000, storage.iconsForExpenses[6]),
                createExpense('Services', 10000, storage.iconsForExpenses[7]),
            ]
        } :
        null
}

function parseIncomeSourceList(incomeSourceList) {
    return incomeSourceList ? incomeSourceList.map(i => parseIncome(i)) : []
}

export function parseIncome(incomeSource) {
    return incomeSource ? {
        id: incomeSource.id,
        title: incomeSource.title,
        plannedIncome: Number(incomeSource.plannedIncome),
    } : null
}

export function createIncome(title: string, plannedIncome: number) {
    return {
        id: uuid(),
        title: title,
        plannedIncome: plannedIncome,
        icon: storage.iconsForIncome[1],
        color: "rgb(0, 190, 238)"
    }
}

export function isIncomeSource(obj) {
    return obj.hasOwnProperty('plannedIncome')
}

function parseAccountList(accountList) {
    return accountList ? accountList.map(a => parseAccount(a)) : []
}

export function parseAccount(account) {
    return account ? {
        id: account.id,
        title: account.title,
        initialBalance: Number(account.initialBalance),
    } : null
}

export function createAccount(title, initialBalance) {
    return {
        id: uuid(),
        title: title,
        initialBalance: initialBalance,
        icon: storage.iconsForAccount[1],
        color: "rgb(255, 205, 0)",
        fill: "linear-gradient(to top, rgb(255, 205, 0) 100%, transparent 0%)"
    }
}

export function getAccountCurrentBalance(account, incomeTransactionList, outcomeTransactionList) {
    let incomeTransactionAmount = incomeTransactionList
        .filter((t) => account.id === t.account.id)
        .reduce((tSum, t) => {
            return tSum + parseInt(t.amount)
        }, 0)
    let outcomeTransactionAmount = outcomeTransactionList
        .filter((t) => account.id === t.account.id)
        .reduce((tSum, t) => {
            return tSum + parseInt(t.amount)
        }, 0)

    return Math.round(account.initialBalance + incomeTransactionAmount - outcomeTransactionAmount);
}

export function getExpenseCurrentBalance(expense, outcomeTransactionList) {
    return outcomeTransactionList
        .filter((t) => expense.id === t.expense.id)
        .reduce((tSum, t) => {
            return tSum + parseInt(t.amount)
        }, 0)
}

export function getCurrentIncomeBalance(income, incomeTransactionList) {
    let incomeTransactionAmount = incomeTransactionList
        .filter((t) => income.id === t.income.id)
        .reduce((tSum, t) => {
            return tSum + parseInt(t.amount)
        }, 0)
    console.log(incomeTransactionAmount)
    return isNaN(incomeTransactionAmount) ? 0 : incomeTransactionAmount
}

export function isAccount(account) {
    return account.hasOwnProperty('initialBalance')
}

function parseTransactionList(transactionList) {
    return transactionList ? transactionList.map(t => parseTransaction(t)) : []
}

export function parseTransaction(transaction) {
    return transaction ? {
        id: transaction.id,
        type: transaction.type,
        amount: Number(transaction.amount),
        source: transaction.source,
        destination: transaction.destination,
        date: new Date(transaction.date)
    } : null
}

export function createTransaction(type: TransactionType, source, destination, amount: number, date: Date) {
    return {
        id: uuid(),
        type: type,
        amount: amount,
        source: {
            id: source.id,
            title: source.title
        },
        destination: {
            id: destination.id,
            title: destination.title
        },
        date: new Date(date.setHours(0, 0, 0,)),
    }
}

export function createIncomeTransaction(date, amount, account, income) {
    return {
        id: uuid(),
        date: date,
        amount: amount,
        account: {
            id: account.id,
            title: account.title
        },
        income: {
            id: income.id,
            title: income.title
        }
    }
}

export function createOutcomeTransaction(date, amount, account, expense) {
    return {
        id: uuid(),
        date: date,
        amount: amount,
        account: {
            id: account.id,
            title: account.title
        },
        expense: {
            id: expense.id,
            title: expense.title
        }
    }
}


export function getTransactionType(source, destination) {
    if (isIncomeSource(source) && isAccount(destination)) return TransactionType.Income
    if (isAccount(source) && isAccount(destination)) return TransactionType.Transfer
    if (isAccount(source) && isExpenseType(destination)) return TransactionType.Outcome
    else throw Error('Could not determine transaction type')
    //Todo: Add Outcome
}

export function parseExpenseType(expenseType) {
    return expenseType ? {
        id: expenseType.id,
        title: expenseType.title,
        spendPlan: expenseType.spendPlan
    } : null
}

export function createExpense(title, spendPlan, icon) {
    return {
        id: uuid(),
        title: title,
        spendPlan: spendPlan,
        color: "rgb(194, 198, 202)",
        fill: "",
        icon: icon,
    }
}

export function isExpenseType(account) {
    return account.hasOwnProperty('spendPlan')
}