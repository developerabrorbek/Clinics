import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Pharmacy from "./pages/Pharmasy";
import Documents from "./pages/Documents";
import Delaers from "./pages/Dealers";
import Medicine from "./pages/Medicine";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Store />} path="/store" />
        <Route element={<Pharmacy />} path="/pharmacy" />
        <Route element={<Documents />} path="/documents" />
        <Route element={<Delaers />} path="/dealers" />
        <Route element={<Medicine />} path="/medicine" />
        <Route element={<Error />} path="*" />
      </Routes>
    </>
  );
};

export default App;
