import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Feedback = ({ good, neutral, bad }) => {

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>No feedback given</div>
    )
  }

  return (
    <div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value} {props.unit}</td>
    </tr>
  )
}

const Statistics = ({ bad, neutral, good }) => {

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={bad + neutral + good} />
        <StatisticLine text="average" value={((bad * -1) + (neutral * 0) + (good * 1)) / (bad + neutral + good)} />
        <StatisticLine text="positive" value={good / (bad + neutral + good) * 100} unit={"%"} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (

    <div>
      <div>
        <h1>give feedback</h1>
      </div>
      <div>
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
      </div>
      <div>
        <h1>statistics</h1>
      </div>
      <Feedback good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App