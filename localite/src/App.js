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
import { EventTable } from './Component/EventTable';
import { MerchantsLinks } from './Component/MerchantsLinks';

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
      <Route path="/merchantlinks" element={<MerchantsLinks />} />




      <Route path="/careers" element={<Careers />} />
      <Route path="/merchantform" element={<MerchantForm />} />

      <Route path="/login" element={<Prelogin />} />
      <Route path="/merchantlogin" element={<Login />} />
      <Route path="/merchant" element={<ProtectedRoute element={<Merchantproducts />} />} />


      <Route path="/cms" element={<Cms />} />
      <Route path="/allorders9049127078" element={<Orderhistory />} />
      <Route path="/allevents" element={<EventTable />} />

      


      

    </Routes>
    </BrowserRouter>
    </AuthProvider>
      
    );
}

export default App;
