import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.less';

class App extends Component {
  render() {

    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h2>Ready to get started</h2>
        </div>
      </div>
    );
  }
}

export default App;