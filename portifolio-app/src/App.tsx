import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <body className="bg-body text-white font-poppins">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </body>
    </>
  );
}

export default App;
