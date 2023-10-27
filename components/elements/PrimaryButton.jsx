import Link from "next/link"

export default function PrimaryButton({ link, text }) {
    return (
        <>
            <div>
                <button type="button" className="button-primary">
                    <Link href={link ? link : "/"}>{text}</Link>
                </button>
            </div>
        </>
    )
}