import React, { useContext } from "react";
import { HouseContext } from "../HouseContext";
import House from "../House";
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }
  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 mt-48">
        Sorry, nothing found
      </div>
    );
  }
  //console.log(houses);

  return (
    <section className="my-32">
      <div className="container mx-auto">
        <div className='mb-8' >
          <div>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold mb-4' >Discover a World of Possibilities</h1>
            <p>Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home</p>
          </div>

        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
