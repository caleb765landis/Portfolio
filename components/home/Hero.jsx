import Image from "next/image";
import Link from "next/link";

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
                className="rounded-full border-8 border-primary"
                // height={288}
                // width={288}
                    height={400}
                    width={400}
                alt="Profile Photo"
            />
        </div>
    </section>
    );
}

function IntroButtons() {
    return (
        <div className="pb-5">
            <button type="button" className="button-primary">
                <Link href="/#about">Get to know me.</Link>
            </button>
            <button type="button" className="button-secondary">
                <Link href="/contact/">Contact me.</Link>
            </button>
        </div>
    )
}