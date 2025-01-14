import About from "./sections/About";
import Clients from "./sections/Clients";
import Footer from "./sections/Footer";
import Form from "./sections/Form";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";


export default function Home() {
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
