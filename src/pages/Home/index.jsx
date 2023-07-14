import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import AssetsTable from "../../components/Tables";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Navbar />
        <AssetsTable/>
      </main>
    </>
  );
};

export default Home;
