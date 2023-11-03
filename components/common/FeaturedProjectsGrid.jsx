import FeaturedProject from "./FeaturedProject.jsx";
import content from "/content/featuredProjects.json";

export default function FeaturedProjectsGrid() {
	return (
		<>
			{/* Grid of Featured Project Cards */}
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
		</>
	);
}
