import React from "react";

function QuestionItem({ id, prompt, answers, correctIndex, handleDeleteQuestion, handlePatchQuestion }) {

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={(event) => handlePatchQuestion(event, id)}>{options}</select>
      </label>
      <button onClick={() => {handleDeleteQuestion(id)}}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
