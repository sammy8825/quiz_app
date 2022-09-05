export default function QuestionCard(prop) {
  /**
   * Function for generating the Question card with passed in properties from the Quiz page
   * @param {props} event which accepts the properties passed to the component
   * @return {JSX Element} Question card with the passed properties
   */


  function handleClick(event) {
    /**
     * Function which registers and updates the answers marked by the user.
     */
    prop.answers((answersMarked) => {
      let index = answersMarked.findIndex(
        (ans) => ans.question === prop.question
      );

      // Checks if the user updated the answer or answered a new question
      if (index !== -1) {
        answersMarked[index].answer = event.target.value;
        return answersMarked;
      } else
        return [
          ...answersMarked,
          { question: prop.question, answer: event.target.value },
        ];
    });
  }

  // Generates the option's buttons
  let buttons = prop.options.map((option) => (
    <label key={option}>
      <input
        onChange={handleClick}
        type="radio"
        name={prop.question}
        value={option}
      />
      {option}
    </label>
  ));

  return (
    <div>
      <h3>{prop.question}</h3>
      {buttons}
    </div>
  );
}
