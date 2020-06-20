import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import ScrollToTop from './components/ScrollToTop';
import LogoutModal from './components/LogoutModal';

function App() {
  return (
    <div className="App">
      <Wrapper />
      <ScrollToTop/>
      <LogoutModal/>
    </div>
  );
}

export default App;
