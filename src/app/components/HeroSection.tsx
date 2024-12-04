import React from 'react'

const HeroSection = () => {
    return <div className='flex w-[1920px] h-[829px] pt-[140px] pb-[140px] pl-[220px] pr-[220px] bg-[#043873]'>
        <div className='flex flex-col w-[656px] h-[351px] gap-[60px]'>
            <div className='flex flex-col gap-6 w-[656px] h-[238px]'>
            <div className='font-bold text-[64px] text-[#ffffff] leading-[77.45px]'>Get More Done with whitepace</div>
            <div className='font-normal text-[18px] text-[#ffffff] leading-[30px]'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</div>
            </div>
            <button className='rounded-lg gap-[10px] p-5 w-[245px] h-[63px] bg-[#4F9CF9] text-white font-medium text-[18px] leading-[23px]'>Try Whitepace free -{'>'} </button>
        </div>
        <div className='w-[824px] h-[549px] bg-[#C4DEFD] gap-1'></div>
    </div>
}

export default HeroSection