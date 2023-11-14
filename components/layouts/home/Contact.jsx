import Link from "next/link";

import * as IconImports from "/utils/iconImports";
import settings from "/_settings.json";
import {copyToClipboard} from "@/utils/copyToClipboard";
import Button from "../../common/Button";

export default function Contact({onHome = true}) {
	return (
		<>
			{/* Contact Section */}
			<section className="bg-accent flex justify-center">
				<div
					id="contact"
					className="max-w-screen-xl md:p-20 px-5 py-10 flex flex-wrap justify-center items-center md:grid-cols-2"
				>
					<Heading />
					<ContactForm onHome={onHome} />
				</div>
			</section>
		</>
	);
}

function Heading() {
	return (
		<div className="flex flex-col md:basis-1/2 text-center p-5">
			<h1 className="text-6xl font-semibold pb-10">Contact Me!</h1>
			<p className="pb-5">
				I am curently looking for a full-time Junior Developer position. Please
				feel free to reach out for an interview or just to connect!
			</p>

			<div className="text-xl">
				<Button
					style="secondary"
					link="/resume/"
					text="See my resume."
					icon={IconImports.faFileLines}
				/>
			</div>

			<br />
			<hr />
			<br />

			{/* Icons */}
			<div className="flex justify-center">
				<a href={"https://linkedin.com/in/" + settings.username.linkedin + "/"}>
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
	);
}

function ContactForm({onHome}) {
	return (
		<div className="flex justify-center items-center md:basis-1/2 grow p-5">
			{/* Form Container */}
			<div className="flex flex-col grow p-4 rounded-xl text-primary bg-slate-200 border-2 border-white shadow-lg shadow-gray-700">
				<h1 className="text-3xl font-semibold pb-5">Send me a message.</h1>

				{settings.getform.useAPI ? (
					// Use this form for sending actual email submissions.
					// Currently has a limit of 50 form submissions each month, so I'll use the other form tag until website is ready to publish.
					<form
						id="contactForm"
						className="text-xl"
						action={settings.getform.link}
						method="POST"
					>
						<FormFields onHome={onHome} />
					</form>
				) : (
					// Use this form for testing purposes.
					<form
						id="contactForm"
						className="text-xl"
						action={"mailto:" + settings.email}
						method="post"
						encType="text/plain"
					>
						<FormFields onHome={onHome} />
					</form>
				)}
			</div>
		</div>
	);
}

function FormFields({onHome}) {
	return (
		<>
			{/* Full Name */}
			<label className="block pb-2">
				<span className="font-semibold">Full Name</span>
				<input
					required
					type="text"
					name="Full Name"
					placeholder="John Doe"
					className="form-input block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-accentSecondary p-2 text-lg"
				></input>
			</label>

			{/* Email Address */}
			<label className="block pb-2">
				<span className="font-semibold">Email</span>
				<input
					required
					type="email"
					name="Email"
					placeholder="john@example.com"
					className="form-input block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-accentSecondary p-2 text-lg"
				></input>
			</label>

			{/* Message */}
			<label className="block pb-4">
				<span className="font-semibold">Message</span>
				<textarea
					required
					name="Message"
					placeholder="Message"
					className="form-textarea block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-accentSecondary p-2 text-lg"
				></textarea>
			</label>

			{/* <button type="submit">Submit</button> */}

			<div className="flex flex-row">
				<Button
					style="secondary"
					text="Reset"
					type="reset"
					link={onHome ? "/#contact" : "/contact"}
				/>
				<Button
					text="Submit"
					type="submit"
					onSubmit={() => document.getElementById("contactForm").submit()}
					link={onHome ? "/#contact" : "/contact"}
				/>
			</div>
		</>
	);
}
