import React from 'react';
import { Abount } from './components/About';
import { Emphasis } from './components/Emphasis';
import { Header } from './components/Header';
import { Knowledge } from './components/Knowledge';
import { ProjectNews } from './components/ProjectsNews';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <Header />
      <Emphasis/>
      <Abount/>
      <Knowledge/>
      <ProjectNews/>
      <GlobalStyle/>
   </>
  );
}