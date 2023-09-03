import Navbar from "../Navbar";
import Hero from "../Hero";
import Projects from "./Projects";
import Hire from "./Hire";
import Skills from "../Skills";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Hire />
    </div>
  );
}

export default Home;
