import React from 'react';

import Main from "../src/pages/Main";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card"; 
import Hero from "./components/Hero";


const App = () => (

    <div>
      <Navbar />
      <Card />
      <Hero />
        <Main />
      <Footer />
    </div>

);

export default App;
