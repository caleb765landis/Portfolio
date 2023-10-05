import Head from "next/head"
import Header from "./Header";
import Footer from "./Footer";

export const metadata = {
    title: 'Caleb Landis',
    description: 'Personal Portfolio',
}

export default function Layout({children}) {
    return (
        <>
        <Head>
            <title>{"Caleb Landis - Personal Portfolio"}</title>
        </Head>
        <div className="bg-primary">
        {/* <div className="bg-gradient-to-br from-secondary from-30% to-blue-300"> */}
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
        </>
    )
}