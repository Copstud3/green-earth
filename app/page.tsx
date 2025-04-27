import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Discover from "./components/discover";
import Reviews from "./components/reviews";
import Contact from "./components/contact";
import Footer from "./components/footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Discover />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
