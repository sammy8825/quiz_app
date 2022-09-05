import React from "react";

// Importing the question card section
import QuestionCard from "./QuestionCard";

// Importing the answer section
import Answers from "./AnswerPage";

export default function Quiz() {
  
  // State for observing the change in data which is fetched from the API
  const [apiData, setApiData] = React.useState([]);

  // State for observing the change in answers marked by the user
  const [answers, setAnswers] = React.useState([]);

  // State to check whether the user has marked all the answers in the quiz and now wants to check the answers
  const [displayResult, setDisplay] = React.useState(false);

  function checkAnswers() {
    /**
     * appends the correct answers in the list of objects of the answers marked by the user
     * and sets the display result to true to display the results of the quiz
     */
    answers.forEach((ans) => {
      // finds the index of the question which is present in the apiData variable and appends the correct answer
      let index = apiData.findIndex((ques) => ques.question === ans.question);
      ans.correct_answer = apiData[index].correct_answer;
    });
    setDisplay(!displayResult);
  }

  function playAgain() {
    /**
     * function to reset all the values and get new quiz questions from the API
     */
    getData();
    setAnswers([]);
    setDisplay(false);
  }

  const getData = async () => {
    /**
     * Fetches the data from the API and appends it to the apiData variable using the state function
     */
    const res = await fetch("https://opentdb.com/api.php?amount=5");
    const data = await res.json();
    setApiData(data.results);
  };

  React.useEffect(() => {
    /**
     * Fetching the data from the api and apending it into the apiData variable
     */
    getData();
  }, []);

  let quiz = apiData.map((ques, index) => {
    /**
     * Generates the question cards using the data fetched from the API
     */
    let solution = [ques.correct_answer, ...ques.incorrect_answers];

    // shuffles the options once.
    if (answers.length === 0) {
      for (let i = solution.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = solution[i];
        solution[i] = solution[j];
        solution[j] = temp;
      }
    }

    return (
      <QuestionCard
        question={ques.question}
        options={solution}
        answers={setAnswers}
        key={index}
      />
    );
  });

  // renders the answer page or the question cards
  return (
    <>
      {displayResult ? <Answers result={answers} /> : quiz}
      <br />
      <button
        disabled={answers.length !== 5}
        onClick={!displayResult ? checkAnswers : playAgain}
        className="myButton"
      >
        {!displayResult ? "Check My Answers" : "Play Again"}
      </button>
    </>
  );
}
