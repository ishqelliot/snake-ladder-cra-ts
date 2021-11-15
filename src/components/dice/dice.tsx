import React from "react";

export const Dice = ({ setGeneratedNumber }) => {
  const generateNumber = () => {
    setGeneratedNumber(Math.floor(Math.random() * 6) + 1);
  };
  return <button onClick={() => generateNumber()}>Generate number</button>;
};
