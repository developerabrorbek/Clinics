import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
const Pharmacy = () => {
  return (
    <>
    <Header />
      <main className="main">
        <Hero />
        <Navbar />
      </main>
      <h1>Pharmacy page</h1>
    </>
  );
};

export default Pharmacy;