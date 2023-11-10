// Default core packages
import {Html, Head, Main, NextScript} from "next/document";

/**
 * Load custom scripts in <Head>
 *
 * @returns <Html>
 */
export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="stylesheet" href="devicon.min.css"></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
