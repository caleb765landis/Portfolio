import Link from "next/link";
import Image from "next/image";

import settings from "/_settings.json";
import * as IconImports from "/utils/iconImports";
import FeaturedProjectsGrid from "../../components/layouts/projects/FeaturedProjectsGrid";
import AllProjectsGrid from "../../components/layouts/projects/AllProjectsGrid";

// API routes for adding all projects using information from my GitHub
// https://api.github.com/users/caleb765landis
// https://api.github.com/users/caleb765landis/repos

// for testing without making requests
import reposData from "/content/repos.json";
import userData from "/content/user.json";

export default function Projects({user, repos}) {
	return (
		<>
			<div>
				<FeaturedProjectsSection />
				<AllProjectsSection user={user} repos={repos} />
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

function AllProjectsSection({user, repos}) {
	return (
		<section id="all" className="bg-accent text-white flex justify-center">
			{/* Content */}
			<div className="max-w-screen-lg flex-wrap flex-col md:p-20 p-10">
				{/* Heading Section */}
				<div className="flex flex-col text-center pb-10 items-center">
					<div className="text-6xl font-semibold p-5">
						<h1>All Projects</h1>
					</div>
				</div>

				{/* Profile Section */}
				<GithHubProfileSection user={user} />

				{/* Featured Project Cards */}
				<AllProjectsGrid repos={repos} />
			</div>
		</section>
	);
}

function GithHubProfileSection({user}) {
	return (
		<div>
			<h1 className="font-bold text-3xl mb-5">GitHub Repositories</h1>
			<div className="border-b-2 border-white flex flex-row pb-10">
				<Image
					className="rounded-full mr-5"
					src={user[0].avatar_url}
					alt="Github Profile Photo"
					height={60}
					width={60}
				/>
				<span>
					<p className="text-xl font-bold">{user[0].name}</p>
					<a
						href={user[0].html_url}
						rel="noreferrer"
						target="_blank"
						className="font-extralight"
					>
						{user[0].html_url}
						<IconImports.FontAwesomeIcon
							icon={IconImports.faArrowUpRightFromSquare}
							size="xs"
							className="pl-2"
						/>
					</a>
				</span>
			</div>
		</div>
	);
}

export async function getServerSideProps({res}) {
	var user = null;
	var repos = null;

	if (settings.github.useAPI) {
		res.setHeader(
			"Cache-Control",
			"public, s-maxage=600, stale-while-revalidate=59"
		);

		const [gitUserRes, gitReposRes] = await Promise.all([
			fetch(`https://api.github.com/users/${settings.username.github}`),
			fetch(`https://api.github.com/users/${settings.username.github}/repos`),
		]);

		let [user, repos] = await Promise.all([
			gitUserRes.json(),
			gitReposRes.json(),
		]);
	} else {
		// assign variables to test json data
		user = userData;
		repos = reposData;
	}

	if (user.login) {
		user = [user].map(({login, name, avatar_url, html_url}) => ({
			login,
			name,
			avatar_url,
			html_url,
		}));
		console.log(user[0].avatar_url);
	}

	if (repos.length) {
		repos = repos.map(
			({
				name,
				fork,
				description,
				forks_count,
				html_url,
				language,
				watchers,
				default_branch,
				homepage,
				pushed_at,
				topics,
			}) => {
				const timestamp = Math.floor(new Date(pushed_at) / 1000);

				var languageIcon = "";
				if (language == "HTML") {
					languageIcon = "devicon-html5-plain";
				} else if (language == "C++") {
					languageIcon = "devicon-cplusplus-plain";
				} else if (language == "C#") {
					languageIcon = "devicon-csharp-plain";
				} else if (language == "PLSQL") {
					languageIcon = "devicon-oracle-plain";
				} else {
					languageIcon =
						"devicon-" + (language ? language.toLowerCase() : "") + "-plain";
				}

				languageIcon += " colored"; // leave uncommented if icons should be colored

				return {
					name,
					fork,
					description,
					forks_count,
					html_url,
					language,
					languageIcon,
					watchers,
					default_branch,
					homepage,
					timestamp,
					topics,
					pushed_at,
				};
			}
		);

		repos.sort((a, b) => b.timestamp - a.timestamp);

		repos = repos.filter((e) => {
			if (!(e.name == settings.username.github)) return e;
			return false;
		});
	}

	if (!repos || !user) {
		return {notFound: true};
	}

	return {props: {user, repos}};
}
