import React from 'react'
import Search from './Search'
export default function Banner() {
    return (
        <section className='h-[200px] max-h-[220px] mb-8 xl:mb-24 relative' >
            <div className='bg-black w-full h-full opacity-50'></div>
            <div className='container mx-auto absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2' >
                <div className='text-center'>
                    <h1 className='text-lg lg:text-3xl font-semibold mb-2'>Find Your Dream Property</h1>
                    <p className='text-sm lg:text-lg' >Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey </p>
                </div>
            </div>
            <Search />
        </section>
    )
}
