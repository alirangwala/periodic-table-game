import React from 'react'
import { elementMap } from '@/lib/elements';

export interface GuessProps {
    guessedElement: string;
    actualElement: string
}

const Guess = ({guessedElement, actualElement}: GuessProps) => {
    
    const findElement = (element:string) => {
        return elementMap.get(element.toLowerCase())
    };

    const compareStrings = (guess: string, actual: string) => {
        if (guess == actual) {
            return <td className='status-same'>{guess}</td>
        } else {
            return <td className='status-lower'>{guess}</td>
        }
    }
    const compareNumbers = (guess: number, actual: number) => {
        return guess < actual ? <td className='status-lower'>{guess} &uarr;</td> 
             : guess > actual ? <td className='status-lower'>{guess} &darr;</td> 
             : <td className='status-same'>{guess}</td>;
      };
      

      const compareGuessAndActual = (guessed: string, actual: string) => {
        const guessedEl = findElement(guessed);
        const actualEl = findElement(actual);

        if (!guessedEl || !actualEl) {
            return (
                <tr>
                    <td>Invalid Element</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>N/A</td>
                </tr>
            );
        }

        return (
            <tr>
                <td>{guessedEl.name}</td>
                {compareNumbers(guessedEl.num, actualEl.num)}
                {compareStrings(guessedEl.metallic, actualEl.metallic)}
                {compareNumbers(guessedEl.atomic_radius, actualEl.atomic_radius)}
                {compareNumbers(guessedEl.valency, actualEl.valency)}
                {compareStrings(guessedEl.state_of_matter, actualEl.state_of_matter)}
                {compareStrings(guessedEl.natural, actualEl.natural)}
            </tr>
        );
    
    };

    return (
    <tbody>
        {compareGuessAndActual(guessedElement, actualElement)}
    </tbody>
    )
}

export default Guess