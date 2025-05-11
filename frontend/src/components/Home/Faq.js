import React from 'react'
import FaqCard from '../commons/FaqCard'

export default function Faq() {
    return (
        <section className='mb-8 xl:mb-24'>
            <div className='container mx-auto' >
                <div className='flex items-end gap-2 mb-8' >
                    <div>
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold mb-4' >Frequently Asked Questions</h1>
                        <p>Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</p>
                    </div>
                    <button className='px-4 py-2 text-nowrap rounded-lg bg-secondary text-white border border-transparent hover:bg-white hover:text-secondary hover:border-secondary transition' >
                        View All FAQ’s
                    </button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3' >
                    <FaqCard />
                    <FaqCard />
                    <FaqCard />
                </div>
            </div>
        </section>
    )
}
