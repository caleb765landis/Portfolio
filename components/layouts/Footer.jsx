export default function Footer() {
    return <>
        {/* Footer Section */}
        <div className="p-10">
            {/* Content */}
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
                <div className="flex md:basis-1/3">
                    <div className="flex flex-col items-center pb-10">
                        <h1 className="text-xl font-semibold pb-4">Contact</h1>
                        <div className="flex-row">
                            <span className="px-2">LinkedIn</span>
                            <span className="px-2">GitHub</span>
                            <span className="px-2">Email</span>
                        </div>
                    </div>
                </div>

                <div className="flex md:basis-1/3 pb-10">
                    <div className="flex flex-col">
                        <h1 className="text-xl font-semibold pb-4">Acknowledgments</h1>
                    </div>
                </div>

                <div className="flex pb-10">
                    <div className="flex flex-col">
                        <h1 className="text-xl font-semibold pb-4">Source Code</h1>
                    </div>
                </div>
            </div>
        </div>
    </>
}