import '../styles/global.css'
import RootLayout from "../components/layouts/RootLayout";

export default function App({ Component, pageProps }) {
    return (
    <>
    <RootLayout>
        <Component {...pageProps} />
    </RootLayout>
    </>
    );
}