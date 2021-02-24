import React from 'react'
import Header from "./Components/Header"
import Balance from "./Components/Balance"
import TransactionForm from './Components/TransactionForm'
import ExpenseList from './Components/ExpenseList'
import IncomeList from './Components/IncomeList'
import {GlobalProvider} from "./Context/Global"
import BudgetImg from "./images/budget.jpeg"
import "./App.css"

function App() {
  return (
    <GlobalProvider >
    <div className="container">
     <div className="app">
       <img className="imgbudget" src={BudgetImg} alt="" />
      {/* <Header /> */}
      <Balance />
      <IncomeList />
      <TransactionForm />
    
      <ExpenseList />
    </div>
    </div> 
    </GlobalProvider>
  );
}

export default App;
