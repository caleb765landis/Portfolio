import Link from "next/link"

export default function SecondaryButton({ link, text, type, download=false, downloadPath="/images/profile.jpg" }) {
    return (
        <>
            <div>
                <button type={ type } className="button-secondary shadow-lg shadow-black-500">
                    {
                        download ? <a href={link ? link : "/"} download={downloadPath}>{text ? text : "Button"}</a> 
                            : <Link href={link ? link : "/"}>{text ? text : "Button"}</Link>
                    }
                </button>
            </div>
        </>
    )
}