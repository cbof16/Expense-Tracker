import React, { useContext } from 'react'


const Transaction = ({transaction}) => {

  return (
    <li class={transaction.amount<0?'minus':'plus'}>{transaction.text} <span>{transaction.amount}</span><button class="delete-btn">x</button></li>
  )
}

export default Transaction