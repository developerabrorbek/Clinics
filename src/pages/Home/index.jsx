import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Header from "../../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Navbar />
      </main>
    </>
  );
};

export default Home;
