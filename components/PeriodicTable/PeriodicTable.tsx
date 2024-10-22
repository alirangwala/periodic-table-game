import React from 'react'
import Element from '../Element/Element'
import { ElementData, elementMap } from '@/lib/elements'
import GapElement from '../GapElement/GapElement';
import "./PeriodicTable.css";


export interface PeriodicTableProps {
  setCurrentGuess: (guess: string)=> void;
  setInput: (str: string)=> void;
  guessedElements: string[]
}


const PeriodicTable = ({setCurrentGuess, guessedElements, setInput}: PeriodicTableProps)=> {

  const mapElements = (elements: any, start: number, end: number) => {
    return Array.from(elements.values()).slice(start,end).map((el: any, index) => (
      <Element 
        key={index}
        number={el.num}
        name={el.name}
        symbol={el.symbol}
        setInput={setInput}
        guessed = {guessedElements.includes(el.name.toLowerCase())}
      />
    ))
  }
  
  const mapGaps = (gap_number: number) => {
    return Array.apply(null, Array(gap_number)).map((_, index) => (
        <GapElement key ={index} />
    ))
  }
  
  // const updatedElements = [...elements]

  console.log(elementMap)
  return (
    <>
    <div className="periodic-table">
          {mapElements(elementMap,0,1)}
          {mapGaps(17)}
          {mapElements(elementMap,1,2)}

          {mapElements(elementMap,2,4)}
          {mapGaps(11)}
          {mapElements(elementMap,4,10)}

          {mapElements(elementMap,10,12)}
          {mapGaps(11)}
          {mapElements(elementMap,12,18)}

          {mapElements(elementMap,18,21)}
          {mapGaps(1)}
          {mapElements(elementMap,21,36)}

          {mapElements(elementMap,36,39)}
          {mapGaps(1)}
          {mapElements(elementMap,39,54)}

          {mapElements(elementMap,54,57)}
          {mapGaps(1)}
          {mapElements(elementMap,57,72)}

          {mapElements(elementMap,72,75)}
          {mapGaps(1)}
          {mapElements(elementMap,75,90)}

          {mapGaps(19)}

          {mapGaps(4)}
          {mapElements(elementMap,90,104)}
          {mapGaps(1)}

          {mapGaps(4)}
          {mapElements(elementMap,104,118)}
          {mapGaps(1)}
    </div>
    </>
  )
}

export default PeriodicTable