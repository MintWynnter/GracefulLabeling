import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { MatrixHolder } from './components/MatrixHolder';
import { Button } from 'react-bootstrap';
import { isGraceful } from './functions/graceful';

function App() {
  const [size, setsize] = useState<number>(5);
  const [entries, setentries] = useState<string[][]>([["0"]]);
  const [graceful, setGraceful] = useState<boolean>(false);
  function checkGraceful(): void{
    const nummat: number[][] = entries.map((c: string[]) => {
      return c.map((c2: string) => {
        return parseInt(c2);
      })
    })
    setGraceful(isGraceful(nummat));
  }
  return (
    <div className="App">
      <MatrixHolder size={size} setsize={setsize} matrixEntries={entries} setEntries={setentries}></MatrixHolder>
      <Button onClick={()=>checkGraceful()}>Check if graceful</Button>
      <p>This graph is {graceful ? "graceful" : "not graceful"}</p>
    </div>
  );
}

export default App;
