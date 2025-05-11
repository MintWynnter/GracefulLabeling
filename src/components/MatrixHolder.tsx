import React, { JSX, useState } from 'react';
import { Button } from 'react-bootstrap';

export function MatrixHolder({size, setsize, matrixEntries, setEntries}: {
    size: number;
    matrixEntries: [[string]];
    setsize: (c: number) => void;
    setEntries: (c: [[string]]) => void;
}): JSX.Element {
    const [s, sets] = useState<string>("");
    function resize(): void{
        const newsize = parseInt(s);
        setsize(newsize);
        let arr: [[string]] = [["0"]];
        for (let i = 0; i < newsize; i++) {
            arr[i] = ["0"];
            for(let j = 0; j < newsize; j++)
                arr[i][j] = "0";
        }
        setEntries(arr);
        return;
    }
    function editMatrix(event: React.ChangeEvent<HTMLInputElement>) {
        const datakey = event.target.dataset.key ?? "0";
        matrixEntries[parseInt(datakey)/size][parseInt(datakey)%size] = event.currentTarget.value;
        setEntries(matrixEntries);
    }
    function editsize(event: React.ChangeEvent<HTMLInputElement>) {
        sets(event.currentTarget.value);
    }
    return <div>
        <Button onClick={()=>resize()}>resize matrix</Button>
        <input value={s} onChange={editsize}></input>
        {matrixEntries.map((row: [string], i: number) => {
            return row.map((n: string, j: number) => {
                return <input value={n} dataset-key={i*size+j}></input>;
            })
        })}
    </div>;
}