import React from 'react'
import ExpensesCard from './ExpensesCard'

export default function ExpensesList({ budgetAmount, expenses }) {
  return (
    <div className="income-list">
      {expenses.map((expense, index) => {
        return <ExpensesCard expense={expense} id={index} />
      })}
    </div>
  )
}
