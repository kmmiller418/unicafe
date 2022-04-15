import React, { useState } from "react";

const Statistics = (props) => {
  const { good, bad, neutral } = props;

  const getTotal = () => Number(good + bad + neutral);

  const getAverage = () => {
    return (good - bad) / getTotal();
  };

  const getPositive = () => {
    return (good / getTotal()) * 100;
  };

  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tr>
          <th>good</th>
          <td>{good}</td>
        </tr>
        <tr>
          <th>neutral</th>
          <td>{neutral}</td>
        </tr>
        <tr>
          <th>bad</th>
          <td>{bad}</td>
        </tr>
        <tr>
          <th>average</th>
          <td>{getAverage()}</td>
        </tr>
        <tr>
          <th>positive</th>
          <td>{getPositive()}%</td>
        </tr>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>

      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
