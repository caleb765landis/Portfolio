import Link from "next/link";
import * as IconImports from "/utils/iconImports";
import {copyToClipboard} from "@/utils/copyToClipboard";
import SecondaryButton from "../elements/SecondaryButton";

export default function Footer() {
	return (
		<>
			{/* Footer Section */}
			<div className="p-10">
				{/* Content */}
				<div className="flex flex-col md:flex-row items-center md:items-start text-center">
					<div className="flex md:basis-1/3 justify-center pb-10">
						<div className="flex flex-col items-center">
							<h1 className="text-2xl font-semibold pb-4">Contact</h1>

							<h2 className="text-xl pb-2 hover:underline">
								<Link href="/resume/">
									See my resume.
									<IconImports.FontAwesomeIcon
										icon={IconImports.faFileLines}
										size="lg"
										className="pl-2"
									/>
								</Link>
							</h2>

							<h2 className="text-xl pb-5">
								<span className="font-semibold">Email:</span>{" "}
								caleb765landis@gmail.com
							</h2>

							{/* Icons */}
							<div className="">
								<a href="https://linkedin.com/in/caleb765landis/">
									<IconImports.FontAwesomeIcon
										icon={IconImports.faLinkedin}
										size="2x"
										className="px-5 hover:text-accentSecondary"
									/>
								</a>

								<a href="https://github.com/caleb765landis">
									<IconImports.FontAwesomeIcon
										icon={IconImports.faGithub}
										size="2x"
										className="px-5 hover:text-accentSecondary"
									/>
								</a>

								<a
									href="/"
									className="px-5"
									onClick={() => copyToClipboard("caleb765landis@gmail.com")}
								>
									<IconImports.FontAwesomeIcon
										icon={IconImports.faEnvelope}
										size="2x"
										className="hover:text-accentSecondary"
									/>
								</a>
							</div>
						</div>
					</div>

					{/* Inspiration Links */}
					{/* Don't need to wrap in Next.js Link tag because I really don't need to preload these websites. */}
					{/* Can also eventually make this section better by making each item a new component and mapping them from a content list. */}
					<div className="flex md:basis-1/3 justify-center pb-10">
						<div className="flex flex-col">
							<h1 className="text-2xl font-semibold pb-4">Inspiration</h1>

							<div className="hover:underline">
								<a href="https://www.andrewnelson.net/" target="_blank">
									<h2 className="text-xl">Andrew Nelson</h2>
									<p className="text-xl font-thin pb-3">Theme and layouts.</p>
								</a>
							</div>

							<div className="hover:underline">
								<a
									href="https://dev.to/coderamrin/how-to-build-a-portfolio-website-with-react-tailwind-css-fni"
									target="_blank"
								>
									<h2 className="text-xl">Amrin</h2>
									<p className="text-xl font-thin pb-3">
										Structuring and layouts.
									</p>
								</a>
							</div>

							<div className="hover:underline">
								<a href="https://theodorusclarence.com/" target="_blank">
									<h2 className="text-xl">Theodorus Clarence</h2>
									<p className="text-xl font-thin pb-3">
										Future re-styling and colors.
									</p>
								</a>
							</div>

							<div className="hover:underline">
								<a href="https://www.enji.dev/" target="_blank">
									<h2 className="text-xl">Enji Dev</h2>
									<p className="text-xl font-thin pb-3">
										Future design features and future{" "}
										<span className="italic">Today I Learned</span> page.
									</p>
								</a>
							</div>
						</div>
					</div>

					<div className="flex md:basis-1/3 justify-center pb-10">
						<div className="flex flex-col">
							<h1 className="text-2xl font-semibold pb-4">Source Code</h1>
							<h2 className="text-xl pb-2 hover:underline">
								<Link href="http://www.github.com/caleb765landis/Portfolio/">
									View on GitHub. -&gt;
								</Link>
							</h2>
						</div>
					</div>
				</div>

				<hr />

				<div className="flex justify-center p-5">
					<p>&copy; 2023 Caleb Landis</p>
				</div>
			</div>
		</>
	);
}
