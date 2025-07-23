import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
     <Navbar />
       <Routes>
        
        <Route path="/" element={<HomePage />} />
       <Route path="/about" element={<AboutPage />} />
   <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>  </header>
    </div>
  );
}

export default App;
