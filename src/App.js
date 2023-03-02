import { QuestionsPage } from "./components/QuestionPage";
import { InitialPage } from "./components/InitialPage";
import { useState } from "react";

function App() {
  const [questionPage, setQuestionPage] = useState(false)
  function changePage(){
    setQuestionPage(prev=>true)
  }
  return (<>
    {questionPage ? <QuestionsPage /> : <InitialPage changePage={changePage} />}
  </>
  );
}

export default App;
