import React from 'react';
import Header from '../home/Header';
import About from '../home/About';
import Hero from '../home/Hero';
import Program from '../home/Program';
import Newsletter from '../home/Newsletter';
import Membership from '../home/Membership';
import ScrollUp from '../home/ScrollUp';
import Footer from '../home/Footer';

const Homepage = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Program/>
    <Membership/>
    <Newsletter/>
    <Footer/>
    <ScrollUp/>
  
    </>
  )
}

export default Homepage