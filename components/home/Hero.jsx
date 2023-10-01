import Link from "next/link";

export default function Hero() {
    return (
    <section id="hero" className="h-screen bg-secondary text-primary p-10 grid md:grid-cols-2">
        <div className="flex items-end md:justify-center md:items-center">
            <div className="flex flex-col">
                <p className="text-4xl">Howdy! My name is</p>
                <p className="text-8xl font-bold pb-1">Caleb Landis.</p>
                <p className="text-3xl pb-5 md:pb-0">Welcome to my portfolio.</p>
            </div>
        </div>
        <div className="md:flex md:justify-center md:items-center">
            <div className="flex md:flex-col">
                <button type="button" className="text-white bg-primary hover:bg-accent focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    <Link href="/#about">Get to know me.</Link>
                </button>
                <button type="button" className="text-primary bg-white border-2 border-primary hover:bg-accent focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    <Link href="/contact/">Contact me.</Link>
                </button>
            </div>
        </div>
    </section>
    );
}