import React,{useContext} from 'react'
import {GlobalContext} from "../Context/Global"
import "./ExpenseTransaction.css"

function ExpenseTransaction({expenseTransaction}) {
    console.log(expenseTransaction)
    const { deleteTransaction } = useContext(GlobalContext);
  
    return (
      
            <li className="expenses">
               
                   <span className="out-desc text-primary">{expenseTransaction.expenseDesc}</span>
                   <span className="out-amount text-danger"><span className="text-dark">€</span>{expenseTransaction.expenseAmount}</span>
                   
                   <button onClick={()=> deleteTransaction(expenseTransaction.id)} className="delete-btn text-danger"><i class="fas fa-trash-alt"></i></button>
                </li>
       
    )
}

export default ExpenseTransaction
