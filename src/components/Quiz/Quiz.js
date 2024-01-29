import styles from './Quiz.module.scss'
import {useState} from "react";

const questions = [
    {
        title: 'React - це ... ?',
        variants: ['біблітека', 'фреймворк', 'додаток'],
        correct: 0,
    },
    {
        title: 'Компонент - це ... ',
        variants: ['додаток', 'частина додатку або сторінки', 'це, те що я не знаю'],
        correct: 1,
    },
    {
        title: 'Що таке JSX?',
        variants: [
            'Це просто HTML',
            'Це функція',
            'Це те саме що  HTML, але з можливістю виконувати JS-код',
        ],
        correct: 2,
    },
];

const Result = ({correct}) => {
    return (
        <div className={styles.result}>
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="result-icon" />
            <h2 className={styles.h2}>Ви відгадали {correct} відповіді з {questions.length}</h2>
            <a href="/quiz">
            <button className={styles.btn}>Спробувати знову </button>
            </a>
        </div>
    );
};
const Game = ({ step ,question , OnClickVariant}) => {
    const percentage = Math.round((step / questions.length) * 100)
    return (
        <>
            <div className={styles.progress}>
                <div style={{ width: `${percentage}%` }} className={styles.progress__inner}></div>
            </div>
            <h1>{question.title}</h1>
            <ul className={styles.ul}>
                {question.variants.map((text , index) =>
                <li onClick={ () => OnClickVariant(index)} key={text} className={styles.li}>{text}</li>)}
            </ul>
        </>
    );
};

const Quiz = () => {
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)
    const question = questions[step]

    const OnClickVariant = (index) => {
        setStep(step + 1)

        if(index === question.correct){
            setCorrect(correct + 1)
        }
    }

    return (
        <div className={styles.Quiz}>
            {step !== questions.length ? (<Game step={step}
                                                question={question}
                                                OnClickVariant={OnClickVariant}/>
                ):(
                <Result correct={correct}/>
            )}

        </div>
    );
};

export default Quiz;
