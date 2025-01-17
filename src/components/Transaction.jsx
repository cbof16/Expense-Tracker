import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({transaction}) => {
    const {deleteTransaction}=useContext(GlobalContext);

  return (
    <li class={transaction.amount<0?'minus':'plus'}>{transaction.text} <span>{transaction.amount}</span><button 
    onClick={()=>{deleteTransaction(transaction.id)}} className="delete-btn">x</button></li>
  )
}

export default Transaction