import Link from "next/link";
import * as IconImports from "/utils/iconImports";
import FeaturedProjectsGrid from "../projects/FeaturedProjectsGrid";

export default function Projects() {
	return (
		<section className="bg-secondary text-accent flex justify-center">
			<div
				id="projects"
				className="min-h-screen max-w-screen-xl md:p-20 p-10 flex flex-wrap flex-col"
			>
				{/* Heading Section */}
				<div className="flex flex-col text-center pb-10 items-center">
					<h1 className="text-6xl font-semibold md:mt-8 p-5">
						Featured Projects
					</h1>
					<SeeAllProjects />
				</div>

				<FeaturedProjectsGrid />

				{/* Extra link to see all projects for easier navigation. */}
				<div className="flex justify-end pt-10">
					<SeeAllProjects />
				</div>
			</div>
		</section>
	);
}

function SeeAllProjects() {
	return (
		<>
			<div>
				<Link
					href="../../projects/#all"
					className="text-accentSecondary hover:text-accent"
				>
					See All Projects.
					<IconImports.FontAwesomeIcon
						icon={IconImports.faRightFromBracket}
						size="sm"
						className="pl-2"
					/>
				</Link>
			</div>
		</>
	);
}
