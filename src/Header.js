import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Header = () => {
  return (
    <header style={styles.header}>
      {/* Logo */}
      <div style={styles.logo}>
        <img
          src="/logo.jpg" // Replace with your logo URL
          alt="Logo"
          style={styles.logoImage}
        />
        <span style={styles.logoText}>RoadWise</span>
      </div>

      {/* Buttons */}
      <div style={styles.buttons}>
        <Link to="/signup" style={{ ...styles.button, textDecoration: "none" }}>
          Sign In
        </Link>
        <Link to="/login" style={{ ...styles.button, textDecoration: "none" }}>
          Log In
        </Link>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    borderBottom: "1px solid #ccc",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  logoImage: {
    height: "40px",
    marginRight: "10px",
  },
  logoText: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  buttons: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "8px 15px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default Header;
