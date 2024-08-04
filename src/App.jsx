import "./App.css";
import EditorPage from "./pages/editor_page";
import HomePage from "./pages/home_page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectCreationPage from "./pages/project_creation_page";
import Drag from "./components/drag_and_drop";



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/editor" element={<EditorPage />}></Route>
        <Route path="/project_creation" element={<ProjectCreationPage />}></Route>


      </Routes>
    </Router>

  )
}

export default App;
