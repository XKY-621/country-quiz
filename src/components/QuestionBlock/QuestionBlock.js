import { useState } from "react";
import styles from "./QuestionBlock.module.css";
import WinnerImg from "./../../assets/winner.svg";
import AdventureImg from "./../../assets/adventure.svg";
import AnswerBlock from "../AnswerBlock/AnswerBlock";
const QuestionBlock = ({ questions, generateQuestion }) => {
  const [view, setView] = useState("0");
  const [step, setStep] = useState(0);
  const [point, setPoint] = useState(0);

  const changeView = (view, answer, isCorrect) => {
    if (isCorrect) {
      setPoint(point + 1);
    } else {
      questions[step].listAnswer[answer].wasClicked = true;
    }
    setView(view);
  };
  const sortCSS = (isCorrect, wasClicked) => {
    var element = styles.answerButton;
    if (isCorrect) {
      element = styles.correctAnswer;
    } else if (wasClicked) {
      element = styles.wrongAnswer;
    }
    return element;
  };
  const nextQuestion = () => {
    if (step == 3) {
      setView(2);
      setStep(0);
    } else {
      setStep(step + 1);
      setView(0);
    }
  };
  const restart = () => {
    setStep(0);
    setPoint(0);
    generateQuestion();
    setView(0);
  };

  if (view == 0) {
    return (
      <div className={styles.wrapper}>
        <AdventureImg className={styles.adventureImg} />
        <p className={styles.question}>
          {questions[step].titreQuestion} is the capital of ?
        </p>
        <AnswerBlock
          questions={questions}
          step={step}
          changeView={changeView}
          isQuestion={true}
        />
      </div>
    );
  } else if (view == 1) {
    return (
      <div className={styles.wrapper}>
        <AdventureImg className={styles.adventureImg} />
        <p className={styles.question}>
          {questions[step].titreQuestion} is the capital of ?
        </p>
        <AnswerBlock
          questions={questions}
          step={step}
          changeView={changeView}
          isQuestion={false}
        />
        <div className={styles.container2}>
          <div className={styles.space}></div>
          <button className={styles.nextButton} onClick={() => nextQuestion()}>
            <div>Next</div>
          </button>
        </div>
      </div>
    );
  } else if (view == 2) {
    return (
      <div className={styles.wrapperCenter}>
        <WinnerImg />
        <h1>Results</h1>
        <p className={styles.normalText}>
          You got
          <span className={styles.pointsText}> {point} </span>
          correct answers
        </p>
        <button className={styles.restartButton} onClick={() => restart()}>
          Try again
        </button>
      </div>
    );
  }
};
export default QuestionBlock;
