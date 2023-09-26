import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/projects" element={<ProjectsPage />}></Route>

          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
