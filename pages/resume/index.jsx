import Image from "next/image";
import SecondaryButton from "@/components/elements/SecondaryButton";
import * as IconImports from "/utils/iconImports";

export default function Resume() {
	return (
		<>
			<div className="bg-accent p-10 md:p-20 flex justify-center items-center flex-col">
				{/* <h1>Resume</h1> */}
				<h1 className="text-6xl font-semibold pb-10">Resume</h1>

				{/* Resume Image Content */}
				<div>
					{/* Download Button */}
					<div className="flex justify-center md:justify-end pb-2 md:pb-0">
						<SecondaryButton
							link="/resume"
							text="Download PDF."
							download={true}
							downloadPath="/files/CalebLandisResume.pdf"
							icon={IconImports.faFileArrowDown}
						/>
					</div>

					{/* Medium+ Screen: Image Shown, Small Screen: Image Hidden */}
					<Image
						priority
						src="/images/CalebLandisResume.jpg"
						alt="Resume"
						className="rounded-lg hidden md:block"
						height={1100}
						width={850}
					/>

					{/* Small Screen: Image Shown, Medium+ Screen: Image Hidden */}
					<Image
						priority
						src="/images/CalebLandisResume.jpg"
						alt="Resume"
						className="rounded-lg md:hidden block"
						height={550}
						width={425}
					/>
				</div>
			</div>
		</>
	);
}
