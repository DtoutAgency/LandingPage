import About from "./sections/About";
import Clients from "./sections/Clients";
import Footer from "./sections/Footer";
import Form from "./sections/Form";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Head from 'next/head';

export default function Home() {
  return (
    <>

      <Head>
        <title>Dtout Agency</title>
        <meta property="og:title" content="Dtout Agency" />
        <meta property="og:description" content="At Dtout Agency, we are dedicated to helping dental clinics achieve exceptional growth through tailored digital marketing strategies."/>
        <meta property="og:image" content="/Img/Dtout_logo.png" />
        <meta property="og:url" content="https://dtoutagency.vercel.app" />
        <meta property="og:type" content="website" />
      </Head>


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
