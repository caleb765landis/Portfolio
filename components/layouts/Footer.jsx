export default function Footer() {
    return <>
        {/* Footer Section */}
        <div className="p-10">
            {/* Content */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center">
                <div className="flex md:basis-1/3 justify-center pb-10">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-semibold pb-4">Contact</h1>
                        <h2 className="text-xl pb-2">See my resume. -&gt;</h2>
                        <h2 className="text-xl pb-2"><span className="font-semibold">Email:</span> caleb765landis@gmail.com</h2>
                        <div className="flex-row">
                            <span className="px-2">LinkedIn</span>
                            <span className="px-2">GitHub</span>
                            <span className="px-2">Email</span>
                        </div>
                    </div>
                </div>

                <div className="flex md:basis-1/3 justify-center pb-10">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-semibold pb-4">Inspiration</h1>
                        
                        <h2 className="text-xl">Andrew Nelson</h2>
                        <p className="text-xl font-thin pb-3">Theme and layouts.</p>
                        
                        <h2 className="text-xl">Amrin</h2>
                        <p className="text-xl font-thin pb-3">Structuring and layouts.</p>
                        
                        <h2 className="text-xl">Theodorus Clarence</h2>
                        <p className="text-xl font-thin pb-3">Future re-styling and colors.</p>
                        
                        <h2 className="text-xl">Enji Dev</h2>
                        <p className="text-xl font-thin pb-3">Future design features and future <span className="italic">Today I Learned</span> page.</p>
                    </div>
                </div>

                <div className="flex md:basis-1/3 justify-center pb-10">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-semibold pb-4">Source Code</h1>
                        <h2 className="text-xl pb-2">View on GitHub. -&gt;</h2>
                    </div>
                </div>
            </div>
        </div>
    </>
}