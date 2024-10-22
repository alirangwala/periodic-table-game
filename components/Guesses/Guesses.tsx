import React from 'react'
import Guess from './Guess';
import './Guess.css';


export interface GuessedProps {
    guessedElements: string[];
    actualElement: string
}

  
const Guesses = ({guessedElements, actualElement}: GuessedProps) => {
  return (
    <table >
        <thead >
            <tr >
                <th>Element</th>
                <th>Number</th>
                <th>Metallic</th>
                <th>Atomic Radius</th>
                <th>Valency</th>
                <th>State at Room Temp.</th>
                <th>Natural or Synthetic</th>
            </tr>
        </thead>
       {guessedElements.length > 0 && guessedElements.map((el, index) => (
        <Guess key = {index} guessedElement = {el} actualElement={actualElement}/>
       )
    )
}
    </table>
  )
}

export default Guesses