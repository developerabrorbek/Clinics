import { useNavigate } from "react-router-dom";

export const useAuthCustom = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  console.log("auth");
  if (!token) {
    return navigate("/login");
  }
 return "ok"
};
