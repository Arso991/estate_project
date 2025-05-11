import React from 'react'
import TestimonialCard from '../commons/TestimonialCard'

export default function Testimonial() {
    return (
        <section className='mb-8 xl:mb-24'>
            <div className='container mx-auto' >
                <div className='flex items-end gap-2 mb-8' >
                    <div>
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold mb-4' >What Our Clients Say</h1>
                        <p>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
                    </div>
                    <button className='px-4 py-2 text-nowrap rounded-lg bg-secondary text-white border border-transparent hover:bg-white hover:text-secondary hover:border-secondary transition' >
                        View All Testimonials
                    </button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3' >
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
            </div>
        </section>
    )
}
