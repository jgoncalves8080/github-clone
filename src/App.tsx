import 'react-calendar-heatmap/dist/styles.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
