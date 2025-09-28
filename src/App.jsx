// src/App.jsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EventLandingPage from "./pages/EventLandingPage";
import InvestorLandingPage from "./pages/InvestorLandingPage";
import Registration from "./pages/Registration";
import SubmissionDetails from "./pages/SubmissionDetails";
import WorkshopEventPage from "./pages/WorkshopEventPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/event" element={<EventLandingPage />} />
        <Route path="/investor" element={<InvestorLandingPage />} />
        <Route path="/workshop-event" element={<WorkshopEventPage />} />
        <Route path="/submission/:submission_id" element={<SubmissionDetails />} />
        <Route path="/" element={<Registration />} />
      </Routes>
    </Router>
  );
}
