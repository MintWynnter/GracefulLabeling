import React, { JSX } from 'react';
import { Button } from 'react-bootstrap';
import { Matrix } from './Matrix';

export function MatrixHolder({size, setsize, matrixEntries, setEntries}: {
    size: number;
    matrixEntries: [[number]];
    setsize: (c: number) => void;
    setEntries: (c: [[number]]) => void;
}): JSX.Element {
    let s: string = "";
    function resize(): void{
        setsize(parseInt(s));
        let arr: [[number]] = [[0]];
        for (let i = 0; i < size; i++) {
            arr[i] = [0];
            for(let j = 0; j < size; j++)
                arr[i][j] = 0;
        }
        setEntries(arr);
        return;
    }
    function editMatrix(event: React.ChangeEvent<HTMLInputElement>) {
        setEntries([[parseInt(event.currentTarget.value)]]);
    }
    function editsize(event: React.ChangeEvent<HTMLInputElement>) {
        s = event.currentTarget.value;
    }
    return <div>
        <Button onClick={()=>resize()}>resize matrix</Button>
        <input value={s} onChange={editsize}></input>
        {matrixEntries.map((row: [number]) => {
            return row.map((n: number) => {
                return <input value={n} onChange={editMatrix}></input>;
            })
        })}
    </div>;
}