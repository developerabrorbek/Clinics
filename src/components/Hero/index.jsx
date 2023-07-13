import HeroBg from "../../assets/hero-bg.png";
import UserImage from "../../assets/user.png";
const Hero = () => {
  return (
    <>
      <section className="hero mb-4">
          <div className="container-fluid d-flex align-items-center justify-content-center">
            <div className="hero__inner bg-white  rounded-bottom-1 shadow">
              <div className="hero-banner">
                <img src={HeroBg} alt="Hero banner" />
              </div>
              <div className="hero-body d-flex align-items-center gap-5 position-relative">
                <div className="hero-body__image">
                  <img src={UserImage} alt="user image" />
                </div>
                <h3 className="fs-4 text-body-secondary">
                  Камрон Хамроевич Олимов
                </h3>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Hero;