import React from "react";
import Image from "../../assets/img/house-banner.png";
import Missions from "../Home/Missions"

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] pt-12 mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">Louer</span> votre maison de rêve avec nous.
          </h1>
          <p className="max-w-[480px] mb-8">
            Louer la maison parfaite pour des séjours inoubliables.
            Confort, style et commodité réunis en un seul endroit.
            Explorez notre collection de maisons de location soigneusement selectionnées.
            Réservez maintenant pour une expérience unique.
          </p>
        </div>

        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} alt="Maison" />
        </div>
      </div>

      <Missions />
    </section>
  );
};

export default Banner;
