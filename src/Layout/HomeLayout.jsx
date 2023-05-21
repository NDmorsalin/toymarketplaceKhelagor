import { Outlet } from "react-router-dom";
import Header from "../Share/Header/Header";
import Footer from "../Share/Footer/Footer";
import useChangeTitle from "../hooks/useChangeTitle";

const HomeLayout = () => {
  useChangeTitle();
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
