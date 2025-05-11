import React, { JSX } from 'react';
import { Button } from 'react-bootstrap';
import { Matrix } from './matrix';

export function MatrixHolder({size, setsize, matrixEntries, setEntries}: {
    size: number;
    matrixEntries: [[number]];
    setsize: (c: number) => void;
    setEntries: (c: [[number]]) => void;
}): JSX.Element {
    function resize(newsize: number): void{
        setsize(newsize);
        return;
    }
    return <div>
        <Button onClick={()=>resize(size)}>resize matrix</Button>
        <Matrix size={size} entries={matrixEntries} setentries={setEntries}></Matrix>
    </div>;
}