import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Router>
        <header>
          <a className="first" href="/homepage">
            Home
          </a>
          <a className="last" href="/signup">
            Sign up/Login
          </a>
          <a
            className="last"
            href="https://donate.wikimedia.org/"
            target="_blank"
          >
            Donate (opens in new tab)
          </a>
        </header>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
      <br />
      <footer>
        <a href="https://donate.wikimedia.org/" target="_blank">
          Click here to donate to Wikipedia! and support the site used in this
          program! (Opens in new tab)
        </a>
      </footer>
    </div>
  );
}

export default App;
