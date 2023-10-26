import React, { useState } from "react";
import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    return (
        <>
        <header className="flex justify-between px-5 py-2 bg-primary sticky top-0 w-full z-10">
            <a href="/" className="logo text-2xl font-bold">
                Caleb Landis
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:block">
                <ul className="flex">
                    <li>
                        <Link href="/">About Me</Link>
                    </li>
                    <li>
                        <Link href="/projects/">Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact/">Contact</Link>
                    </li>
                    <li>
                        {/* <a href="#resume -link" target="_blank" rel="noreferrer">
                            Resume
                        </a> */}
                        <Link href="/resume/">Resume</Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile Nav */}
            <nav className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}>
                <ul className="flex flex-col">
                    <li>
                        <Link onClick={handleToggle} href="/">About Me</Link>
                    </li>
                    <li>
                        <Link onClick={handleToggle}href="/projects/">Projects</Link>
                    </li>
                    <li>
                        <Link onClick={handleToggle} href="/contact/">Contact</Link>
                    </li>
                    <li>
                        <Link onClick={handleToggle} href="/resume/">Resume</Link>
                    </li>
                    <li>
                        <Link onClick={handleToggle} href="/resume/">- Summary</Link>
                    </li>
                    <li>
                        <Link onClick={handleToggle} href="/resume/">- Skills & Tools</Link>
                    </li>
                    <li>
                        <Link onClick={handleToggle} href="/resume/">- Experience</Link>
                    </li>
                    <li>
                        <Link onClick={handleToggle} href="/resume/">- Education</Link>
                    </li>
                </ul>
            </nav>

            {/* Toggle button */}
            <button onClick={handleToggle} className="block md:hidden">
                {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
            </button>
        </header>
        </>
    );
}

