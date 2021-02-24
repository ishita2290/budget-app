import React,{useContext} from 'react'
import {GlobalContext} from "../Context/Global"
import "./Balance.css"

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
            <div className="balancesection">
                <div className="total-balance text-primary">
            <h2>Your Balance</h2>
            <h3><span className="text-dark">€</span>{(totalIncome - totalExpenses).toFixed(2)}</h3>
            </div>
            <div className="income-expense">
                <div className="income text-success">
                    <h3 >Income</h3>
                    <h4><span className="text-dark">€</span>{totalIncome}</h4>
                </div>
                <div className="expense text-danger">
                <h3>Expense</h3>
                    <h4><span className="text-dark">€</span>{totalExpenses}</h4>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Balance
