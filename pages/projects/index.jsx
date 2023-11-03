import Link from "next/link";

import FeaturedProjectsGrid from "../../components/common/FeaturedProjectsGrid";

// API routes for adding all projects using information from my GitHub
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
				</div>

				{/* Featured Project Cards */}
				<FeaturedProjectsGrid />
			</div>
		</>
	);
}
