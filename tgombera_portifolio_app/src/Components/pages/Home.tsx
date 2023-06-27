import Navbar from "../Navbar";
import Hero from "../Hero";
import About from "./About";
import Projects from "./Projects";
import Hire from "./Hire";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Hire />
    </div>
  );
}

export default Home;
