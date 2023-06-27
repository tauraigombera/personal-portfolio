import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Hire from "./components/pages/Hire";
function App() {
  return (
    <>
      <body className="bg-body text-white font-poppins pb-12">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Hire />
      </body>
    </>
  );
}

export default App;
