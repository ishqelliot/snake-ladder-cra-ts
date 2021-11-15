import React from "react";
import { useState } from "react";
import { Dice } from "../../components/dice";
import { Board } from "../../components/board";

export const SnakeLadder = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  return (
    <>
      <Dice setGeneratedNumber={setRandomNumber} />
      <Board randomNumber={randomNumber} />
      <div>{randomNumber}</div>
    </>
  );
};
