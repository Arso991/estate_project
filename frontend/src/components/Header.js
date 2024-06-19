import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b flex">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="flex gap-5 items-center pe-8">
        <Link className="hover:text-violet-900 text-nowrap transition" to="/login">
          Connexion
        </Link>

        <Link
          className="bg-violet-700 hover:bg-violet-800 text-nowrap text-white px-4 py-3 rounded-lg transition"
          to="/register"
        >
          Inscription
        </Link>
      </div>
    </header>
  );
};

export default Header;
