import React from 'react'
import HouseCard from '../commons/HouseCard'

export default function Featured() {
    return (
        <section className='mb-8 xl:mb-24'>
            <div className='container mx-auto' >
                <div className='flex items-end gap-2 mb-8' >
                    <div>
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold mb-4' >Featured Properties</h1>
                        <p>Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.</p>
                    </div>
                    <button className='px-4 py-2 text-nowrap rounded-lg bg-secondary text-white border border-transparent hover:bg-white hover:text-secondary hover:border-secondary transition' >
                        View All Properties
                    </button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3' >
                    <HouseCard />
                    <HouseCard />
                    <HouseCard />
                </div>
                <div>

                </div>
            </div>

        </section>
    )
}
