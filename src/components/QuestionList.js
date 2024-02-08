import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, handleDeleteQuestion, handlePatchQuestion }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => <QuestionItem key={question.id} id={question.id} prompt={question.prompt} answers={question.answers} correctIndex={question.correctIndex} handleDeleteQuestion={handleDeleteQuestion} handlePatchQuestion={handlePatchQuestion}/>)}      
      </ul>
    </section>
  );
}

export default QuestionList;
