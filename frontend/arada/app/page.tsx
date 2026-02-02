import Image from "next/image";
import React from 'react';
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
import Promotion from "./components/Promotion";
import Footer from './components/Footer';
import Main from "./components/Main";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden text-black">
      <Promotion />
      <Navbar />
      <Main />

      <Footer />
    </div>
    
  );
}
