import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
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
        </Routes>
      </body>
    </>
  );
}

export default App;
