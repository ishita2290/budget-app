import React,{useContext} from 'react'
import {GlobalContext} from "../Context/Global";
import ExpenseTransaction from './ExpenseTransaction';

function ExpenseList() {
    const {expenseTransactions} = useContext(GlobalContext);
    console.log(expenseTransactions);
    return (
        <div>
            <h1>Expense Transaction List</h1>
            <ul>
              
            {expenseTransactions.map((expenseTransaction)=>{
          
                <ExpenseTransaction  key={expenseTransaction.id} expenseTransaction={expenseTransaction}/>
            })}
            </ul>
           
        </div>
    )
}

export default ExpenseList
