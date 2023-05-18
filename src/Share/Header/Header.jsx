import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";


import logo from "../../assets/logo.png";
import { useAuth } from "../../Provider/AuthProvider";
const Header = () => {
  const { user, logout } = useAuth();


  return (
    <div className="container px-8 mx-auto">
      <div className="navbar  rounded-b-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost p-1  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "btn btn-primary" : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/chefs"
                  className={({ isActive }) =>
                    isActive ? "btn btn-primary" : ""
                  }
                >
                  Chefs
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "btn btn-primary" : ""
                  }
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "btn btn-primary" : ""
                  }
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            to="/"
            className="btn btn-ghost p-1 normal-case text-xl flex items-center justify-center gap-3"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
              <img src={logo} alt="logo" className=" w-full h-full" />
            </div>
            <span className="hidden sm:inline-block">লবণ দরকার</span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn btn-primary" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn btn-primary" : ""
                }
                to="/chefs"
              >
                Chefs
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn btn-primary" : ""
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn btn-primary" : ""
                }
                to="/about"
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2 sm:gap-4">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <FaHeart />
                    <span className="badge badge-sm indicator-item">
                      
                    </span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg"> Items</span>

                    <div className="card-actions">
                      <NavLink
                        to="/favorite"
                        className="btn btn-primary btn-block"
                      >
                        View Favorites
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar relative group"
                >
                  <div className="  ">
                    <img
                      className="w-10 rounded-full"
                      src={
                        user?.photoURL ||
                        "https://bit.ly/40XidAA" /* if there is no image then show this placeholder image */
                      }
                    />
                  </div>
                  <h5 className="group-hover:block hidden w-fit whitespace-nowrap font-bold absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 p-2 text-white bg-slate-700 z-50 rounded">
                    {user?.displayName || (
                      <>
                        <span className="text-red-400">Anonymous</span>
                      </>
                    )}
                  </h5>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <NavLink
                      to="/me"
                      className={({ isActive }) =>
                        `${isActive ? "btn btn-primary" : ""} justify-between`
                      }
                    >
                      Profile
                      <span className="badge">New</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "btn btn-primary" : ""
                      }
                      to="/settings"
                    >
                      Settings
                    </NavLink>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={logout}
                      className="btn btn-warning  text-base-100"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={logout}
                className="btn btn-warning  hidden sm:block"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn btn-primary" : ""
                }
                to="/auth/login"
              >
                Login
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn btn-primary" : ""
                }
                to="/auth/register"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
