import Image from "next/image";
import AboutStyles from "../../../styles/components/layouts/home/About.module.css";

export default function About() {
	return (
		<>
			{/* About Me Section */}
			<div
				id="about"
				className="min-h-screen md:p-20 p-10 flex flex-wrap justify-center"
			>
				{/* Introduction Section */}
				<div className="content-center flex flex-col justify-center">
					<div className="flex justify-center text-6xl font-semibold pb-10">
						<h1>About Me</h1>
					</div>
					<div className="flex justify-center md:text-center text-xl pb-10">
						<p>
							I just recently graduated from IUPUI with a B.A. in Applied
							Computer Science and a minor in Game Design & Development. I've
							spent time as a lab instructor for the first two introductory
							computer science classes at IUPUI, and I've also graded for a
							fundamental web development course as well. I love programming and
							creating fun projects, and I really enjoy teaching others how to
							do the same. I am excited to continue growing my skills and begin
							my career as a developer!
						</p>
					</div>
				</div>{" "}
				{/* End Intorduction Section */}
				{/* Photo/Skills Grid Section */}
				<div>
					{/* Grid Layout */}
					<div className="grid md:grid-rows-2 md:grid-cols-2 md:gap-5 gap-8">
						{/* Portrait Photo */}
						<div id="aboutPic" className="row-span-2">
							<img
								src="/images/About_Photo.jpeg"
								alt="About Photo"
								className={AboutStyles.portraitPhoto}
							/>
						</div>

						{/* Skills Cards */}
						<div className="card shadow-lg shadow-gray-700">
							<h1 className="text-4xl font-semibold pb-4">
								Soft skills that matter.
							</h1>
							<p>
								Even though I've completed my degree, I still consider myself a
								student. I am always learning new concepts and technologies, and
								I can pick up new skills pretty quickly. I've worked on many
								projects individually and in group settings. When collaboriting
								with others, I lead by emphasizing strong teamwork, thoughtful
								organization, and effective communication strategies. I can
								solve complicated problems both in software and in the
								workplace.
							</p>
						</div>
						<div className="card shadow-lg shadow-gray-700">
							<h1 className="text-4xl font-semibold pb-4">
								Hard skills that execute.
							</h1>
							<p>
								I've explored all different aspects of software developement. I
								have implemented many data structures and algorithms with C++
								and Python, designed large-scale relational databases and
								queries with SQL, created a mobile application and API backend
								with Swift, programmed fun games with Unity and Godot, and
								engineered web applications with HTML, CSS, JavaScript, and PHP.
								I always aim to apply appropriate design patterns and best
								practices.
							</p>
						</div>
					</div>{" "}
					{/* End Grid Layout */}
				</div>{" "}
				{/* End Photo/Skills Section */}
			</div>{" "}
			{/* End About Me section */}
		</>
	);
}
