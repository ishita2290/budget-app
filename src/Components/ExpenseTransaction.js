import React,{useContext} from 'react'
import {GlobalContext} from "../Context/Global"

function ExpenseTransaction({expenseTransaction}) {
    console.log(expenseTransaction)
    const { deleteTransaction } = useContext(GlobalContext);
  
    return (
      
            <li>
               
                   <p className="desc">{expenseTransaction.expenseDesc}</p>
                   <span className="amount">{expenseTransaction.expenseAmount}</span>
                   
                   <button onClick={()=> deleteTransaction(expenseTransaction.id)} className="delete-btn"><i class="fas fa-trash-alt"></i></button>
                </li>
       
    )
}

export default ExpenseTransaction
