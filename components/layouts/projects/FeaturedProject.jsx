import PrimaryButton from "../../common/PrimaryButton";
import Badge from "../../common/Badge";

import * as IconImports from "/utils/iconImports";

// imgPath and flip are used for an old layout where each featured project also had an image
// I'd like to bring that layout back when I find good images, so I'm leaving them in for now.
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
			<div className="card border-slate-300 border-2 flex mb-10">
				{/* Card Layout */}
				<div className="flex md:flex-nowrap flex-wrap-reverse gap-6">
					{/* Project Description */}
					<ProjectDescription
						title={title}
						description={description}
						technologies={technologies}
						link={link}
					/>

					{/* Project Image for other Layout */}
					{/* <div
						className={clsx("flex justify-center items-center md:basis-1/2", {
							"order-first": flip === true,
						})}
					>
						<img
							src={imgPath}
							alt="Profile Photo"
							className="project-img rounded-lg border-2 border-slate-300 shadow-lg shadow-gray-300"
						></img>
					</div> */}
				</div>
			</div>
		</>
	);
}

function ProjectDescription({title, description, technologies, link}) {
	return (
		<div className="flex flex-col">
			<h1 className="pb-3 text-5xl font-semibold">{title ? title : "Title"}</h1>
			<h2 className="pb-3 text-2xl">
				{description ? description : "Project Description"}
			</h2>

			<TechnologiesContainer technologies={technologies} />

			{/* View on GitHub Button */}
			<PrimaryButton
				link={link}
				text="View on GitHub."
				icon={IconImports.faArrowUpRightFromSquare}
			/>

			{/* TODO: "View Site" button */}
		</div>
	);
}

function TechnologiesContainer({technologies}) {
	return (
		<div className="flex flex-col grow w-full mb-6 p-4 rounded-xl bg-slate-200 shadow-lg shadow-gray-300">
			<h1 className="text-xl font-semibold pb-2">Technologies Used</h1>
			<div className="flex flex-wrap">
				{technologies.map((technology) => (
					// map technology names
					<Badge
						image={technology.icon}
						key={technology.name}
						name={technology.name}
					/>
				))}
			</div>
		</div>
	);
}
