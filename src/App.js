import React from 'react'
import Header from "./Components/Header"
import Balance from "./Components/Balance"
import TransactionForm from './Components/TransactionForm'
import ExpenseList from './Components/ExpenseList'
import IncomeList from './Components/IncomeList'
import {GlobalProvider} from "./Context/Global"

function App() {
  return (
    <GlobalProvider >
    <div className="container">
     <div className="app">
      <Header />
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
