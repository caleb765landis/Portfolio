import Link from "next/link"

export default function PrimaryButton({ link, text, type }) {
    return (
        <>
            <div>
                <button type={ type } className="button-primary shadow-lg shadow-gray-300">
                    <Link href={link ? link : "/"}>{text ? text : "Button"}</Link>
                </button>
            </div>
        </>
    )
}