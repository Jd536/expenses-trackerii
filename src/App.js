import './App.css';
import { useState } from 'react'
import Expenses from './components/expenses/Expenses'
import NewExpense from './components/newExpense/NewExpense'
import expenses from './expenses.json'

function App() {


  const [updatedExpenses, SetUpdatedExpenses] = useState(expenses)



  const addExpenseHandler = (expense) => {
    SetUpdatedExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div >
      <NewExpense onNewExpense={addExpenseHandler}/>
      <Expenses data={updatedExpenses}/>
    </div>
  );
}

export default App;
