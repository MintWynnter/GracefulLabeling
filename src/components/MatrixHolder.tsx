import React, { JSX, useState } from 'react';
import { Button } from 'react-bootstrap';

export function MatrixHolder({size, setsize, matrixEntries, setEntries}: {
    size: number;
    matrixEntries: string[][];
    setsize: (c: number) => void;
    setEntries: (c: string[][]) => void;
}): JSX.Element {
    const [s, sets] = useState<string>("");
    function resize(): void{
        const newsize = parseInt(s);
        setsize(newsize);
        let arr: string[][] = [["0"]];
        for (let i = 0; i < newsize; i++) {
            arr[i] = ["0"];
            for(let j = 0; j < newsize; j++)
                arr[i][j] = "0";
        }
        setEntries(arr);
        return;
    }
    function editMatrix(row: number, col: number, event: React.ChangeEvent<HTMLInputElement>) {
        const newentries: string[][] = matrixEntries.map((c, i) => {
        if (i === row) {
            return c.map((c2, j) => {
                if(j === col){
                    return event.currentTarget.value;
                }
                else{
                    return c2;
                }
            })
        } else {
            return c;
        }
        });
        setEntries(newentries);
    }
    function editsize(event: React.ChangeEvent<HTMLInputElement>) {
        sets(event.currentTarget.value);
    }
    return <div>
        <Button onClick={()=>resize()}>resize matrix</Button>
        <input value={s} onChange={editsize}></input>
        <table>
        <tbody>
          {matrixEntries.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={`${rowIndex}-${colIndex}`}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => editMatrix(rowIndex, colIndex, e)}
                    style={{ width: '60px', textAlign: 'center' }}
                    // Use data attributes to store indices (optional)
                    data-row={rowIndex}
                    data-col={colIndex}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>;
}