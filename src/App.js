import React, { useState } from 'react';
import './App.css';

function App() {
  const [incidenceRate, setIncidenceRate] = useState(1);
  const [falsePositiveRate, setFalsePositiveRate] = useState(1);

  const truePositives = 10000 * (parseFloat(incidenceRate) / 100);
  const falsePositives = 10000 * (parseFloat(falsePositiveRate) / 100);
  const totalPositives = truePositives + falsePositives;

  return (
    <div className="App">
      <p> With the following rates: </p>
        <p>
          True incidence rate in population (%) {incidenceRate} <br/>
          <input type="number" min="0" max="100" step="0.1" value={incidenceRate} onChange={(event) => setIncidenceRate(event.target.value)} ></input>
        </p>
        <p>
          False positive rate for testing (%) {falsePositiveRate} <br/>
          <input type="number" min="0" max="100" step="0.1" value={falsePositiveRate} onChange={(event) => setFalsePositiveRate(event.target.value)}></input>
        </p>

      <p>In a test of 10,000 people you could expect:</p>
      <ul>
        <li>True positives {Math.floor(truePositives)}</li>
        <li>False Positives {Math.floor(falsePositives)}</li>
        <li>Total positives {Math.floor(totalPositives)}</li>
        <li>False positives being {Math.floor(falsePositives / totalPositives * 100)}% of all positives</li>
      </ul>
    </div>
  );
}

export default App;
