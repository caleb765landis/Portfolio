import Head from "next/head";
import {Toaster} from "react-hot-toast";
import Header from "./Header";
import Footer from "./Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata = {
	title: "Caleb Landis",
	description: "Personal Portfolio",
};

export default function RootLayout({children}) {
	return (
		<>
			<Head>
				<title>{"Caleb Landis - Personal Portfolio"}</title>
			</Head>
			{/* <div className="bg-gradient-to-br from-secondary from-30% to-blue-300"> */}
			<div className="bg-primary">
				<Toaster />
				<Header />
				<main>{children}</main>
				<Footer />
			</div>
		</>
	);
}
