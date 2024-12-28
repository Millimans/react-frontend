import React from "react";
import Header from "./Header";


const Login = () => {
  return (
    <div style={styles.container}>
      <div className="container border mt-3 p-3">
        <div className="text-secondary mb-2">Log in or sign up.</div>
        <div className="d-grid gap-2">
          <button className="btn btn-dark">
            <i className="fab fa-apple me-2"></i>Continue with Apple
          </button>
          <button className="btn btn-light">
            <i class=" fab fa-google me-2"></i>Continue with Google
          </button>
          <button className="btn btn-primary">
            <i class="fab fa-facebook me-2"></i>Continue with Facebook
          </button>
        </div>
        <div className="text-secondary mt-2 text-center">or</div>
        <div className="text-secondary mt-2 text-start">Email</div>
        <div className="mt-2">  
          <input
            type="email"
            className="form-control mb-2"
            placeholder="Enter your email"
          />
          <button className="btn btn-primary w-100">Continue</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  heading: {
    textAlign: "center",
  },
  image: {
    width: "100%", // Ensures the image fits within the column
    height: "auto", // Maintains aspect ratio
  },
};

export default Login;
