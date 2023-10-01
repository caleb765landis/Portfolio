import Link from "next/link";

export default function Hero() {
    return (
    <>
    <div id="hero" className="h-screen bg-accent text-accent text-center flex flex-col items-center justify-center">
        <div class="pb-4">
            <p className="text-3xl">Howdy! My name is</p>
            <p className="text-7xl font-bold pb-1">Caleb Landis.</p>
            <p className="text-2xl pb-1">Welcome to my portfolio.</p>
        </div>
        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            <Link href="/#about">Get to know me.</Link>
        </button>
    </div>
    </>
    );
}