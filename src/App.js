import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SubjectPage from "./pages/SubjectPage";
import TopicPage from "./pages/TopicPage";
import WaveBackground from "./components/WaveBackground";
import "./styles/App.css";

function App() {
  // const [isAllowed, setIsAllowed] = useState(false);
  
  // useEffect(() => {
  //   // Define allowed referrers
  //   const allowedReferrers = [
  //     "https://www.techcryptors.com",
  //     "https://techcryptors.com",
  //     "http://www.techcryptors.com",
  //     "http://techcryptors.com",
  //   ];

  //   const currentReferrer = document.referrer || "";

  //   // Check if referrer matches allowed patterns
  //   const isValidReferrer = allowedReferrers.some((allowed) =>
  //     currentReferrer.startsWith(allowed)
  //   );

  //   // Redirect if manually entered (empty referrer)
  //   if (!isValidReferrer && currentReferrer === "") {
  //     window.location.href = "https://www.mheducation.com";
  //     return;
  //   }

  //   // If allowed, show the site
  //   setIsAllowed(true);
  // }, []);

  // // Show nothing while checking
  // if (!isAllowed) return null;

  return (
    <Router>
      <div className="app">
        <WaveBackground />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subject/:subject" element={<SubjectPage />} />
          <Route path="/topic/:subject/:topic" element={<TopicPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
