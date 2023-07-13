import { Link } from "react-router-dom";
import UserImage from "../../assets/user.png";
import SiteLogo from "../../assets/icons/Logo.svg";
import HeroBg from "../../assets/hero-bg.png";

const Home = () => {
  return (
    <>
      <header className="header px-5">
        <div className="container-fluid d-flex justify-content-between align-items-center py-2">
          <Link to="/">
            <img src={SiteLogo} alt="site logo" />
          </Link>
          <div className="user-profile position-relative ">
            <img
              src={UserImage}
              alt="user image"
              className="w-50 rounded-circle"
            />
            <span className="position-absolute top-100 start-50 translate-middle p-2 bg-success border border-light rounded-circle"></span>
          </div>
        </div>
      </header>
      <main className="main mt-4">
        <section className="hero">
          <div className="container-fluid d-flex align-items-center justify-content-center">
            <div className="hero__inner bg-white pb-4 rounded-bottom-1">
              <div className="hero-banner">
                <img src={HeroBg} alt="Hero banner" />
              </div>
              <div className="hero-body d-flex align-items-center gap-5 position-relative bottom-50">
                <div className="hero-body__image">
                  <img src={UserImage} alt="user image" />
                </div>
                <h3 className="fs-4">Камрон Хамроевич Олимов</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
