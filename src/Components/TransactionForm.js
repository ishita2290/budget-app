import React, { useState,useContext } from "react";
import {v4 as uuidv4} from "uuid"
import {GlobalContext} from "../Context/Global"
import "./TransactionForm.css"

function TransactionForm() {

    const {addIncome,addExpense} = useContext(GlobalContext);

    
  const [income, setIncome] = useState({
    incomeDesc: "",
    incomeAmount: 0,

  });

    const {incomeDesc,incomeAmount} = income

  const handleIncomeChange = (e)=>{
    setIncome({...income,[e.target.name]:e.target.value})
  }
  const submitIncome= (e)=>{
      e.preventDefault();
    
    console.log(incomeDesc);
    if(incomeDesc !== ""){
        console.log(1234)
       const newIncomeTransaction ={
           id:uuidv4(),
           incomeDesc,
           incomeAmount:incomeAmount * 1,
          
       }
       
       console.log(newIncomeTransaction)
       addIncome(newIncomeTransaction);
       setIncome({
           incomeDesc :"",
           incomeAmount: 0 ,
       })
    }
  }
  const [expense, setExpense] = useState({
    expenseDesc: "",
    expenseAmount: 0,
 
  });
  const {expenseDesc,expenseAmount} = expense

  const handleExpenseChange = e =>{
      setExpense({...expense,[e.target.name]:e.target.value})
  }
  const submitExpense =(e)=>{
      e.preventDefault();

    if(expenseDesc !== ""){
        const newExpenseTransaction ={
            id:uuidv4(),
            expenseDesc,
            expenseAmount:expenseAmount * 1,
            
        }
        console.log(newExpenseTransaction)
        addExpense(newExpenseTransaction);
        setExpense({
            expenseDesc :"",
            expenseAmount: 0 ,
        })
     }
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={submitIncome}>
        <div className="input-group income-input">
          <input
            type="text"
            className="desc rounded"
            name="incomeDesc"
            value={incomeDesc}
            placeholder="Add Income Text"
            autoComplete="off"
            onChange={handleIncomeChange}
          />
          <input type="number"className="amount rounded" name="incomeAmount" value={incomeAmount} placeholder="Add Amount" autoComplete="off" onChange={handleIncomeChange}/>
         
          <input className="submit rounded" type="submit" value="Submit" />
        </div>
        </form>
        <form onSubmit={submitExpense}>
        <div className="input-group expense-input">
          <input
            type="text"
            className="desc rounded"
            name="expenseDesc"
            value={expenseDesc}
            placeholder="Add Expense Text"
            autoComplete="off"
            onChange={handleExpenseChange}
          />
          <input type="number" className="amount rounded" name="expenseAmount" placeholder="Add Amount" value={expenseAmount} autoComplete="off"   onChange={handleExpenseChange} />
         
          <input className="submit rounded" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
