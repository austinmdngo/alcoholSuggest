import './App.css';
import {useState} from "react";

function App() {
  const [setGender] =useState("");
  const [setAge] =useState(0);
  const [setWeight] =useState(0);

  return (
    /*
    <div className="App">
        <br>
        </br>
        <span>You should drink at absolute most:</span>
        <br>
        <span id="output"></span>
        </br>
        <br>
        <span>drinks within one hour of driving. (but please drink less)</span>
        </br>
    */
    <div className="Information">
      <label>Input your gender:
      <select value={setGender.value} onChange={setGender.value}>
      <option value="male">Male</option>
      <option value="female">Female</option>
      </select>
      <br></br>
      </label>
      <label>Input your age:</label>
      <input type="number" 
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />
      <br></br>
      <label>Input your weight (lbs):</label>
      <input type="number" 
        onChange={(event) => {
          setWeight(event.target.value);
        }}
      />
      <br></br>
      <button>Submit</button>
    </div>
  );
}

export default App;
