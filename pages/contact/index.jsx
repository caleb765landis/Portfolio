import ContactSection from "../../components/layouts/home/Contact"
export default function Contact() {
    return (
        <>
            <div id="contact" className="bg-accent flex items-center">
                <ContactSection onHome={false} />
            </div>
        </>
    );
}