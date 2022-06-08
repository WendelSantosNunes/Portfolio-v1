import React from 'react';
import { Abount } from './components/About';
import { Emphasis } from './components/Emphasis';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <Header />
      <Emphasis/>
      <Abount/>
      <GlobalStyle/>
   </>
  );
}