
import React,{useContext} from 'react'
import {GlobalContext} from "../Context/Global";
import IncomeTransaction from './IncomeTransaction';
import "./IncomeList.css"
import Header from "./Header";

function IncomeList() {
    const {incomeTransactions} = useContext(GlobalContext);
    console.log(incomeTransactions)
    return (
        <div>
            <h1>Income Transaction List</h1>
            <ul className="income-list">
                {incomeTransactions.map(incomeTransaction=>{
                   <> <p>{incomeTransaction.id}</p>
               <IncomeTransaction key={incomeTransaction.id} incomeTransaction={incomeTransaction}/>
            <Header />
               </>
                })}
            </ul>
        </div>
    )
}

export default IncomeList

