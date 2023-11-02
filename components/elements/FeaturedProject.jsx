import Link from "next/link";
import clsx from "clsx";
import PrimaryButton from "./PrimaryButton";
import TechnologyPill from "./TechnologyPill";
import * as IconImports from "/utils/iconImports";

export default function FeaturedProject({
	title,
	description,
	technologies,
	link,
	imgPath,
	flip = false,
}) {
	return (
		<>
			{/* Featured Project Card */}
			<div className="card border-slate-300 border-2 flex w-full min-h-fit mb-10">
				{/* Grid Layout */}
				<div className="flex md:flex-nowrap flex-wrap-reverse items-center gap-6">
					{/* Project Description */}
					<div className="flex flex-col md:basis-1/2">
						<h1 className="pb-3 text-3xl font-semibold">
							{title ? title : "Title"}
						</h1>
						<h2 className="pb-3 text-2xl">
							{description ? description : "Project Description"}
						</h2>

						{/* Container for list of technologies */}
						<div className="flex flex-col mb-6 p-4 rounded-xl bg-slate-200 shadow-lg shadow-gray-300">
							<h1 className="text-xl font-semibold pb-2">Technologies Used</h1>
							<div className="flex flex-wrap">
								{technologies.map((technology) => (
									// map technology names
									<TechnologyPill
										image={technology.icon}
										key={technology.name}
										name={technology.name}
									/>
								))}
							</div>
						</div>

						{/* View on GitHub Button */}
						<PrimaryButton
							link={link}
							text="View on GitHub."
							icon={IconImports.faArrowUpRightFromSquare}
						/>

						{/* TODO: "View Site" button */}
					</div>

					{/* Project Image */}
					<div
						className={clsx("flex justify-center items-center md:basis-1/2", {
							"order-first": flip === true,
						})}
					>
						<img
							src={imgPath}
							alt="Profile Photo"
							className="project-img rounded-lg border-2 border-slate-300 shadow-lg shadow-gray-300"
						></img>
					</div>
				</div>
			</div>
		</>
	);
}
