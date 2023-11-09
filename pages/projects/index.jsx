import Link from "next/link";
import Image from "next/image";

import settings from "/_settings.json";
import * as IconImports from "/utils/iconImports";
import FeaturedProjectsGrid from "../../components/layouts/projects/FeaturedProjectsGrid";
import AllProjectsGrid from "../../components/layouts/projects/AllProjectsGrid";

// API routes for adding all projects using information from my GitHub
// https://api.github.com/users/caleb765landis
// https://api.github.com/users/caleb765landis/repos

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
			<div className="max-w-screen-xl flex-wrap flex-col md:p-20 p-10">
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
		<div className="flex flex-row mb-10">
			<Image
				className="rounded-full"
				src={user[0].avatar_url}
				alt="Github Profile Photo"
				height={60}
				width={60}
			/>
			<span class="pl-5">
				<p className="text-xl font-bold">{user[0].name}</p>
				<a
					href={user[0].html_url}
					rel="noreferrer"
					target="_blank"
					className="font-thin"
				>
					{user[0].html_url}
					<IconImports.FontAwesomeIcon
						icon={IconImports.faArrowUpRightFromSquare}
						size="sm"
						className="pl-2"
					/>
				</a>
			</span>
		</div>
	);
}

export async function getServerSideProps({res}) {
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

	if (user.login) {
		user = [user].map(({login, name, avatar_url, html_url}) => ({
			login,
			name,
			avatar_url,
			html_url,
		}));
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
				return {
					name,
					fork,
					description,
					forks_count,
					html_url,
					language,
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

		repos = repos.filter((e, i) => {
			if (i < 8 && !e.topics.includes("github-config")) return e;
			return false;
		});
	}

	if (!repos || !user) {
		return {notFound: true};
	}

	console.log(user);
	console.log(repos);

	return {props: {user, repos}};
}
