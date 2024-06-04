import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './Component/Navbar';
import { Home } from './Component/Home';
import { About } from './Component/About';
import { More } from './Component/More';
import { Contact } from './Component/Contact';
import { Footer } from './Component/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />

          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="more" element={<More />} />
          <Route path="contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
