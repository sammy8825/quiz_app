import React from "react";

// Importing the home page from the components folder
import Home from "./components/Home";

// Importing the Quiz page from the components folder
import Quiz from "./components/Quiz";

// Importing the css
import "./css/style.css";

export default function App() {
  const [quizStarted, setQuizStarted] = React.useState(false);

  return (
    <div>{quizStarted ? <Quiz /> : <Home startQuiz={setQuizStarted} />}</div>
  );
}
