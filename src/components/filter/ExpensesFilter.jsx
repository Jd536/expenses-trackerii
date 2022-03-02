import React from 'react'

import './ExpensesFilter.css'

const ExpenseFilter = ({onFilter, selectedYear}) => {

  let currentYear = new Date().getFullYear();
  let earlistYear = 2010;
  let years = []
  while(currentYear >= earlistYear){
      years.push(currentYear)
      currentYear -=1
  }

   const onFilterChange = (event) => {
     let value = event.target.value
    onFilter(value)
   }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="yeardropdown">Filter By Year</label>
          <select name="year-dropdown" id="yeardropdown" value={selectedYear} onChange={onFilterChange}>
          {
            years.map(year => {
              return <option key={year}value={year}>{year}</option>
            })
          }
          
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter