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
        <meta property="og:url" content="https://dtoutagency.vercel.app/"></meta>
        <meta property="og:type" content="Website"></meta>
        <meta property="og:title" content="Dtout Agency - Book Now"></meta>
        <meta property="og:description" content="At Dtout Agency, we are dedicated to helping dental clinics achieve exceptional growth through tailored digital marketing strategies."></meta>
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/8bfed5a0-5f95-4d4d-b678-d10bca468963.png?token=aCTGi3yX-8Rw5Ek6e-Bg9Y1EuESB4bq_57NM4LnBBT4&height=500&width=500&expires=33272846886"></meta>       
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
