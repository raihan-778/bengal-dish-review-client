import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Navbar = () => {
  const { user, logout, setUser, loading, setLoading } =
    useContext(AuthContext);

  if (user) {
    console.log(user);
  }
  const handleSignOut = () => {
    logout()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const menuItems = (
    <li>
      {!user?.email ? (
        <>
          <Link to="/login">Login</Link>
        </>
      ) : (
        <>
          <button onClick={handleSignOut} className="btn btn-outline btn-info">
            LogOut
          </button>
          <li>
            <Link to="/myreviews">My Reviews</Link>
          </li>
          <li>
            <Link to="/addservice">Add Service</Link>
          </li>
        </>
      )}
    </li>
  );

  return (
    <div>
      <div className="navbar text-zinc-200 bg-cyan-900">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
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
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvx-49tTflkiDBtaUl8SQ2Y7BAST3TzkCGjA&usqp=CAU" />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
              </li>

              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bengle Dish</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
