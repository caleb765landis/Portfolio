import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../../elements/PrimaryButton"
import SecondaryButton from "../../elements/SecondaryButton"

export default function Hero() {
    return (
    <section id="hero" className="h-screen bg-gradient-to-br from-secondary from-50% to-slate-400 bg-blend-multiply backdrop-blur-sm text-primary p-10 grid md:grid-cols-2 items-center justify-items-center">
        <div id="intro" className="grid grid-cols-1 justify-items-left order-last md:order-first">
            <div className="pb-5"> 
                <span className="text-4xl md:text-5xl">Hello! My name is</span><br/>
                <span className="text-8xl md:text-9xl font-bold pb-1">Caleb<br/>Landis.</span><br/>
                <span className="text-3xl md:text-4xl">Welcome to my portfolio.</span>
            </div>
                
            <IntroButtons />
        </div>
        
        <div id="profilePic" className="flex justify-center items-center">
            <Image
                priority
                src="/images/profile.jpg"
                alt="Profile Photo"
                className="rounded-full border-8 border-primary shadow-lg shadow-gray-300"
                // height={288}
                // width={288}
                height={400}
                width={400}
            />
        </div>
    </section>
    );
}

function IntroButtons() {
    return (
        <div className="flex flex-nowrap pb-5">
            <PrimaryButton link="/#about" text="Get to know me."/>
            <SecondaryButton link="/contact/" text="Contact me." />
        </div>
    )
}