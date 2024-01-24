import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/COntact";
import Navbar from "./components/Navbar";
import HamburgerMenu from "./components/HamburgerMenu";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <HamburgerMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
