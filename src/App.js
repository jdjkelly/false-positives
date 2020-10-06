import React, { useState } from 'react';
import './App.css';

function App() {
  const [incidenceRate, setIncidenceRate] = useState(1);
  const [falsePositiveRate, setFalsePositiveRate] = useState(1);
  const [population, setPopulation] = useState(10000);

  const truePositives = population * (parseInt(incidenceRate) / 1000);
  const falsePositives = population * (parseFloat(falsePositiveRate) / 100);
  const totalPositives = truePositives + falsePositives;

  return (
    <div className="App">
      <p> With the following rates: </p>
      <p>
        True incidence rate in population ({incidenceRate} out of 1000) <br/>
        <input type="number" min="0" max="100" step="1" value={incidenceRate} onChange={(event) => setIncidenceRate(event.target.value)} ></input>
      </p>
      <p>
        False positive rate for testing ({falsePositiveRate}%)<br/>
        <input type="number" min="0" max="100" step="0.1" value={falsePositiveRate} onChange={(event) => setFalsePositiveRate(event.target.value)}></input>
      </p>
      <p> And a test of this many people: <br/>
      <input type="number" min="0" max="10000000" value={population} onChange={(event) => setPopulation(event.target.value)}></input>
      </p>
    
      <p>You could expect:</p>
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
