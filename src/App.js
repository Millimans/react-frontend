import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import logo from "./logo.svg";
import SearchBar from "./SearchBar";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Login from "./Login";
import NoRidesFound from "./NoRidesFound";
import AddRoute from "./AddRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />

          {/* Navigation Links */}
          <nav style={styles.nav}>
            <Link to="/" style={styles.link}>
              Home
            </Link>
            <Link to="/about" style={styles.link}>
              About
            </Link>
            <Link to="/NoRidesFound" style={styles.link}>
              No Rides Found
            </Link>
            <Link to="/AddRoute" style={styles.link}>
              Add Route
            </Link>
          </nav>

          {/* Routes */}
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h1>Share Cars to take better care of our planet</h1>
                  <SearchBar />
                </div>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/NoRidesFound" element={<NoRidesFound />} />
            <Route path="/AddRoute" element={<AddRoute />} />

            {/* Add Signup route */}
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

const styles = {
  nav: {
    padding: "10px",
    marginBottom: "20px",
    borderBottom: "1px solid #ccc",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#007BFF",
    fontSize: "18px",
  },
};

export default App;
