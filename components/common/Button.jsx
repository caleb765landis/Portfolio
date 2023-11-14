import Link from "next/link";
import * as IconImports from "/utils/iconImports";

export default function Button({
	style = "primary",
	link,
	text,
	icon,
	type,
	onSubmit = null,
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
				<button type={type} onSubmit={onSubmit} className={"button-" + style}>
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
