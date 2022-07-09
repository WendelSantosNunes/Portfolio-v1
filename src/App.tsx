import React from 'react';
import { Abount } from './components/About';
import { Contact } from './components/Contact';
import { Emphasis } from './components/Emphasis';
import { Footer } from './components/Footer';
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
      <Contact/>
      <Footer/>
      <GlobalStyle/>
   </>
  );
}