import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Header from "../../components/Header";

const Store = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Navbar />
      </main>
      <h1>Store page</h1>
    </>
  );
};

export default Store;
