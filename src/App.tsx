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
      <p>Input the size of the matrix below, then input the matrix in the table.<br></br>The table should be filled in as follows:<br></br>
      The rows and columns represent the vertices. They are labeled strating from 0. The entries in the array should be marked with the labeling of the edge connecting the two vertices. A label of -1 indicates that there is no edge.<br></br>
      Please only input numbers, as otherwise, the code may break.</p>
      <MatrixHolder size={size} setsize={setsize} matrixEntries={entries} setEntries={setentries}></MatrixHolder>
      <Button onClick={()=>checkGraceful()}>Check if graceful</Button>
      <p>This graph is {graceful ? "graceful" : "not graceful"}</p>
    </div>
  );
}

export default App;
