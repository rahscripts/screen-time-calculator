"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                    <div className="flex gap-0.5">
                        <div>hey, i am <Link target="_blank" href="https://www.rahscripts.online/">
                        <span className="font-bold text-pink-500 cursor-pointer hover:text-pink-600 transition-all duration-100">
                            mrahman!
                            </span>
                        </Link></div>
                        <Link href={"https://www.rahscripts.online/"}>
                            <div className="cursor-pointer">
                                <Image  src={"/profile.png"} alt="profile image" height={30} width={22}/>
                            </div>
                        </Link>
                    </div>
                <div> i build <span className="font-semibold">apps</span> and share what I <span className="font-semibold">learn</span> on <Link href={"https://x.com/rahscripts"}><span className="font-bold underline">X.</span></Link></div>
            </div>
            <div>

            </div>
        </div>
    )
}