import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import SendEmail from "./components/SendEmail.jsx";
import HowToUse from "./components/HowToUse.jsx";
import ContactUs from "./components/ContactUs.jsx";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="container my-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Navigate to="/send-email" />} />
            <Route path="/send-email" element={<SendEmail />} />
            <Route path="/how-to-use" element={<HowToUse />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
