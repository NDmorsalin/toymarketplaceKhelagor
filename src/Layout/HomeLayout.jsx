import { Outlet } from "react-router-dom";
import Header from "../Share/Header/Header";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
