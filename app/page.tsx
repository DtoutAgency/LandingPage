"use client";
import About from "./sections/About";
import Clients from "./sections/Clients";
import Footer from "./sections/Footer";
import Form from "./sections/Form";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      // Example: Track a custom event
      window.fbq('track', 'CustomEvent');
    }
  }, []);
  return (
    <>
    <main>
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
