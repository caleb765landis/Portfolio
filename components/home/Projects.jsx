import Link from "next/link"

export default function Projects() {
    return (
        <>
            {/* Featured Projects Section */}
            <div id="projects" className="min-h-screen bg-secondary text-accent md:p-20 p-10 flex flex-wrap flex-col items-center">
                {/* Heading Section */}
                <div className="flex flex-col text-center pb-10">
                    <div className="text-6xl font-semibold mt-8 p-5"><h1>Featured Projects</h1></div>
                    <div><Link href="../../projects/" className="text-accentSecondary hover:text-accent">See All Projects -&gt;</Link></div>
                </div>

                {/* Project Cards */}
                <div className="md:grid-cols-2 gap-5 card border-slate-300 border-2 flex w-full min-h-fit mb-10">
                    <div className="flex flex-col basis-1/2">
                        <h1 className="pb-2 text-3xl font-semibold">Project 1 Title</h1>
                        <h2 className="pb-2 text-2xl">Project Description</h2>
                        <div className="flex flex-wrap">
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 1 Pill</div>
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 2 </div>
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 3 </div>
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 4 </div>
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 5 </div>
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 6 Pill</div>
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 7 Pill</div>
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 8 Pill</div>
                        </div>
                    </div>
                    <div className="bg-accent flex grow basis-1/2">
                        Image
                    </div>
                </div>

                <div className="md:grid-cols-2 gap-5 card border-slate-300 border-2 flex w-full min-h-fit mb-10">
                    <div className="flex flex-col basis-1/2">
                        <h1 className="pb-2 text-3xl font-semibold">Project 1 Title</h1>
                        <h2 className="pb-2 text-2xl">Project Description</h2>
                        <div className="flex flex-wrap">
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 1 Pill</div>
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 2 </div>
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 3 </div>
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 4 </div>
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 5 </div>
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 6 Pill</div>
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 7 Pill</div>
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 8 Pill</div>
                        </div>
                    </div>
                    <div className="bg-accent flex grow basis-1/2">
                        Image
                    </div>
                </div>

                <div className="md:grid-cols-2 gap-5 card border-slate-300 border-2 flex w-full min-h-fit mb-10">
                    <div className="flex flex-col basis-1/2">
                        <h1 className="pb-2 text-3xl font-semibold">Project 1 Title</h1>
                        <h2 className="pb-2 text-2xl">Project Description</h2>
                        <div className="flex flex-wrap">
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 1 Pill</div>
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 2 </div>
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 3 </div>
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 4 </div>
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 5 </div>
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 6 Pill</div>
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 7 Pill</div>
                            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center mx-3 my-1 px-3 py-1">Technology 8 Pill</div>
                        </div>
                    </div>
                    <div className="bg-accent flex grow basis-1/2">
                        Image
                    </div>
                </div>
            </div>
        </>
    );
}