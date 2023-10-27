import Link from "next/link"

export default function SecondaryButton({ link, text }) {
    return (
        <>
            <div>
                <button type="button" className="button-secondary shadow-lg shadow-black-500">
                    <Link href={link ? link : "/"}>{text ? text : "Button"}</Link>
                </button>
            </div>
        </>
    )
}