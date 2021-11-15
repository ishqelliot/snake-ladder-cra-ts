import React, { useEffect, useState } from "react";
import { Player } from "../player";

const paintRow = () => {
  let boardRows: any = [];
  for (let i = 0; i < 10; i++) {
    boardRows.push(i);
  }
  //   console.log(boardRows);
  return boardRows;
};
export const Board = ({ randomNumber }) => {
  const [playerInd, setPlayerInd] = useState(0);
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);
  useEffect(() => {
    setPlayerInd(playerInd + randomNumber);
    if (playerInd !== 0) {
      setRow(Math.floor((playerInd + randomNumber) / 10));
      setColumn(Math.floor((playerInd + randomNumber) % 10));
    }
  }, [randomNumber]);

  console.log(playerInd, randomNumber);

  return (
    <table>
      <tbody>
        {paintRow().map((datum, rowInd) => {
          return (
            <tr key={rowInd}>
              {paintRow().map((datum, colInd) => {
                if (rowInd === row && colInd === column) {
                  return (
                    <td key={`${rowInd}${colInd}`}>
                      <Player />
                    </td>
                  );
                }
                return <td key={`${rowInd}${colInd}`}>cell</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
