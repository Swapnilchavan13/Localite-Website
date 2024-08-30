import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Component/Home';
import ContactUs from './Component/ContactUs';
import Community from './Component/Community';
import Terms from './Component/Terms';
import Careers from './Component/Careers';
import { MerchantForm } from './Component/MerchantForm';
import { Login } from './Component/Login';
import { AuthProvider } from './Component/AuthContext';
import { Merchantproducts } from './Component/Merchantproducts';
import ProtectedRoute from './Component/ProtectedRoute';
import Privacy from './Component/Privacy';
import Return from './Component/Return';
import Shipping from './Component/Shipping';
import { Prelogin } from './Component/Prelogin';
import { Removemydata } from './Component/Removemydata';
import { Cms } from './Component/Cms';
import { Orderhistory } from './Component/Orderhistory';

function App() {
  return (
    <AuthProvider>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/community" element={<Community />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/return" element={<Return />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/removemydata" element={<Removemydata />} />



      <Route path="/careers" element={<Careers />} />
      <Route path="/merchantform" element={<MerchantForm />} />

      <Route path="/login" element={<Prelogin />} />
      <Route path="/merchantlogin" element={<Login />} />
      <Route path="/merchant" element={<ProtectedRoute element={<Merchantproducts />} />} />


      <Route path="/cms" element={<Cms />} />
      <Route path="/allorders" element={<Orderhistory />} />


      

    </Routes>
    </BrowserRouter>
    </AuthProvider>
      
    );
}

export default App;
