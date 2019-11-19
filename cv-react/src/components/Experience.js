import React from "react";
import { Link } from "react-router-dom";

import { PROJECTS, CONTACT } from "../constants/routes";

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    width: "100vw",
    background: "#eceff4"
  }
};

const Experience = () => {
  return (
    <div style={styles.pageContainer}>
      <Link to={PROJECTS}>Back</Link>
      <Link to={CONTACT}>Next</Link>
    </div>
  );
};

export default Experience;
