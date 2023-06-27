import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Hire from "./components/pages/Hire";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <body className="bg-body text-white font-poppins pb-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hire" element={<Hire />} />
        </Routes>
      </body>
    </>
  );
}

export default App;
