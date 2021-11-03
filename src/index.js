import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import mixin from './styles/mixins/mixin';
import Routes from './Routes';
import Footer from './Pages/Main/Components/MainFooter';

ReactDOM.render(
  <ThemeProvider theme={{ ...theme, ...mixin }}>
    <GlobalStyles />
    <Routes />
    <Footer />
  </ThemeProvider>,
  document.getElementById('root')
);
