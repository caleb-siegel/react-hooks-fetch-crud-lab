import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(response => response.json())
    .then(questions => setQuestions(questions))
    .catch(error => setError(error.message))
  }, []);

  const [prompt, setPrompt] = useState("")
  const [answer1, setAnswer1] = useState("")
  const [answer2, setAnswer2] = useState("")
  const [answer3, setAnswer3] = useState("")
  const [answer4, setAnswer4] = useState("")
  const [correctIndex, setCorrectIndex] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      "prompt": prompt,
      "answers": [answer1, answer2, answer3, answer4],
      "correctIndex": correctIndex
    };
    fetch("http://localhost:4000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(newQuestion => {
      setQuestions([...questions, newQuestion]);
      setPrompt("");
      setAnswer1("");
      setAnswer2("");
      setAnswer3("");
      setAnswer4("");
      setCorrectIndex(0);
    })
    .catch(error => {
      console.error(error);
    });
  };

  const handleDeleteQuestion = (id) => {
    fetch(`http://localhost:4000/questions/${id}`, { method: "DELETE" })
    .then(response => {
      if (response.ok) {
        const visibleQuestions = questions.filter(question => question.id !== id);
        setQuestions(visibleQuestions)
      }
    })
  }

  const handlePatchQuestion = (event, id) => {
    event.preventDefault();
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "correctIndex": parseInt(event.target.value)
      })
    })
    .then(response => response.json())
    .then(updatedCorrectIndex => {
      setCorrectIndex(updatedCorrectIndex.correctIndex)
      console.log(updatedCorrectIndex)
      console.log(`correct index is ${correctIndex}`)
    })
  }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleSubmit={handleSubmit} prompt={prompt} answer1={answer1} answer2={answer2} answer3={answer3} answer4={answer4} correctIndex={correctIndex} setPrompt={setPrompt} setAnswer1={setAnswer1} setAnswer2={setAnswer2} setAnswer3={setAnswer3} setAnswer4={setAnswer4} setCorrectIndex={setCorrectIndex}/> : <QuestionList questions={questions} handleDeleteQuestion={handleDeleteQuestion} handlePatchQuestion={handlePatchQuestion}/>}
    </main>
  );
}

export default App;
