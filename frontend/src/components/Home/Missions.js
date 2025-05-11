import React from 'react'
import { BiHome } from 'react-icons/bi'

export default function Missions() {
    return (
        <div className="px-[30px] py-6 max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur-lg rounded-lg">

            <div className="bg-violet-700 hover:bg-violet-800 transition w-full rounded-lg flex flex-col gap-2 justify-center items-center text-white text-sm lg:text-[1rem] text-center p-4">
                <BiHome />
                <p>Find Your Dream Home</p>
            </div>

            <div className="bg-violet-700 hover:bg-violet-800 transition w-full rounded-lg flex flex-col gap-2 justify-center items-center text-white text-sm lg:text-[1rem] text-center p-4">
                <BiHome />
                <p>Unlock Property Value</p>
            </div>

            <div className="bg-violet-700 hover:bg-violet-800 transition w-full rounded-lg flex flex-col gap-2 justify-center items-center text-white text-sm lg:text-[1rem] text-center p-4">
                <BiHome />
                <p>Effortless Property Management</p>
            </div>

            <div className="bg-violet-700 hover:bg-violet-800 transition w-full rounded-lg flex flex-col gap-2 justify-center items-center text-white text-sm lg:text-[1rem] text-center p-4">
                <BiHome />
                <p>Smart Investments, Informed Decisions</p>
            </div>
        </div>
    )
}
