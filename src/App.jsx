import { useState } from 'react'
import './App.css'
import NewTransaction from './components/NewTransaction'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import TransactionList from './components/TransactionList'
import { GlobalProvider } from './context/GlobalState'

function App() {


  return (
    <>
    <GlobalProvider>
       <Header />
      <div className="container">
      <Balance />
      </div>
      <div className="inc-exp-container">
      <IncomeExpense />
      </div>
      <TransactionList />
      <NewTransaction />
    </GlobalProvider>
    </>
  )
}

export default App
