import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
  

      <div className="row">
        <div className="col-6 ">
          <img src="/logo.jpg"style={styles.image} />
        </div>
        <div className="col-6">
          <h3>We want to halve the number of cars in our cities</h3>
          <p>Cities are filled with park cars. They sit unused 96% of the time, and when they are used, it's only by 1.3 people on average.</p>
          <p>Cars are significant ccontributor of CO2 emissions. If we got better at sharing cars in our cities, we could do with half the number of cars and take better care of our planet.</p>
          <p>That's why RoadWise helps people share cars.</p>
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

export default About;
