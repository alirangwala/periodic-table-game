import React from 'react';
import { elementMap } from '@/lib/elements';

export interface GuessProps {
    guessedElement: string;
    actualElement: string;
}

const Guess = ({ guessedElement, actualElement }: GuessProps) => {
    
    const findElement = (element: string) => {
        return elementMap.get(element.toLowerCase());
    };

    const compareStrings = (guess: string, actual: string, label: string) => {
        if (guess === actual) {
            return <td data-label={label} className="status-same">{guess}</td>;
        } else {
            return <td data-label={label} className="status-lower">{guess}</td>;
        }
    };

    const compareNumbers = (guess: number, actual: number, label: string) => {
        return guess < actual ? (
            <td data-label={label} className="status-lower">{guess} &uarr;</td>
        ) : guess > actual ? (
            <td data-label={label} className="status-lower">{guess} &darr;</td>
        ) : (
            <td data-label={label} className="status-same">{guess}</td>
        );
    };

    const compareGuessAndActual = (guessed: string, actual: string) => {
        const guessedEl = findElement(guessed);
        const actualEl = findElement(actual);

        if (!guessedEl || !actualEl) {
            return (
                <tr>
                    <td data-label="Element">Invalid Element</td>
                    {/* <td data-label="Number">N/A</td> */}
                    <td data-label="Metallic">N/A</td>
                    <td data-label="Atomic Radius">N/A</td>
                    <td data-label="Valency">N/A</td>
                    <td data-label="State at Room Temp.">N/A</td>
                    <td data-label="Natural or Synthetic">N/A</td>
                </tr>
            );
        }

        return (
            <tr>
                <td data-label="Element">{guessedEl.name}</td>
                {/* {compareNumbers(guessedEl.num, actualEl.num, "Number")} */}
                {compareStrings(guessedEl.metallic, actualEl.metallic, "Metallic")}
                {compareNumbers(guessedEl.atomic_radius, actualEl.atomic_radius, "Atomic Radius")}
                {compareNumbers(guessedEl.valency, actualEl.valency, "Valency")}
                {compareStrings(guessedEl.state_of_matter, actualEl.state_of_matter, "State at Room Temp.")}
                {compareStrings(guessedEl.natural, actualEl.natural, "Natural or Synthetic")}
            </tr>
        );
    };

    return (
        <tbody>
            {compareGuessAndActual(guessedElement, actualElement)}
        </tbody>
    );
};

export default Guess;