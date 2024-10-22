"use client"
import React, { useEffect, useRef, useState } from 'react'
import PeriodicTable from '../PeriodicTable/PeriodicTable'
import Guesses from '../Guesses/Guesses'
import Modal from '../Modal/Modal'
import { elements, elementMap } from '@/lib/elements'

import "./Game.css";


const getTodaysElement = () => {
    const millisecondsPerDay = 86400000;
    const numberOfElements = 118
    const daysSinceEpoch = Math.floor(Date.now() / millisecondsPerDay);
    const elementOfTheDay = elements[daysSinceEpoch % numberOfElements]["name"].toLowerCase()
    return elementOfTheDay
}
const actualElement = getTodaysElement()

const Game = () => {
    const [input, setInput] = useState<string>('');
    const [guessedElements, setGuessedElements] = useState<string[]>([])
    const [currentGuess, setCurrentGuess] = useState<string>("")
    const [openWon, setOpenWon] = useState(false);
    const [error, setError] = useState<string | null>(null); 

    const bottomRef = useRef<HTMLDivElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        setError(null);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!elementMap.get(input.toLowerCase())) {
            setError('Please enter a valid element'); 
        } else if (guessedElements.includes(input.toLowerCase())) {
            setError('Please guess a new element'); 
        }else{
            setError(null); 
            setCurrentGuess(input)
            setInput("")
        }
    };

    const handleModalClose = () => {
        setGuessedElements([])
        setCurrentGuess("")
        setOpenWon(false)

    }
    useEffect(() => {
        if (currentGuess !== "" && !guessedElements.includes(currentGuess.toLowerCase())) {
            setGuessedElements(prevGuesses => [...prevGuesses, currentGuess.toLowerCase()]);
            if (currentGuess.toLowerCase() === actualElement.toLowerCase()) {
                setOpenWon(true);
            }
        }
    }, [currentGuess, guessedElements]);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [guessedElements]);
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                    placeholder="Enter an Element Here"
                />
                <div className="buttonWrapper">
                    <button >Enter</button>
                </div>
                {error && <p className="error-message">{error}</p>}
            </form>
            <PeriodicTable guessedElements={guessedElements} setInput={setInput}/>

            {(guessedElements.length > 0) && <Guesses guessedElements={guessedElements} actualElement={actualElement} />}
            <div ref={bottomRef} />
            {openWon && <Modal primary_message="You Won!" secondary_message = {elementMap.get(actualElement)["fun_fact"]}  onClose={() => handleModalClose()} />} {/* Conditionally render the modal */}
        </div>
    )
}

export default Game