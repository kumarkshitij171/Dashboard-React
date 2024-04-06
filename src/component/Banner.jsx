import React from 'react'
import { IoTimeSharp } from "react-icons/io5";

const Banner = () => {
    return (
        <div className='bg-[#F9DEB3] py-2 px-5 flex gap-3 items-center flex-wrap' >
            <div className="limited-time-offer text-lg flex items-center gap-1 shadow-md rounded-2xl bg-[#F6C676] px-2 py-1">
                <IoTimeSharp />
                <p className='font-semibold'>One-Time Offer</p>
            </div>

            <div className="font-bold">
                Your AI Storyboard Bundle Discount expires in
                <span className='bg-[#FBE9CB] text-pink-400 py-1 px-2 rounded-md'>5:01</span>
            </div>

            <button className='bg-[#f38c98] px-3 py-1 rounded-md hover:bg-[#fd6b7c] font-bold'>Claim Discount</button>
        </div>
    )
}

export default Banner
