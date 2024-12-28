import React, { useState } from "react";

const SearchBar = () => {
  const [destination, setDestination] = useState("");
  const [pickup, setPickup] = useState("");
  const [time, setTime] = useState("");

  const handleSearch = () => {
    console.log("Search initiated with:", { destination, pickup, time });
    // Add your search logic here
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Where are we going?"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Pick-up"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
        style={styles.input}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>
        Search
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "25px",
    padding: "5px ",
    maxWidth: "600px",
    margin: "0 auto",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default SearchBar;
