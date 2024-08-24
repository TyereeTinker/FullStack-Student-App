import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import NavBar from "./components/common/NavBar.js";
import AddStudent from "./components/student/AddStudent.js";
import EditStudent from "./components/student/EditStudent.js";
import StudentView from './components/student/StudentView';
import Home from "./Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="container mt-5">
        <Router>
          <NavBar />
          <Routes> 
            <Route exact path="/" element={<Home/>}> Homes </Route>
            <Route exact path="/view-students" element={<StudentView />}> Home </Route>
            <Route exact path="/add-student" element={<AddStudent />}> Homes </Route>
            <Route exact path="/edit-student/:id" element={<EditStudent />}> Homes </Route>
          </Routes>
        </Router>
    </main>
  );
}

export default App;
