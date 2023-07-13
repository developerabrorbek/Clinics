import { Link } from "react-router-dom";
import UserImage from "../../assets/user.png";
import SiteLogo from "../../assets/icons/Logo.svg";

const Header = () => {
  return (
    <>
      <header className="header px-5 mb-4">
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
    </>
  );
};

export default Header;