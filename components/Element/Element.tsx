import React from 'react'
import "./Element.css";

export interface ElementProps {
  number: number;
  symbol: string;
  name: string;
  setInput: (str: string)=> void;
  guessed: boolean;
}

const Element = ({number, symbol, name, setInput, guessed}: ElementProps) => {
  return (
    <div className={guessed ?  "unguessed-element" : "guessed-element" }onClick={() => setInput(name)}>
      <div className="number">{number}</div>
      <div className="symbol">{symbol}</div>
      <div className="name">{name}</div>
    </div>
  )
}

export default Element