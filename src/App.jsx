// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventLandingPage from "./pages/EventLandingPage";
import Registration from "./pages/Registration";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/event" element={<EventLandingPage />} />
        <Route path="/" element={<Registration />} />
      </Routes>
    </Router>
  );
}
