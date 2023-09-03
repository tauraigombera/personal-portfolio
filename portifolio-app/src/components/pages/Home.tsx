import Navbar from "../Navbar";
import Hero from "../Hero";
import Projects from "./Projects";
import Skills from "../Skills";
import Footer from "../Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
