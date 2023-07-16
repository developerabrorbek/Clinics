import LoginImage from "../../assets/login-image.png";
import SiteLogo from "../../assets/icons/Logo.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setData({
      username: formData.get("username"),
      password: formData.get("password"),
    });

    localStorage.setItem("token", data?.username);
    toast.success("Successfully logged in!");
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <>
      <main className="main row row-cols-3  main-login d-flex justify-content-between align-items-center">
        <div className="main-banner col-8 d-flex flex-column align-items-center justify-content-center">
          <img src={LoginImage} alt="login image" />
          <div className="main-banner__body">
            <h2>Несколкоь кликов чтобы начать🚀</h2>
          </div>
        </div>
        <div className="main-body  col-4 d-flex align-items-center justify-content-center  bg-white  h-100">
          <div className="main-body__login w-75">
            <div className="logo mb-4">
              <img src={SiteLogo} alt="site-logo" />
            </div>
            <form className="d-flex flex-column gap-3" onSubmit={handleLogin}>
              <label htmlFor="username">
                <p className="mb-1 text-body-secondary">Имя пользователя</p>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                />
              </label>
              <label htmlFor="password">
                <p className="mb-2 text-body-secondary">Пароль</p>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                />
              </label>
              <button type="submit" className="btn btn-primary">
                Вход
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
