import React from 'react'

export default function FaqCard() {
    return (
        <div className='rounded-xl border p-5 w-full max-w-[352px] mx-auto' >
            <div>
                <h2 className='text-lg lg:text-xl font-semibold' >How do I search for properties on Estatein?</h2>
                <p className='text-sm text-dark1 my-2' >Learn how to use our user-friendly search tools to find properties that match your criteria.</p>
                <button className='px-3 py-1 text-nowrap rounded-lg bg-secondary text-sm text-white border border-transparent hover:bg-white hover:text-secondary hover:border-secondary transition' >Read More</button>
            </div>
        </div>
    )
}
