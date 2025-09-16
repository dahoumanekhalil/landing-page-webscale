// src/App.jsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EventLandingPage from "./pages/EventLandingPage";
import InvestorLandingPage from "./pages/InvestorLandingPage";
import Registration from "./pages/Registration";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/event" element={<EventLandingPage />} />
        <Route path="/investor" element={<InvestorLandingPage />} />
        <Route path="/" element={<Registration />} />
      </Routes>
    </Router>
  );
}
