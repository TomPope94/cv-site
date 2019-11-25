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
    flexDirection: 'column',
    width: '33%',
    alignItems: 'center'
  },
  thirdCol: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '33%'
  },
  companyTitleContainer: {
    background: '#4C566A',
    color: '#eceff4',
    display: 'flex',
    justifyContent: 'center',
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
    width: '80%'
  },
  companyLogoContainer: {
    background: '#B48EAD',
    flexGrow: 2
  },
  emptyContainer: {
    height: '40%'
  }
};
const VirginMedia = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.contentContainer}>
        <div style={styles.firstCol}>
          <div style={styles.emptyContainer} />
          <div style={styles.companyTitleContainer}>
            <h1 style={{ fontSize: '1.5vw', margin: 0, fontWeight: '200' }}>
              Senior Marketing Performance Analyst
            </h1>
          </div>
          <div style={{ flexGrow: 1 }}>
            <p>
              <ul>
                <li>First thing learnt</li>
                <li>Second thing learnt</li>
                <li>Third thing learnt</li>
              </ul>
            </p>
          </div>
        </div>
        <div style={styles.secondCol}>
          <div style={styles.companyTitleContainer}>
            <h1 style={{ fontSize: '3rem', margin: 0, fontWeight: '200' }}>
              Virgin Media
            </h1>
          </div>
          <div style={styles.companyContainer}>
            <div style={styles.companyLogoContainer}>Picture</div>
          </div>
          <div style={{ height: '40%' }} />
        </div>
        <div style={styles.thirdCol}>
          <div style={styles.emptyContainer} />
          <div style={styles.companyTitleContainer}>
            <h1 style={{ fontSize: '1.5vw', margin: 0, fontWeight: '200' }}>
              Graduate Analyst
            </h1>
          </div>
          <div style={{ flexGrow: 1 }}>
            <p>
              <ul>
                <li>First thing learnt</li>
                <li>Second thing learnt</li>
                <li>Third thing learnt</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirginMedia;
