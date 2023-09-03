import Navbar from "../Navbar";
import Hero from "../Hero";
//import Projects from "./Projects";
import Skills from "../Skills";
import Footer from "../Footer";
import Portfolio from "../Portfolio";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default Home;
