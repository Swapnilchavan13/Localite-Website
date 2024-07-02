import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Component/Home';
import ContactUs from './Component/ContactUs';
import Community from './Component/Community';
import Terms from './Component/Terms';
import Careers from './Component/Careers';
import { MerchantForm } from './Component/MerchantForm';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/community" element={<Community />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/merchantform" element={<MerchantForm />} />

    </Routes>
    </BrowserRouter>
      
    );
}

export default App;
