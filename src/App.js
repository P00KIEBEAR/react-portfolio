import React, { useState } from 'react'
import './App.css';
import Nav from './Nav';
import About from './About';
import Work from './Work';
import Contact from "./Contact";
import Footer from './Footer';

const PAGE = {
  About, Work, Footer, Contact
};


function App() {
  const [currentPage, handlePageChange] = useState("About")
  const Page = PAGE[currentPage];
  return (
    <div>
      <Nav
        currentPage={currentPage} handlePageChange={handlePageChange}

      ></Nav>
      <main>

        <Page />

      </main>
      <Footer></Footer>

    </div>
  )
}

export default App;
