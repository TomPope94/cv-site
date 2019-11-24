import React from 'react';

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  companyIcon: {
    width: '50vw',
    height: '50vw',
    background: '#B48EAD',
    borderRadius: 10
  },
  jobTitleContainer: {
    width: '75%',
    background: '#4C566A',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  jobTitleText: {
    fontSize: '7vw',
    color: '#eceff4',
    margin: 0,
    fontWeight: '200'
  }
};

const MobileDisney = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.companyIcon} />
      <div style={styles.jobTitleContainer}>
        <h1 style={styles.jobTitleText}>Analytics Intern</h1>
      </div>
      <div>
        <p>
          <ul>
            <li>First thing learnt</li>
            <li>Second thing learnt</li>
            <li>Third thing learnt</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default MobileDisney;
