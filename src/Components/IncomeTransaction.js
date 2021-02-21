import React,{useContext} from 'react'
import {GlobalContext} from "../Context/Global"

function IncomeTransaction({incomeTransaction}) {
    const { deleteTransaction } = useContext(GlobalContext);
    console.log(incomeTransaction)
    return (
        
            <li>
                 
                   <span className="desc">{incomeTransaction.incomeDesc}</span>
                   <span className="amount">{incomeTransaction.incomeAmount}</span>
       
                   <button onClick={()=>deleteTransaction(incomeTransaction.id)} className="delete-btn"><i class="fas fa-trash-alt"></i></button>
                </li>
    
    )
}

export default IncomeTransaction
