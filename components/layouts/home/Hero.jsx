import Image from "next/image";

import Button from "../../common/Button";

import * as IconImports from "/utils/iconImports";

export default function Hero() {
	return (
		<section className="flex justify-center bg-gradient-to-br from-secondary from-50% to-slate-400 bg-blend-multiply backdrop-blur-sm text-primary">
			<div
				id="hero"
				className="min-h-screen max-w-screen-xl p-10 grid md:grid-cols-2 items-center justify-items-center"
			>
				<Introduction />
				<HeroPhoto />
			</div>
		</section>
	);
}

function Introduction() {
	return (
		<div
			id="intro"
			className="grid grid-cols-1 justify-items-left order-last md:order-first"
		>
			<h1 className="pb-5">
				<span className="block text-4xl md:text-5xl">Hello! My name is</span>
				<span className="block text-8xl md:text-9xl font-bold pb-1">
					Caleb
					<br />
					Landis.
				</span>
				<span className="block text-3xl md:text-4xl">
					Welcome to my portfolio.
				</span>
			</h1>

			<IntroButtons />
		</div>
	);
}

function IntroButtons() {
	return (
		<div className="flex flex-nowrap pb-5">
			<Button
				link="/#about"
				text="Get to know me."
				// icon={IconImports.faArrowDown}
			/>
			<Button
				style="secondary"
				link="/contact/"
				text="Contact me."
				icon={IconImports.faRightFromBracket}
			/>
		</div>
	);
}

function HeroPhoto() {
	return (
		<>
			{/* Preloads multiple sizes. */}
			<div id="profilePic" className="flex justify-center items-center">
				{/* Small Screen: Image Shown, Medium+ Screen: Image Hidden */}
				<Image
					priority
					src="/images/profile.jpg"
					alt="Profile Photo"
					className="block md:hidden rounded-full border-8 border-primary shadow-lg shadow-gray-300"
					height={400}
					width={400}
				/>
				{/* Medium+ Screen: Image Shown, Small Screen: Image Hidden */}
				<Image
					priority
					src="/images/profile.jpg"
					alt="Profile Photo"
					className="hidden md:block rounded-full border-8 border-primary shadow-lg shadow-gray-300"
					height={500}
					width={500}
				/>
			</div>
		</>
	);
}
