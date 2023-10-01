import Link from "next/link";

export default function Hero() {
    return (
    <>
    <div id="hero" className="h-screen bg-accent text-accent text-center flex flex-col justify-center content-center">
        <span className="text-3xl">Howdy! My name is</span>
        <span className="text-7xl font-bold pb-1">Caleb Landis.</span>
        <span className="text-2xl pb-1">Welcome to my portfolio.</span>

        <button className="">
            <Link href="/#about">Get to know me.</Link>
        </button>
    </div>
    </>
    );
}