import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';

import { WELCOME, PROJECTS, EXPERIENCE, CONTACT } from '../../constants/routes';

const Nav = () => {
  const [formatState, setFormatState] = useState({
    navDisplay: 'none',
    navButtonDisplay: 'flex',
    navCloseButtonDisplay: 'none'
  });

  const styles = {
    navContainer: {
      background: '#eceff4',
      width: 100,
      height: 100,
      borderRadius: '50%',
      left: -50,
      top: -50,
      position: 'absolute',
      cursor: 'pointer'
    },
    nav: {
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100vh',
      width: '100vw',
      display: formatState.navDisplay,
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      background: '#eceff4',
      zIndex: 1
    },
    navOpenButton: {
      position: 'absolute',
      top: 0,
      left: 0,
      display: formatState.navOpenButtonDisplay
    },
    navCloseButton: {
      position: 'absolute',
      top: 0,
      left: 0,
      display: formatState.navCloseButtonDisplay
    }
  };

  const handleClick = direction => {
    if (direction === 'open') {
      setFormatState({
        navDisplay: 'flex',
        navOpenButtonDisplay: 'none',
        navCloseButtonDisplay: 'flex'
      });
    } else {
      setFormatState({
        navDisplay: 'none',
        navButtonDisplay: 'flex',
        navCloseButtonDisplay: 'none'
      });
    }
  };

  return (
    <Fragment>
      <div style={styles.navContainer} onClick={() => handleClick('open')} />
      <div style={styles.nav} id="nav">
        <button
          style={styles.navCloseButton}
          onClick={() => handleClick('close')}
        >
          Close
        </button>
        <Link to={WELCOME} onClick={() => handleClick('close')}>
          Who I Am
        </Link>
        <Link to={PROJECTS} onClick={() => handleClick('close')}>
          What I've Done
        </Link>
        <Link to={EXPERIENCE} onClick={() => handleClick('close')}>
          Where I've Been
        </Link>
        <Link to={CONTACT} onClick={() => handleClick('close')}>
          Get in Touch
        </Link>
      </div>
    </Fragment>
  );
};

export default Nav;
