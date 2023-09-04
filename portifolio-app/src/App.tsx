import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <body className="bg-body text-white font-poppins">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </body>
    </>
  );
}

export default App;
