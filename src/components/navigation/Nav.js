import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';

import { WELCOME, PROJECTS, EXPERIENCE, CONTACT } from '../../constants/routes';
import MenuIcon from './MenuIcon';

const Nav = () => {
  const [formatState, setFormatState] = useState({
    navDisplay: 'none',
    navButtonDisplay: 'flex',
    navCloseButtonDisplay: 'none',
    navClosed: true
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
      cursor: 'pointer',
      zIndex: 2,
      boxShadow: '0 2px 5px black'
    },
    nav: {
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      background: '#eceff4',
      zIndex: 1,
      transform: 'scale(0)',
      transformOrigin: 'top left'
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
    },
    navLinks: {
      display: formatState.navDisplay
    }
  };

  const animateNav = direction => {
    const animateDirection = direction === 'open' ? 'normal' : 'reverse';

    anime
      .timeline({
        autoplay: true,
        direction: animateDirection
      })
      .add({
        targets: '#nav-animate',
        scale: [0, 1.5],
        // borderRadius: ['0 0 50%', '0 0 0 0'],
        duration: 1000
      })
      .add(
        {
          targets: '#nav',
          scale: [0, 1],
          duration: 1000
        },
        0
      );
  };

  const handleClick = navClosed => {
    if (!navClosed) {
      animateNav('open');
      setFormatState({
        navDisplay: 'block',
        navOpenButtonDisplay: 'none',
        navCloseButtonDisplay: 'flex',
        navClosed: false
      });
    } else {
      animateNav('close');
      setFormatState({
        navDisplay: 'none',
        navButtonDisplay: 'flex',
        navCloseButtonDisplay: 'none',
        navClosed: true
      });
    }
  };

  return (
    <Fragment>
      <div
        style={styles.navContainer}
        onClick={() => handleClick(!formatState.navClosed)}
      >
        <MenuIcon closed={formatState.navClosed} />
      </div>
      <div
        style={{ ...styles.nav, borderRadius: '0 0 50%' }}
        id="nav-animate"
      />
      <div style={styles.nav} id="nav">
        <Link
          style={styles.navLinks}
          to={WELCOME}
          onClick={() => handleClick('close')}
        >
          Who I Am
        </Link>
        <Link
          style={styles.navLinks}
          to={PROJECTS}
          onClick={() => handleClick('close')}
        >
          What I've Done
        </Link>
        <Link
          style={styles.navLinks}
          to={EXPERIENCE}
          onClick={() => handleClick('close')}
        >
          Where I've Been
        </Link>
        <Link
          style={styles.navLinks}
          to={CONTACT}
          onClick={() => handleClick('close')}
        >
          Get in Touch
        </Link>
      </div>
    </Fragment>
  );
};

export default Nav;
