import React from 'react';

const MenuIcon = ({ closed }) => {
  const styles = {
    container: {
      position: 'absolute',
      cursor: 'pointer',
      right: 15,
      bottom: 13
    },
    barStyle: {
      width: 30,
      height: 5,
      background: '#2e3440',
      margin: '6px 0',
      transition: '0.4s'
    },
    bar1: {
      transform: 'rotate(-45deg) translate(-5px, 5px)'
    },
    bar2: {
      opacity: 0
    },
    bar3: {
      transform: 'rotate(45deg) translate(-10px, -10px)'
    }
  };

  return (
    <div style={styles.container}>
      <div
        style={
          closed ? styles.barStyle : { ...styles.barStyle, ...styles.bar1 }
        }
      />
      <div
        style={
          closed ? styles.barStyle : { ...styles.barStyle, ...styles.bar2 }
        }
      />
      <div
        style={
          closed ? styles.barStyle : { ...styles.barStyle, ...styles.bar3 }
        }
      />
    </div>
  );
};

export default MenuIcon;
