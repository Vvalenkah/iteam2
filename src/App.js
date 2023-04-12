import * as React from "react";

import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import About from './components/about/about';
import ExpBanner from './components/expBanner/expBanner';
import Products from './components/products/products';
import Companies from './components/companies/companies';
import Support from "./components/support/support";
import Footer from './components/footer/footer';

export default function App() {
  return (
      <>
        <Header />
        <Hero />
        <About />
        <ExpBanner />
        <Products />
        <Companies />
        <Support />
        <Footer />
      </>
  )
}

