import React from 'react';
import image from '../../assets/img/houses/house1lg.png';
import { BiBed, BiBath, BiBuilding } from "react-icons/bi";

export default function HouseCard() {
    return (
        <div className="bg-white border p-5 rounded-md w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
            <img className="mb-4" src={image} alt="" />
            {/* <div className="mb-4 flex gap-x-2 text-sm">
                <div className="bg-green-500 rounded-full text-white px-3">Type</div>
                <div className="bg-violet-500 rounded-full text-white px-3">
                    Country
                </div>
            </div> */}
            <h2 className="text-lg font-semibold max-w-[260px]">Seaside Serenity Villa</h2>
            <p className=' line-clamp-2 text-dark1' >A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood</p>
            <div className="flex gap-x-4 my-2">
                <div className="flex items-center text-gray-600 gap-1">
                    <div className="text-[20px]">
                        {" "}
                        <BiBed />{" "}
                    </div>
                    <div> 4 </div>
                </div>

                <div className="flex items-center text-gray-600 gap-1">
                    <div className="text-[20px]">
                        {" "}
                        <BiBath />{" "}
                    </div>
                    <div> 3 </div>
                </div>

                <div className="flex items-center text-gray-600 gap-1">
                    <div className="text-[20px]">
                        {" "}
                        <BiBuilding />{" "}
                    </div>
                    <div> Villa </div>
                </div>
            </div>
            <div className="text-lg font-semibold text-secondary">550.000 F</div>
        </div>
    )
}
