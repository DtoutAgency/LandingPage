"use client";
import About from "./sections/About";
import Clients from "./sections/Clients";
import Footer from "./sections/Footer";
import Form from "./sections/Form";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import { useEffect } from "react";
import ReactGA from 'react-ga4'


export default function Home() {

  useEffect(() => {
    ReactGA.event(window.location.pathname)
    if (typeof window !== 'undefined' && window.fbq) {
      // Example: Track a custom event
      window.fbq('track', 'CustomEvent');
    }
  }, []);
  return (
    <>
    <main className="w-full">
          <Header/>
          <Hero/>
          <Form/>
          <About/>
          <Services/>
          <Clients/>
          <Footer/>
    </main>
    </>
  );
}
