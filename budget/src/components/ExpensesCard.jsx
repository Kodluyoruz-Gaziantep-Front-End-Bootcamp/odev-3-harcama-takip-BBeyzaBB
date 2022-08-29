import React from 'react'

export default function ExpensesCard({ expense, id }) {
  return (
    <div className="income-item" id={id}>
      <h1 className="desc">{expense.name}</h1>
      <h2 className="price">{expense.price} $</h2>
    </div>
  )
}
