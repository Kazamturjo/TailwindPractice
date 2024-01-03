import React from "react";
import Hero from "./Section/Hero/Hero";
import PropulerProduct from './Section/PopulerProduct/PropulerProduct';
import SuperQuality from './Section/SuperQuality/SuperQuality';
import Services from './Section/Servicese/Services';
import SpecialOffer from './Section/SpecialOffer/SpecialOffer';
import CCustomerReviews from './Section/CustomerReviews/CCustomerReviews';
import Subscribe from './Section/Subscribe/Subscribe';
import Footer from './Section/Footer/Footer';
import Nav from "./Component/Nav/Nav";

function App() {
  return (
    <main className="relative">
      <Nav/>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className="padding">
      <PropulerProduct/>
      </section>
      <section className="padding"> 
      <SuperQuality/>
      </section>
      <section className="padding-x py-10">
      <Services/>
      </section>
      <section className='padding'>
      <SpecialOffer/>
      </section>
      <section className='bg-pale-blue padding'>
      <CCustomerReviews/>
      </section>

      <section className='padding-x sm:py-32 py-16 w-full'>
      <Subscribe/>
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
      <Footer/>
      </section>
    </main>
  );
}

export default App;
