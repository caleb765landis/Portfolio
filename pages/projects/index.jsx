import Link from "next/link";

import FeaturedProjectsGrid from "../../components/layouts/projects/FeaturedProjectsGrid";
import AllProjectsGrid from "../../components/layouts/projects/AllProjectsGrid";

// API routes for adding all projects using information from my GitHub
// https://api.github.com/users/caleb765landis
// https://api.github.com/users/caleb765landis/repos

export default function Projects() {
	return (
		<>
			<div>
				<FeaturedProjectsSection />
				<AllProjectsSection />
			</div>
		</>
	);
}

function FeaturedProjectsSection() {
	return (
		<section className="bg-secondary text-accent flex justify-center">
			<div
				id="featured"
				className="min-h-screen max-w-screen-xl flex flex-wrap flex-col md:p-20 p-10"
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
		</section>
	);
}

function AllProjectsSection() {
	return (
		<section
			id="all"
			className="bg-accent text-white flex flex-wrap flex-col md:p-20 p-10"
		>
			{/* Heading Section */}
			<div className="flex flex-col text-center pb-10 items-center">
				<div className="text-6xl font-semibold p-5">
					<h1>All Projects</h1>
				</div>
			</div>

			{/* Featured Project Cards */}
			<AllProjectsGrid />
		</section>
	);
}
