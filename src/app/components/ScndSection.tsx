import Image from 'next/image'
import workImg from '../../../assets/Work Together Image.png'

export default function ScnSection(){
    return <div className="flex flex-col w-[1920px] h-[1588px] gap-[100px] pt-[140px] pb-[140px] pl-[220px] pr-[220px]">
        <div className="flex w-[1480px] h-[547px] gap-[60px]">
            <div className="flex flex-col w-[672px] h-[411px] gap-[60px]">
                <div className="flex flex-col w-[672px] h-[288px] gap-6">
                <div className="font-bold text-7xl leading-[87.14px]">Project Management</div>
                <div className="font-medium text-[18px] leading-[30px]">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</div>
                </div>
                <button className='rounded-md gap-[10px] py-5 px-10 w-[201px] h-[63px] bg-[#4F9CF9] text-white font-medium text-[18px] leading-[23px]'>Get Started -{'>'} </button>
            </div>
            <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
        </div>
        <div className="flex items-center w-[1480px] h-[661px] gap-[100px]">
            <div className="w-[710px] h-[661px]">
                <Image src={workImg} alt='image here' width={710}/>
            </div>
            <div className="flex flex-col w-[670px] h-[294px] gap-[60px]">
                <div className="flex flex-col w-[670px] h-[171px] gap-6">
                <div className="font-bold text-[72px] leading-[87.14px]">Work together</div>
                <div className="font-medium text-[18px] leading-[30px]">With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
</div>
                </div>
                <button className='rounded-md gap-[10px] py-5 px-10 w-[200px] h-[63px] bg-[#4F9CF9] text-white font-medium text-[18px] leading-[23px]'>Try it now -{'>'} </button>
            </div>
        </div>
    </div>
}