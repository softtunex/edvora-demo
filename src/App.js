import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./component/pages/homepage/homepage.component";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import UpcomingRides from "./component/pages/upcomingrides/upcomingrides.component";
import PastRides from "./component/pages/pastrides/pastrides.component";

function App() {
  return (
    <div className="homepage">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upcoming" element={<UpcomingRides />} />
          <Route path="/past" element={<PastRides />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
