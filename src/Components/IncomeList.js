
import React,{useContext} from 'react'
import {GlobalContext} from "../Context/Global";
import IncomeTransaction from './IncomeTransaction';
import "./IncomeList.css"


function IncomeList() {
    const {incomeTransactions} = useContext(GlobalContext);
    console.log(incomeTransactions)
    return (
        <div  className="income-list">
            <h1 >Income Transaction List</h1>
            <ul className="income-transaction-list">
               
                {incomeTransactions.map(incomeTransaction=>(
                
               <IncomeTransaction key={incomeTransaction.id} incomeTransaction={incomeTransaction}/>
         
              
                ))}
            </ul>
        </div>
    )
}

export default IncomeList

