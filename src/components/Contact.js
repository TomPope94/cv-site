import React from "react";
import { Link } from "react-router-dom";
import { EXPERIENCE } from "../constants/routes";

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    width: "100vw",
    background: "#a3bf8d"
  }
};

const Contact = () => {
  return (
    <div style={styles.pageContainer}>
      <Link to={EXPERIENCE}>Back</Link>
      <h1>Contact Page</h1>
    </div>
  );
};

export default Contact;
