import React,{useContext} from 'react'
import {GlobalContext} from "../Context/Global";
import ExpenseTransaction from './ExpenseTransaction';
import "./ExpenseList.css"

function ExpenseList() {
    const {expenseTransactions} = useContext(GlobalContext);
    console.log(expenseTransactions);
    return (
        <div className="expense-list">
            <h1>Expense Transaction List</h1>
            <ul className="expense-transaction-list">
              
            {expenseTransactions.map((expenseTransaction)=>(
          
                <ExpenseTransaction  key={expenseTransaction.id} expenseTransaction={expenseTransaction}/>
            ))}
            </ul>
           
        </div>
    )
}

export default ExpenseList
