import { copyToClipboard } from '@/utils/copyToClipboard';
import Link from 'next/link'

export default function Footer() {
    return <>
        {/* Footer Section */}
        <div className="p-10">
            {/* Content */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center">
                <div className="flex md:basis-1/3 justify-center pb-10">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-semibold pb-4">Contact</h1>
                        
                        <h2 className="text-xl pb-2 hover:underline"><Link href="/resume/">See my resume. -&gt;</Link></h2>
                        
                        <h2 className="text-xl pb-2"><span className="font-semibold">Email:</span> caleb765landis@gmail.com</h2>
                        
                        {/* Icons */}
                        <div className="flex-row">
                            <span className="px-2">LinkedIn</span>
                            <span className="px-2">GitHub</span>
                            <span className="px-2" onClick={() => copyToClipboard("caleb765landis@gmail.com")}>Email</span>
                        </div>
                    </div>
                </div>

                {/* Inspiration Links */}
                {/* Don't need to wrap in Next.js Link tag because I really don't need to preload these websites. */}
                {/* Can also eventually make this section better by making each item a new component and mapping them from a content list. */}
                <div className="flex md:basis-1/3 justify-center pb-10">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-semibold pb-4">Inspiration</h1>
                        
                        <div className="hover:underline">
                            <a href="https://www.andrewnelson.net/" target="_blank">
                                <h2 className="text-xl">Andrew Nelson</h2>
                                <p className="text-xl font-thin pb-3">Theme and layouts.</p>
                            </a>
                        </div>
                        
                        <div className="hover:underline">
                            <a href="https://dev.to/coderamrin/how-to-build-a-portfolio-website-with-react-tailwind-css-fni" target="_blank">
                                <h2 className="text-xl">Amrin</h2>
                                <p className="text-xl font-thin pb-3">Structuring and layouts.</p>
                            </a>
                        </div>
                        
                        <div className="hover:underline">
                            <a href="https://theodorusclarence.com/" target="_blank">
                                <h2 className="text-xl">Theodorus Clarence</h2>
                                <p className="text-xl font-thin pb-3">Future re-styling and colors.</p>
                            </a>
                        </div>
                        
                        <div className="hover:underline">
                            <a href="https://www.enji.dev/" target="_blank">
                                <h2 className="text-xl">Enji Dev</h2>
                                <p className="text-xl font-thin pb-3">Future design features and future <span className="italic">Today I Learned</span> page.</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex md:basis-1/3 justify-center pb-10">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-semibold pb-4">Source Code</h1>
                        <h2 className="text-xl pb-2 hover:underline"><Link href="http://www.github.com/caleb765landis/Portfolio/">View on GitHub. -&gt;</Link></h2>
                    </div>
                </div>
            </div>

            <hr/>

            <div className="flex justify-center p-5">
                <p>&copy; 2023 Caleb Landis</p>
            </div>
        </div>
    </>
}