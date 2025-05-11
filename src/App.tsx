import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { MatrixHolder } from './components/MatrixHolder';

function App() {
  const [size, setsize] = useState<number>(5);
  const [entries, setentries] = useState<string[][]>([["0"]]);
  return (
    <div className="App">
      <MatrixHolder size={size} setsize={setsize} matrixEntries={entries} setEntries={setentries}></MatrixHolder>
    </div>
  );
}

export default App;
