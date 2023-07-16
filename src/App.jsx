import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Pharmacy from "./pages/Pharmasy";
import Documents from "./pages/Documents";
import Delaers from "./pages/Dealers";
import Medicine from "./pages/Medicine";
import Error from "./pages/Error";
import Login from "./pages/Login";
import { useAuthCustom } from "./hooks/auth.hook";
import SingleStore from "./pages/SingleStore";
import SinglePharmacy from "./pages/SinglePharmacy";

const App = () => {
  useAuthCustom();
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Store />} path="/store"/>
        <Route element={<SingleStore />} path="/store/:id" />
        <Route element={<Pharmacy />} path="/pharmacy" />
        <Route element={<SinglePharmacy/>} path="/pharmacy/:id"/>
        <Route element={<Documents />} path="/documents" />
        <Route element={<Delaers />} path="/dealers" />
        <Route element={<Medicine />} path="/medicine" />
        <Route element={<Login />} path="/login" />
        <Route element={<Error />} path="*" />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
