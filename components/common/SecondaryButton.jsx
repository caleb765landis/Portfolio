import Link from "next/link";
import * as IconImports from "/utils/iconImports";

export default function SecondaryButton({
	link,
	text,
	icon,
	type,
	download = false,
	downloadPath = "/images/profile.jpg",
}) {
	let componentToRender = null;

	if (download) {
		componentToRender = (
			<DownloadButton
				link={link}
				text={text}
				downloadPath={downloadPath}
				icon={icon}
			/>
		);
	} else {
		componentToRender = <LinkButton link={link} text={text} icon={icon} />;
	}

	return (
		<>
			<div>
				<button
					type={type}
					className="button-secondary shadow-lg shadow-black-500"
				>
					{componentToRender}
				</button>
			</div>
		</>
	);
}

function DownloadButton({link, text, downloadPath, icon}) {
	return (
		<a href={link ? link : "/"} download={downloadPath}>
			<span>{text ? text : "Button"}</span>
			{icon ? (
				<IconImports.FontAwesomeIcon icon={icon} size="lg" className="pl-2" />
			) : null}
		</a>
	);
}

function LinkButton({link, text, icon}) {
	return (
		<Link href={link ? link : "/"}>
			<span>{text ? text : "Button"}</span>
			{icon ? (
				<IconImports.FontAwesomeIcon icon={icon} size="lg" className="pl-2" />
			) : null}
		</Link>
	);
}
