import React, { useEffect, useState } from 'react'
import ExpensesList from './ExpensesList'
import { v4 as uuidv4 } from 'uuid'

export const Budget = () => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(null);
  const [total, setTotal] = useState(0)
  const [budgetAmount, setBudgetAmount] = useState(2500)
  const [expenses, setExpenses] = useState([
    {
      id: uuidv4(),
      name: 'Market',
      price: 100,
    },
    {
      id: uuidv4(),
      name: 'Kuafor',
      price: 200,
    },
    {
      id: uuidv4(),
      name: 'Rent',
      price: 300,
    },
  ])

  const totalExpenses = () => {
    let result = 0
    for (let index = 0; index < expenses.length; index++) {
      result = Number(result) + Number(expenses[index].price)
    }
    return Number(result)
  }

  const onSubmit = e => {
    e.preventDefault();

    if(amount > budgetAmount) {
      alert('Not enough amount of money!')
      return
    }
    setBudgetAmount(budgetAmount-amount)
    setExpenses([...expenses, {
      id: uuidv4(),
      name: text,
      price: amount
    }])

    setAmount(0)
    setText('')
  }

  useEffect(() => {
    setTotal(totalExpenses())
    return () => {}
  }, [expenses])
  

  return (
    <div>
      <div className="container">
        <div className="row" style={{
          paddingTop: '20px',
          paddingBottom: '20px'
        }}>
            <div className="column">
              <div className="card" style={{
                color: 'green',
                fontSize: '20px'
              }}>{budgetAmount} $</div>
            </div>
            <div className="column">
              <div className="card" style={{
                color: 'red',
                fontSize: '20px'
              }}>{total} $</div>
            </div>
        </div>
      </div>
      <ExpensesList budgetAmount={budgetAmount} expenses={expenses} />
      <br/>
      
      <div className='form-div' style={{
        paddingLeft:'150px',
        paddingRight:'150px',
        paddingTop: '50px',
        paddingBottom: '50px'
      }}>
        <form onSubmit={onSubmit} style={{
          paddingLeft:'250px',
          paddingRight:'250px',
        }}>
          <h3>Add new Expense</h3>
          <input className='input-form' type="text" id="fname" name="firstname" placeholder="Expense Name.." onChange={(e) => setText(e.target.value)} value={text}/>
          <input className='input-form' type="number" id="cost" name="costName" placeholder="Expense Cost.." onChange={(e) => setAmount(e.target.value)} value={amount}/>       
          <input className='input-form-btn' type="submit" value="Save" />
        </form>
      </div>        
    </div>
  )
}
