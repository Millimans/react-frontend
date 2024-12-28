import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.overlay}>
        <p style={styles.text}>© 2024 MyApp. All rights reserved.</p>
        <p style={styles.text}>Follow us on:</p>
        <div style={styles.socialIcons}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundImage: `url('/footer.jpg')`, // Replace with the image path in your public folder
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    color: "#fff",
   margin:"500px auto",

  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
    padding: "20px",
    textAlign: "center",
    borderRadius: "10px",
  },
  text: {
    margin: "5px 0",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "10px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Footer;
