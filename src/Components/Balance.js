import React,{useContext} from 'react'
import {GlobalContext} from "../Context/Global"

function Balance() {
    const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

    const incomeAmounts = incomeTransactions.map(
        incomeTransaction => incomeTransaction.incomeAmount
      );
    
      const expenseAmounts = expenseTransactions.map(
        expenseTransaction => expenseTransaction.expenseAmount
      );
    
      const totalIncome = incomeAmounts
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    
      const totalExpenses = expenseAmounts
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    return (
        <div className="balance">
            <h2>Your Balance</h2>
            <h3>€{(totalIncome - totalExpenses).toFixed(2)}</h3>
            <div className="income-expense">
                <div className="income">
                    <h3>Income</h3>
                    <h4>€{totalIncome}</h4>
                </div>
                <div className="expense">
                <h3>Expense</h3>
                    <h4>€{totalExpenses}</h4>
                </div>
            </div>
            
        </div>
    )
}

export default Balance
