import Header from "./Header";
import Footer from "./Footer";

export const metadata = {
    title: 'Caleb Landis',
    description: 'Personal Portfolio',
}

export default function Layout({children}) {
    return (
        <>
        <div className="bg-primary">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
        </>
    )
}