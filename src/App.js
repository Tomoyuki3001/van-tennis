import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import Play from "./pages/Play";
import Watch from "./pages/Watch";
import Gear from "./pages/Gear";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/play" element={<Play />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/gear" element={<Gear />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
