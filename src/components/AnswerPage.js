export default function Answers(props) {
  /**
   * Function to show the user what he marked and whats the real answer and also display the result of the quiz
   */
  
  // Variable to measure the correct answers
  let correctCount = 0;


  let results = props.result.map((res) => {
    /**
     * Function to count the correct answer and display the same
     */
    if (res.correct_answer === res.answer) correctCount += 1;
    return (
      <div>
        <h3>{res.question}</h3>
        <p className={res.answer === res.correct_answer ? "correct" : "wrong"}>
          Your Answer: {res.answer}
        </p>
        <p className="correct"> Correct Answer: {res.correct_answer} </p>
      </div>
    );
  });

  return (
    <>
      {results}
      <br />
      <p className="result">The number of questions answered correctly are {correctCount}/5</p>
    </>
  );
}
