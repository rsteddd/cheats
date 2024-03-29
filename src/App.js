import './App.css';
import {Routes, Route } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Layout from "./Layout";
import Modal from "./components/Modal/Modal";
import Quiz from "./components/Quiz/Quiz";


function App() {
  return (
    <>

    <Routes>
       <Route path="/" element={<Layout />}>
        <Route path="counter" element={<Counter />}/>
        <Route path="modal" element={<Modal />}/>
        <Route path="quiz" element={<Quiz />}/>
        </Route>
    </Routes>
    </>
  )
}

export default App;
