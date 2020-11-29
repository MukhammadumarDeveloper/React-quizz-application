import React, { useContext } from 'react';
import { CurrentContext, PageContext, TestContext } from '../Test-context';

function Result() {
    const [tests, setTests] = useContext(TestContext);
    const [page, setPage] = useContext(PageContext);
    const [current, setCurrent] = useContext(CurrentContext);
    let corrects = 0;
    tests.forEach(e => {
        if (e.isCorrect) {
            corrects++
        }
    })
    function resetAll() {
        const testss = tests.map(e => {
            return {
                id: e.id,
                question: e.question,
                variants: e.variants,
                correct: e.correct,
                isCorrect: false
            }
        });
        setTests(testss);
        setPage('test');
        setCurrent(0);
    }
    return (
        <div>
            <img src="success.png" className="success" alt="" />
            <h2 className="result">Sizning natijalaringiz</h2>
            <p className="result-title">Siz {tests.length} ta testdan {corrects} ta to'g'ri javob belgiladingiz! </p>
            <div className="center">
                <button className="button-group" onClick={resetAll}>Qaytadan</button>
                <button className="button-group" onClick={
                    () => {
                        setPage('javoblar')
                    }
                }>Javoblar</button>
            </div>
        </div>
    )
}

export default Result;