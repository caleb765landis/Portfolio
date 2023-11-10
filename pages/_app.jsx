import "../styles/global.css";
import "../node_modules/devicon/devicon.min.css";
import RootLayout from "../components/layouts/RootLayout";

export default function App({Component, pageProps}) {
	return (
		<>
			<RootLayout>
				<Component {...pageProps} />
			</RootLayout>
		</>
	);
}
