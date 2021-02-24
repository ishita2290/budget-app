import React,{useContext} from 'react'
import {GlobalContext} from "../Context/Global"
import "./IncomeTransaction.css"

function IncomeTransaction({incomeTransaction}) {
    const { deleteTransaction } = useContext(GlobalContext);
   
    return (
      
            <li className="incomes">
                 
                   <span className="in-desc text-primary">{incomeTransaction.incomeDesc}</span>
                   <span className="in-amount text-success"><span className="text-dark">€</span>{incomeTransaction.incomeAmount}</span>
       
                   <button onClick={()=>deleteTransaction(incomeTransaction.id)} className="delete-btn text-danger"><i class="fas fa-trash-alt"></i></button>
                </li>
     
    
    )
}

export default IncomeTransaction
