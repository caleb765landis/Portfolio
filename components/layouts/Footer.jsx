import Link from "next/link";

import settings from "/_settings.json";
import {copyToClipboard} from "@/utils/copyToClipboard";

import * as IconImports from "/utils/iconImports";

export default function Footer() {
	return (
		<>
			{/* Footer Section */}
			<footer className="p-10">
				{/* Content */}
				<div className="flex justify-center items-center">
					<div className="max-w-screen-xl flex flex-col md:flex-row items-center md:items-start text-center">
						<Contact />
						<Inspiration />
						<SourceCode />
					</div>
				</div>

				<hr />

				<div className="flex justify-center p-5">
					<p>&copy; 2023 Caleb Landis</p>
				</div>
			</footer>
		</>
	);
}

function Contact() {
	return (
		<div className="flex md:basis-1/3 justify-center pb-10">
			<div className="flex flex-col items-center">
				<h1 className="text-2xl font-semibold pb-4">Contact</h1>

				<h2 className="text-xl pb-2 hover:underline">
					<Link href="/resume/">
						See my resume.
						<IconImports.FontAwesomeIcon
							icon={IconImports.faFileLines}
							className="pl-2"
						/>
					</Link>
				</h2>

				<h2 className="text-xl pb-5 font-extralight">
					<span className="font-semibold">Email:</span> caleb765landis@gmail.com
				</h2>

				{/* Icons */}
				<div className="flex flex-row">
					<a
						href={"https://linkedin.com/in/" + settings.username.linkedin + "/"}
					>
						<IconImports.FontAwesomeIcon
							icon={IconImports.faLinkedin}
							size="2x"
							className="px-5 hover:text-accentSecondary"
						/>
					</a>

					<a href={"https://github.com/" + settings.username.github}>
						<IconImports.FontAwesomeIcon
							icon={IconImports.faGithub}
							size="2x"
							className="px-5 hover:text-accentSecondary"
						/>
					</a>

					<div className="px-5" onClick={() => copyToClipboard(settings.email)}>
						<IconImports.FontAwesomeIcon
							icon={IconImports.faEnvelope}
							size="2x"
							className="hover:text-accentSecondary"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

function Inspiration() {
	return (
		<>
			{/* Don't need to wrap in Next.js Link tag because I really don't need to preload these websites. */}
			{/* Can also eventually make this section better by making each item a new component and mapping them from a content list. */}
			<div className="flex md:basis-1/3 justify-center pb-10">
				<div className="flex flex-col">
					<h1 className="text-2xl font-semibold pb-4">Inspiration</h1>

					<div className="hover:underline">
						<a href="https://www.andrewnelson.net/" target="_blank">
							<h2 className="text-xl">Andrew Nelson</h2>
							<p className="text-xl font-extralight pb-3">Theme and layouts.</p>
						</a>
					</div>

					<div className="hover:underline">
						<a
							href="https://dev.to/coderamrin/how-to-build-a-portfolio-website-with-react-tailwind-css-fni"
							target="_blank"
						>
							<h2 className="text-xl">Amrin</h2>
							<p className="text-xl font-extralight pb-3">
								Structuring and layouts.
							</p>
						</a>
					</div>

					<div className="hover:underline">
						<a href="https://theodorusclarence.com/" target="_blank">
							<h2 className="text-xl">Theodorus Clarence</h2>
							<p className="text-xl font-extralight pb-3">
								Future re-styling and colors.
							</p>
						</a>
					</div>

					<div className="hover:underline">
						<a href="https://www.enji.dev/" target="_blank">
							<h2 className="text-xl">Enji Kusnadi</h2>
							<p className="text-xl font-extralight pb-3">
								Future features like{" "}
								<span className="italic">Today I Learned</span> page.
							</p>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

function SourceCode() {
	return (
		<div className="flex md:basis-1/3 justify-center pb-10">
			<div className="flex flex-col">
				<h1 className="text-2xl font-semibold pb-4">Source Code</h1>
				<h2 className="text-xl pb-2 hover:underline">
					<Link href={settings.sourceRepo}>
						View on GitHub.
						<IconImports.FontAwesomeIcon
							icon={IconImports.faArrowUpRightFromSquare}
							size="sm"
							className="pl-2"
						/>
					</Link>
				</h2>
				<p className="text-xl font-extralight pb-2">
					Built with Next.js and Tailwind CSS. Deployed on Vercel. Coded in
					Visual Studio Code.
				</p>
			</div>
		</div>
	);
}
