import React, { JSX, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Matrix } from './Matrix';

export function MatrixHolder({size, setsize, matrixEntries, setEntries}: {
    size: number;
    matrixEntries: [[number]];
    setsize: (c: number) => void;
    setEntries: (c: [[number]]) => void;
}): JSX.Element {
    const [s, sets] = useState<string>("");
    function resize(): void{
        const newsize = parseInt(s);
        setsize(newsize);
        let arr: [[number]] = [[0]];
        for (let i = 0; i < newsize; i++) {
            arr[i] = [0];
            for(let j = 0; j < newsize; j++)
                arr[i][j] = 0;
        }
        setEntries(arr);
        return;
    }
    function editMatrix(event: React.ChangeEvent<HTMLInputElement>) {
        setEntries([[parseInt(event.currentTarget.value)]]);
    }
    function editsize(event: React.ChangeEvent<HTMLInputElement>) {
        sets(event.currentTarget.value);
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