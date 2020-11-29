import React, { useContext } from 'react';
import { CurrentContext, PageContext, TestContext } from '../Test-context';

function Javoblar() {
    const [tests, setTests] = useContext(TestContext);
    const [page, setPage] = useContext(PageContext);
    const [current, setCurrent] = useContext(CurrentContext);
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
            <h2 className="javob">Testlarning to'g'ri javoblari</h2>
            <div className="test-javoblari">
                {
                    tests.map((test, index) => (
                        <div key={index}>
                            <p><strong>{test.id + 1}. {test.question}</strong></p>
                            <p>To'g'ri javob: <strong><i>{test.variants[test.correct]}</i></strong></p>
                        </div>
                    ))
                }
            </div>
            <div className="center">
                <button className="button-group" onClick={resetAll}>Qaytadan</button>
                <button className="button-group" onClick={
                    () => {
                        setPage('result')
                    }
                }>Ortga</button>
            </div>
        </div>
    )
}

export default Javoblar;