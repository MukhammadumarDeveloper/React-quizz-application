import React, { createContext, useState } from 'react';

export const TestContext = createContext();
export const CurrentContext = createContext();
export const PageContext = createContext();

export const TestProvider = (props) => {
    const [tests, setTests] = useState([
        {
            id: 0,
            question: 'Kuala Lumpurning qaysi davlatning poytaxti?',
            variants: [
                'Vietnam',
                'Malayziya',
                'Tailand',
                'Rossiya'
            ],
            correct: 1,
            isCorrect: false
        },
        {
            id: 1,
            question: 'O\'zbekistonning poytaxti qayer?',
            variants: [
                'Toshkent',
                'Kuala Lumpur',
                'Sank Peterburg',
                'Pekin',
            ],
            correct: 0,
            isCorrect: false
        },
        {
            id: 2,
            question: 'Mongoliyaning poytaxti qayer?',
            variants: [
                'Ashigabat',
                'Ulan-Bator',
                'Sank Peterburg',
                'Pekin'
            ],
            correct: 1,
            isCorrect: false
        },
        {
            id: 3,
            question: 'Iroqning poytaxti qayer?',
            variants: [
                'Kobul',
                'Kolombo',
                'Bag\'dod',
                'Dakka'
            ],
            correct: 2,
            isCorrect: false
        },
        {
            id: 4,
            question: 'Turkiyaning poytaxti qayer?',
            variants: [
                'Kobul',
                'Damashq',
                'Ar-Riyod',
                'Anqara',
            ],
            correct: 3,
            isCorrect: false
        }
    ]);
    return (
        <TestContext.Provider value={[tests, setTests]}>
            {props.children}
        </TestContext.Provider>
    )
}

export const CurrentProvider = (props) => {
    const [current, setCurrent] = useState(0);

    return (
        <CurrentContext.Provider value={[current, setCurrent]}>
            {props.children}
        </CurrentContext.Provider>
    )
}

export const PageProvider = (props) => {
    const [page, setPage] = useState("test");

    return (
        <PageContext.Provider value={[page, setPage]}>
            {props.children}
        </PageContext.Provider>
    )
}