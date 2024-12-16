import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PaymentSection from "./components/PaymentSection";
import Footer from "./components/Footer";
import PaymentModal from "./components/Modals/PaymentModal";
import LoginModal from "./components/Modals/LoginModal";
import SignupModal from "./components/Modals/SignupModal";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Team from "./components/pages/Team";

const App = () => {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Routes with Header and Footer for main page */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <main className="flex-1">
                  <PaymentSection onPaymentClick={() => setPaymentModalOpen(true)} />
                </main>
                <Footer />
              </>
            }
          />

          {/* Routes for About, Contact, and Team pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />

          {/* Modal routes for Login and Signup with Header and Footer */}
          <Route
            path="/sign-in"
            element={
              <>
                <Header />
                <LoginModal onClose={() => setPaymentModalOpen(false)} />
                <Footer />
              </>
            }
          />
          <Route
            path="/sign-up"
            element={
              <>
                <Header />
                <SignupModal onClose={() => setPaymentModalOpen(false)} />
                <Footer />
              </>
            }
          />
        </Routes>

        {/* Modals */}
        {isPaymentModalOpen && (
          <PaymentModal onClose={() => setPaymentModalOpen(false)} />
        )}
      </div>
    </Router>
  );
};

export default App;
