import Link from "next/link"

export default function PrimaryButton({ link, text, type, download=false, downloadPath="/images/profile.jpg" }) {
    return (
        <>
            <div>
                <button type={ type } className="button-primary shadow-lg shadow-gray-300">
                    {
                        download ? <a href={link ? link : "/"} download={downloadPath}>{text ? text : "Button"}</a>
                            : <Link href={link ? link : "/"}>{text ? text : "Button"}</Link>
                    }
                </button>
            </div>
        </>
    )
}