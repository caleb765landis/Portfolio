import Link from "next/link";
import FeaturedProject from "../../elements/FeaturedProject.jsx";
import * as IconImports from "/utils/iconImports";
import content from "/content/featuredProjects.json";

// https://api.github.com/users/caleb765landis
// https://api.github.com/users/caleb765landis/repos

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
				</div>

				{/* TODO: Add key and names */}
				{/* Featured Project Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
					{content.map((data, index) => {
						const {title, description, technologies, repoLink, images, flip} =
							data;

						return (
							<FeaturedProject
								title={title}
								description={description}
								technologies={technologies}
								link={repoLink}
								imgPath={images.medium.imgPath}
								flip={flip}
							/>
						);
					})}
				</div>

				<div className="flex flex-col items-end">
					<Link
						href="../../projects/"
						className="text-accentSecondary hover:text-accent"
					>
						See All Projects.{" "}
						<IconImports.FontAwesomeIcon
							icon={IconImports.faRightFromBracket}
							size="sm"
							className="pl-2"
						/>
					</Link>
				</div>
			</div>
		</>
	);
}
