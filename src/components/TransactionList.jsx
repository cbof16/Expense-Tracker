import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


const TransactionList = () => {
    const {transactions}=useContext(GlobalContext);
    
    
    
    //The useContext hook in React
    // might be logging twice due to the behavior of React's Strict Mode in development. React Strict Mode 
    //intentionally calls certain lifecycle methods twice to help identify
    // and fix potential issues.

    //This can cause hooks like useContext to log their outputs multiple times because components are rendered more than once.
  return (
    <>
    <h3>History</h3>
      <ul id="list" class="list">
        {transactions.map(transaction=>(
            <li class={transaction.amount<0?'minus':'plus'}>{transaction.text} <span>{transaction.amount}</span><button class="delete-btn">x</button></li>
        ))}
      </ul>
    </>
  )
}

export default TransactionList