import Link from "next/link"
import PrimaryButton from "./PrimaryButton"
import TechnologyPill from "./TechnologyPill"

// TODO: Add ability to flip image and project info
export default function FeaturedProject({ title, description, technologies, link}) {
    return (
        <>
            <div className="md:grid-cols-2 gap-5 card border-slate-300 border-2 flex w-full min-h-fit mb-10">
                {/* Project Description */}
                <div className="flex flex-col basis-1/2">
                    <h1 className="pb-2 text-3xl font-semibold">{title ? title : "Title"}</h1>
                    <h2 className="pb-2 text-2xl">{description ? description : "Project Description"}</h2>
                    
                    {/* Container for list of technologies */}
                    <div className="flex flex-col mb-4 p-4 rounded-xl bg-slate-200">
                        <h1 className="text-xl font-semibold pb-2">Technologies Used</h1>
                        <div className="flex flex-wrap">
                            {technologies.map((technology) => (
                                // map technology names
                                <TechnologyPill image={technology[0]} name={technology[1]} />
                            ))}
                        </div>
                    </div>

                    {/* TODO: Add GitHub Icon */}
                    {/* View on GitHub Button */}
                    <PrimaryButton link={link} text="View on GitHub" />
                    {/* TODO: "View Site" button */}

                </div>

                {/* TODO: Make sure image has fixed dimensions */}
                <div className="bg-accent justify-center items-center text-white flex grow basis-1/2">
                    Image
                </div>
            </div>
        </>
    )
}