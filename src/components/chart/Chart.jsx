import React from 'react'

import ChartBar from './ChartBar'

import './Chart.css'

const Chart = (props) => {
  let dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
const TotalMaximum = Math.max(...dataPointValues) // using the spread operator to pass the value to the Math method


  return (
    <div className='chart'>
        {
          props.dataPoints.map(dataPoint => {
            return <ChartBar key={`chart ${Math.random()*3.14} sd`}
             value= {dataPoint.value} 
              maxValue={TotalMaximum}
              label={dataPoint.label}
             />
          })
        }
    </div>
  )
}

export default Chart