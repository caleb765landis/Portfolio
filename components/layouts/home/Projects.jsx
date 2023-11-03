import Link from "next/link";
import * as IconImports from "/utils/iconImports";
import FeaturedProjectsGrid from "../../elements/FeaturedProjectsGrid";

export default function Projects() {
	return (
		<>
			{/* Featured Projects Section */}
			<div
				id="projects"
				className="min-h-screen bg-secondary text-accent md:p-20 p-10 flex flex-wrap flex-col"
			>
				{/* Heading Section */}
				<div className="flex flex-col text-center pb-10 items-center">
					<div className="text-6xl font-semibold mt-8 p-5">
						<h1>Featured Projects</h1>
					</div>
					<SeeAllProjects />
				</div>

				{/* Featured Project Cards */}
				<FeaturedProjectsGrid />

				<div className="flex justify-end">
					<SeeAllProjects />
				</div>
			</div>
		</>
	);
}

function SeeAllProjects() {
	return (
		<>
			<div>
				<Link
					href="../../projects/"
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
