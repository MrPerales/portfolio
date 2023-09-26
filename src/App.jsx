import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/projects" element={<ProjectsPage />}></Route>

          <Route path="/*" element={<></>}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
