import "./index.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Booking from "./pages/Reservation/Reservation";
import NotFound from "./pages/NotFound/NotFound";
import BeautyService from "./pages/BeautyService/BeautyService";
import Schedule from "./pages/Schedule/Schedule";
import Footer from "./components/Footer/Footer";
import { ProgressProvider } from "./context/ProgressContext";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ProgressProvider>
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<BeautyService />} />
              <Route path="/horarios" element={<Schedule />} />
              <Route path="/reserva" element={<Booking />} />
              <Route path="/pagina-no-encontrada" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </ProgressProvider>
      </div>
    </Router>
  );
};

export default App;
