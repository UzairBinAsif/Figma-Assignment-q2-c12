import Image from "next/image"
import Logo from "../../../assets/Logo.png"

export default function Navbar(){
    return <div className="flex justify-between pt-[16px] pb-[16px] pl-[220px] pr-[220px] items-center w-[1920px] h-[92px] bg-[#043873] text-white">
        <div>
            <Image 
            src={Logo}
            alt="Logo Here"
            width={191}
            height={34}
            />
        </div>
        <div className="flex items-center gap-[60px] w-[737.5px]">
            <ul className="flex w-[549px] h-[23px] gap-[32px] font-medium text-[18px] items-center">
                <li className="gap-[10px]">products</li>
                <li className="gap-[10px]">Solutions</li>
                <li className="gap-[10px]">Resources</li>
                <li className="gap-[10px]">Pricing</li>
            </ul>
            <button className="rounded-lg w-[126px] h-[60px] gap-[24px] text-black font-medium text-[18px] bg-[#FFE492]">Login</button>

        </div>
    </div>
}