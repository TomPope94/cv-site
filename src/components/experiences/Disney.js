import React from 'react';

const styles = {
  pageContainer: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'source-code-pro, monospace',
    fontStyle: 'normal'
  },
  contentContainer: {
    flexGrow: 5,
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  firstCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    flexGrow: 1,
    width: '33%'
  },
  secondCol: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column-reverse',
    width: '33%'
  },
  thirdCol: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '33%'
  },
  companyTitleContainer: {
    background: '#4C566A',
    paddingLeft: 25,
    color: '#eceff4',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '10%'
  },
  jobTitleContainer: {
    background: '#4C566A',
    paddingRight: 25,
    color: '#eceff4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%'
  },
  companyContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '40%',
    width: '100%'
  },
  companyLogoContainer: {
    background: '#B48EAD',
    flexGrow: 2
  },
  emptyContainer: {
    flexGrow: 2
  }
};

const Disney = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.contentContainer}>
        <div style={styles.firstCol}>
          <div />
        </div>
        <div style={styles.secondCol}>
          <div style={{ flexGrow: 1 }}>
            <p>
              <ul>
                <li>First thing learnt</li>
                <li>Second thing learnt</li>
                <li>Third thing learnt</li>
              </ul>
            </p>
          </div>
          <div style={styles.jobTitleContainer}>
            <h1 style={{ fontSize: '2rem', margin: 0, fontWeight: '200' }}>
              Analytics Intern
            </h1>
          </div>
          <div style={{ height: '40%' }} />
        </div>
        <div style={styles.thirdCol}>
          <div style={styles.companyTitleContainer}>
            <h1 style={{ fontSize: '3rem', margin: 0, fontWeight: '200' }}>
              Walt Disney
            </h1>
          </div>
          <div style={styles.companyContainer}>
            <div style={styles.companyLogoContainer}>Picture</div>
            <div style={{ flexGrow: 1 }} />
          </div>
          <div style={styles.emptyContainer} />
        </div>
      </div>
    </div>
  );
};

export default Disney;
