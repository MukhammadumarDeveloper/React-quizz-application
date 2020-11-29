import { useContext, useState } from 'react';
import './App.css';
import Javoblar from './components/Javoblar';
import Result from './components/Result';
import Variant from './components/Variant';
import { CurrentContext, PageContext, TestContext } from './Test-context';

function App() {
  const [tests, setTests] = useContext(TestContext);
  const [current, setCurrent] = useContext(CurrentContext);
  const [page, setPage] = useContext(PageContext);

  function handleQuestion(id) {
    if (tests[current].correct === id) {
      tests[current].isCorrect = true;
    }
    if (current < tests.length - 1) {
      setCurrent(current + 1);
    } else if (current === tests.length - 1) {
      setPage("result");
    }
    // setTimeout()

  }
  return (
    <>
      <div className="title">
        <h2>INTELLECT QUIZZ</h2>
      </div>
      <div className="wrap">
        <img className="pic" src="studylogo.png" alt="" />
        {
          page === "test" && <div>
            <p className="question">{tests[current].question}</p>
            {
              tests[current].variants.map((e, index) => (
                <Variant click={(id) => { handleQuestion(id) }} key={index} id={index} variant={e} />
              ))
            }
          </div>
        }
        {
          page === "result" && <Result />
        }
        {
          page === "javoblar" && <Javoblar />
        }
      </div>
    </>
  );
}

export default App;
