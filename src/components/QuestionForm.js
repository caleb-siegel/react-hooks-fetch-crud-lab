import React, { useState } from "react";

function QuestionForm({ handleSubmit, prompt, answer1, answer2, answer3, answer4, correctIndex, setPrompt, setAnswer1, setAnswer2, setAnswer3, setAnswer4, setCorrectIndex }) {
  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            name="prompt"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
          />
        </label>
        <label>
          Answer 1:
          <input
            type="text"
            name="answer1"
            value={answer1}
            onChange={(event) => setAnswer1(event.target.value)}
          />
        </label>
        <label>
          Answer 2:
          <input
            type="text"
            name="answer2"
            value={answer2}
            onChange={(event) => setAnswer2(event.target.value)}
          />
        </label>
        <label>
          Answer 3:
          <input
            type="text"
            name="answer3"
            value={answer3}
            onChange={(event) => setAnswer3(event.target.value)}
          />
        </label>
        <label>
          Answer 4:
          <input
            type="text"
            name="answer4"
            value={answer4}
            onChange={(event) => setAnswer4(event.target.value)}
          />
        </label>
        <label>
          Correct Answer:
          <select
            name="correctIndex"
            value={correctIndex}
            onChange={(event) => setCorrectIndex(Number(event.target.value))}
          >
            <option value="0">{answer1}</option>
            <option value="1">{answer2}</option>
            <option value="2">{answer3}</option>
            <option value="3">{answer4}</option>
          </select>
        </label>
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;
