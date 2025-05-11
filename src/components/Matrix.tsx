import React, { JSX } from 'react';
import { Button } from 'react-bootstrap';

export function Matrix({size, entries, setentries}: {
    size: number;
    entries: [[number]];
    setentries: (c: [[number]]) => void;
}): JSX.Element {
    function resize(newsize: number): void{
        let arr: [[number]] = [[0]];
        for (let i = 0; i < newsize; i++) {
            arr[i] = [0];
            for(let j = 0; j < newsize; j++)
                arr[i][j] = 0;
        }
        setentries(arr);
        return;
    }
    function editMatrix(event: React.ChangeEvent<HTMLInputElement>) {
        setentries([[parseInt(event.currentTarget.value)]]);
  }
    return <div>
        {entries.map((row: [number]) => {
            return row.map((n: number) => {
                return <input value={n} onChange={editMatrix}></input>;
            })
        })}
    </div>;
}