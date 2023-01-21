import './App.css';
import Form from './Component/Form';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginForm from './Component/LoginForm';
function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Form />}></Route>
        <Route exact path="login" element={<LoginForm/>}></Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
