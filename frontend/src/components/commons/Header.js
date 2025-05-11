import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="py-6 border-b flex">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/" className="px-1 hover:text-secondary border-transparent border-b hover:border-secondary transition" >Accueil</Link>
          <Link to="/" className="px-1 hover:text-secondary border-transparent border-b hover:border-secondary transition" >A propos</Link>
          <Link to={"/properties"} className="px-1 hover:text-secondary border-transparent border-b hover:border-secondary transition" >Appartements</Link>
          <Link className="px-1 hover:text-secondary border-transparent border-b hover:border-secondary transition" >Contacts</Link>
        </div>
        <div className="flex gap-5 items-center pe-8">
          <Link className="hover:text-secondary text-nowrap transition" to="/login">
            Connexion
          </Link>

          <Link
            className="bg-secondary hover:bg-white border border-transparent hover:border-secondary text-nowrap text-white hover:text-secondary px-4 py-3 rounded-lg transition"
            to="/register"
          >
            Inscription
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
