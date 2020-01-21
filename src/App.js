import React from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import NavBar from './components/NavBar';
import Feed from './components/Feed';

const theme = {
  bgcolor: 'skyblue',
  accentedcolor: '#FF99FF',
  darkercolor: '#FA00FF',
  navbarborder: '0.2em solid #FA00FF',
  postcolor: 'white',
  border: '0.2em solid skyblue',
};

const AppWrapper = styled.div`
  background-color: ${theme.bgcolor};
  height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <NavBar />
        <Feed />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
