import Link from "next/link"
import PrimaryButton from "./PrimaryButton"
import TechnologyPill from "./TechnologyPill"

export default function FeaturedProject({ title, description, tecnologies, link}) {
    return (
        <>
            <div className="md:grid-cols-2 gap-5 card border-slate-300 border-2 flex w-full min-h-fit mb-10">
                <div className="flex flex-col basis-1/2">
                    <h1 className="pb-2 text-3xl font-semibold">{title ? title : "Title"}</h1>
                    <h2 className="pb-2 text-2xl">{description ? description : "Project Description"}</h2>
                    
                    <div className="flex flex-col mb-4 p-4 rounded-xl bg-slate-200">
                        <h1 className="text-xl font-semibold pb-2">Technologies Used</h1>
                        <div className="flex flex-wrap">
                            <TechnologyPill name="Technology 1 Pill" />
                            <TechnologyPill name="Technology 2" />
                            <TechnologyPill name="Technology 3" />
                            <TechnologyPill name="Technology 4" />
                            <TechnologyPill name="Technology 5" />
                            <TechnologyPill name="Technology 6 Pill" />
                            <TechnologyPill name="Technology 7 Pill" />
                            <TechnologyPill name="Technology 8 Pill" />
                        </div>
                    </div>

                    <PrimaryButton link={link} text="View on Github" />


                </div>

                <div className="bg-accent flex grow basis-1/2">
                    Image
                </div>
            </div>
        </>
    )
}