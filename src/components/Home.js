export default function Home(props) {

    // For Redirecting from Home Page to quiz page 
    function handleChange(){
        props.startQuiz(true);
    }
  return (
    <div className="home">
      <h1>Quizzical</h1>
      <p>App where you can test your knowledge</p>
      <button onClick={handleChange}>Start the Quiz</button>
    </div>
  );
}
