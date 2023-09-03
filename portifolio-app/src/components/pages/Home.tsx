import Navbar from "../Navbar";
import Hero from "../Hero";
import Skills from "../Skills";
import Footer from "../Footer";
import Portfolio from "../Portfolio";
import Connect from "../Connect";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Connect />
      <Footer />
    </div>
  );
}

export default Home;
