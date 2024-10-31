"use client"
import React, { useState } from 'react'
import Guess from './Guess';
import './Guess.css';
import InformationPopUp from '../InformationPopUp/InformationPopUp';


export interface GuessedProps {
    guessedElements: string[];
    actualElement: string
}


const Guesses = ({ guessedElements, actualElement }: GuessedProps) => {
    const [isMetallicPopUpOpen, setIsMetallicPopUpOpen] = useState(false);
    // const [isAtomicRadiusPopUpOpen, setIsAtomicRadiusPopUpOpen] = useState(false);
    const [isValencyPopUpOpen, setIsValencyPopUpOpen] = useState(false);
    const [isStatePopUpOpen, setIsStatePopUpOpen] = useState(false);
    // const [isNaturalPopUpOpen, setIsNaturalPopUpOpen] = useState(false);

    return (
        <table >
            <thead >
                <tr >
                    <th>Element</th>
                    <th>Metallic <span
                        onMouseEnter={() => setIsMetallicPopUpOpen(!isMetallicPopUpOpen)}
                        onMouseLeave={ () => setIsMetallicPopUpOpen(false)}
                        style={{ cursor: 'pointer', position: 'relative' }}
                    >
                        &#9432;
                        {isMetallicPopUpOpen && <InformationPopUp message="Elements can be either Metal, Nonmetal, or Metalloid." />}
                    </span></th>
                    <th>Atomic Radius</th>
                    <th>Valency <span
                        onMouseEnter={() => setIsValencyPopUpOpen(!isValencyPopUpOpen)}
                        onMouseLeave={ () => setIsValencyPopUpOpen(false)}
                        style={{ cursor: 'pointer', position: 'relative' }}
                    >
                        &#9432;
                        {isValencyPopUpOpen && <InformationPopUp message="Valency refers to the maximum number of electrons in the outermost shell" />}
                    </span></th>
                    <th>State <span
                        onMouseEnter={() => setIsStatePopUpOpen(!isStatePopUpOpen)}
                        onMouseLeave={ () => setIsStatePopUpOpen(false)}
                        style={{ cursor: 'pointer', position: 'relative' }}
                    >
                        &#9432;
                        {isStatePopUpOpen && <InformationPopUp message="The State at room temperature and atmospheric pressure." />}
                    </span></th>
                    <th>Natural or Synthetic</th>
                </tr>
            </thead>
            {guessedElements.length > 0 && guessedElements.map((el, index) => (
                <Guess key={index} guessedElement={el} actualElement={actualElement} />
            )
            )
            }
        </table>
    )
}

export default Guesses