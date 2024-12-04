import Image from "next/image"
import apple from "../../../assets/apple.png"
import mic from "../../../assets/Microsoft.png"
import gog from "../../../assets/google.png"
import slc from "../../../assets/slack.png"
import fLogo from "../../../assets/footerLogo.png"

export default function Footer(){
    return(
        <footer>
            <div className="flex flex-col justify-between w-[1920px] h-[538px] pt-[140px] pb-[140px] pl-[220px] pr-[220px] gap-[100px]">
                <h1 className="w-[1482px] h-[87px] font-bold text-[72px] leading-[87.14px] text-center">Our sponsors</h1>
                <div className="flex justify-between w-[1482px] h-[71px]">
                    <div className="gap-1"><Image src={apple} alt="image here" width={55.47}/></div>
                    <div className="gap-1"><Image src={mic} alt="image here" width={287}/></div>
                    <div className="gap-1"><Image src={slc} alt="image here" width={280}/></div>
                    <div className="gap-1"><Image src={gog} alt="image here" width={211}/></div>
                </div> 
            </div>
            <div className="w-[1920px] h-[461px] gap-[200px] pt-[140px] pb-[32px] pr-[220px] pl-[220px] bg-[#043873]">
                <div className="flex flex-col justify-between w-[1480px] h-[289px] gap-[100px]]">
                    <div className="flex w-[1480px] h-[169px] gap-[100px]">
                        <div className="flex flex-col w-[295px] gap-[15px]">
                            <div className="w-[191px] h-[64px]">
                            <Image src={fLogo} alt="image here" width={191} />
                            </div>
                            <div className="w-[240px] h-[120px] font-normal text-[18px] text-white leading-[30px]">whitepace was created for the new ways we live and work. We make a better workspace around the world</div>
                        </div>
                        <div className="flex flex-col w-[295px] h-[127px] gap-[15px] text-white font-normal text-[16px] leading-5">
                            <div className="font-bold text-[18px] leading-[21.75px]">Product</div>
                            <div className="text-[#FFE492]">Overview</div>
                            <div>Pricing</div>
                            <div>Customer Stories</div>
                        </div>
                        <div className="flex flex-col w-[295px] h-[130px] gap-[16px] text-white font-normal text-[16px] leading-5">
                            <div className="font-bold text-[18px] leading-[21.75px]">Resources</div>
                            <div>Blog</div>
                            <div>Guides & tutorials</div>
                            <div>Help center</div>
                        </div>
                        <div className="flex flex-col w-[295px] h-[130px] gap-[16px] text-white font-normal text-[16px] leading-5">
                            <div className="font-bold text-[18px] leading-[21.75px]">Company</div>
                            <div>About us</div>
                            <div>Careers</div>
                            <div>Media kit</div>
                        </div>
                    </div>
                    <div className="w-[1480px] h-[20px] text-center border-t-[1px] border-[#2E4E73] font-normal text-[16px] leading-5 text-[#FFFFFF]">©2021 Whitepace LLC.</div>
                </div>
            </div>
        </footer>
    )
}