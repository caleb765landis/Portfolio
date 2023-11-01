import Link from 'next/link'
import { copyToClipboard } from '@/utils/copyToClipboard'
import PrimaryButton from "../../elements/PrimaryButton"
import SecondaryButton from "../../elements/SecondaryButton"

export default function Contact({ onHome=true }) {
    return (
    <>
        {/* Contact Section */}
        <div id="contact" className="bg-accent md:p-20 px-5 py-10 flex flex-wrap justify-center items-center md:grid-cols-2">
            {/* Heading Section */}
            <div className="flex flex-col md:basis-1/2 text-center p-5">
                <h1 className="text-6xl font-semibold pb-10">Contact Me!</h1>
                <p>
                    I am curently looking for a full-time Junior Developer position. Please feel free to reach out for an interview or just to connect!
                </p>
                <br/><hr/><br/>
                <p></p>
                <p className="text-xl pb-5 hover:underline"><Link href="/resume/">See my resume. -&gt;</Link></p>

                <div className="flex justify-center">
                    <span className="px-5">LinkedIn </span>
                    <span className="px-5">GithHub </span>
                        <span className="px-5" onClick={() => copyToClipboard("caleb765landis@gmail.com")}>Email</span>
                </div>
            </div>
            {/* Contact Form Section*/}
            <div className="flex justify-center items-center md:basis-1/2 grow p-5">
                {/* Form Container */}
                <div className="flex flex-col grow p-4 rounded-xl text-primary bg-slate-200 border-2 border-white shadow-lg shadow-gray-700">
                    <h1 className="text-3xl font-semibold pb-5">Send me a message.</h1>

                    {/* Use this form for sending actual email submissions. */}
                    {/* Currently has a limit of 50 form submissions each month, so I'll use the other form tag until website is ready to publish. */}
                    {/* <form className="text-xl" action="https://getform.io/f/f28cd6d6-be8e-4fa6-9910-39bf349fe147" method="POST"> */}

                    <form className="text-xl" action="mailto:caleb765landis@gmail.com" method="post" encType="text/plain">
                        {/* Full Name */}
                        <label className="block pb-2">
                            <span className="font-semibold">Full Name</span>
                                <input required type="text" name="Full Name" placeholder="John Doe" className="form-input block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-accentSecondary p-2 text-lg"></input>
                        </label>

                        {/* Email Address */}
                        <label className="block pb-2">
                            <span className="font-semibold">Email</span>
                                <input required type="email" name="Email" placeholder="john@example.com" className="form-input block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-accentSecondary p-2 text-lg"></input>
                        </label>

                        {/* Message */}
                        <label className="block pb-4">
                            <span className="font-semibold">Message</span>
                                <textarea required name="Message" placeholder="Message" className="form-textarea block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-accentSecondary p-2 text-lg"></textarea>
                        </label>

                        {/* <button type="submit">Submit</button> */}

                        <div className="flex flex-row">
                            <SecondaryButton text="Reset" type="reset" link={onHome ? "/#contact" : "/contact"}/>
                            <PrimaryButton text="Submit" type="submit" link={onHome ? "/#contact" : "/contact"}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    );
}