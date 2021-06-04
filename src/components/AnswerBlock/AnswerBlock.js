import styles from "./AnswerBlock.module.css";

const sortCSS = (isCorrect, wasClicked) => {
  var element = styles.answerButton;
  if (isCorrect) {
    element = styles.correctAnswer;
  } else if (wasClicked) {
    element = styles.wrongAnswer;
  }
  return element;
};
const AnswerBlock = ({ questions, step, changeView, isQuestion }) => {
  const answerList = questions[step].listAnswer.map((i, index) => (
    <button
      key={index}
      className={styles.answerButton}
      onClick={() =>
        changeView("1", index, questions[step].listAnswer[index].isCorrect)
      }
    >
      <div>{questions[step].listAnswer[index].nameCountry}</div>
    </button>
  ));
  const resultList = questions[step].listAnswer.map((i, index) => (
    <button
      key={index}
      className={sortCSS(
        questions[step].listAnswer[index].isCorrect,
        questions[step].listAnswer[index].wasClicked
      )}
    >
      <div>{questions[step].listAnswer[index].nameCountry}</div>
    </button>
  ));
  if (isQuestion) {
    return <div className={styles.answer}>{answerList}</div>;
  } else {
    return <div className={styles.answer}>{resultList}</div>;
  }
};
export default AnswerBlock;
