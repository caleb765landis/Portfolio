import Link from "next/link";

export default function Hero() {
    return (
    <>
    <div id="hero" className="h-screen bg-secondary text-primary p-10 flex flex-wrap items-center">
        <div class="flex flex-col">
            <p className="text-3xl">Howdy! My name is</p>
            <p className="text-7xl font-bold pb-1">Caleb Landis.</p>
            <p className="text-2xl pb-1">Welcome to my portfolio.</p>
        </div>
        <div class="flex flex-col">
            <button type="button" class="text-white bg-primary hover:bg-accent focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                <Link href="/#about">Get to know me.</Link>
            </button>
                    <button type="button" class="text-white bg-primary hover:bg-accent focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                <Link href="/resume/">See my resume.</Link>
            </button>
                    <button type="button" class="text-white bg-primary hover:bg-accent focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                <Link href="/resume/">Contact me.</Link>
            </button>
        </div>
    </div>
    </>
    );
}