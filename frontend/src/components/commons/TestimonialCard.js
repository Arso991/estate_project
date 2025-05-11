import React from 'react'
import { BiStar } from 'react-icons/bi'
import image from '../../assets/img/agents/agent1.png'

export default function TestimonialCard() {
    return (
        <div className='rounded-xl border p-5 w-full max-w-[352px] mx-auto' >
            <div>
                <div className='text-yellow-500 flex items-center gap-1' >
                    <BiStar />
                    <BiStar />
                    <BiStar />
                    <BiStar />
                </div>
                <div className='my-4' >
                    <h2 className='text-lg lg:text-xl font-semibold mb-2' >Exceptional Service!</h2>
                    <p className='text-sm text-dark1' >Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!</p>
                </div>
                <div className='flex gap-2' >
                    <div className='h-10 w-10 overflow-hidden' >
                        <img src={image} alt="Customer" className='w-full h-full object-cover' />
                    </div>
                    <div className='text-sm'>
                        <p className='font-semibold' >Wade Warren</p>
                        <p className='text-dark1' >USA, California</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
