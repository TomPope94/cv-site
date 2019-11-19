import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { WELCOME, EXPERIENCE } from "../constants/routes";

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    width: "100vw",
    background: "#2e3440"
  },
  card: {
    flexGrow: 1,
    background: "#eceff4",
    borderRadius: 10,
    margin: 25,
    marginTop: "10vh",
    height: "75vh",
    boxShadow: "0 5px 10px black"
  }
};

const ProjectCards = () => {
  return (
    <Fragment>
      <div style={styles.pageContainer}>
        <div style={styles.card}>
          <Link to={WELCOME}>Back</Link>
          <Link to={EXPERIENCE}>Next</Link>
        </div>
        <div style={styles.card} />
        <div style={styles.card} />
      </div>
    </Fragment>
  );
};

export default ProjectCards;
