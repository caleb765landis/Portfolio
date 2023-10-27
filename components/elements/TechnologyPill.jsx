// TODO: add image to left of name

export default function TechnologyPill({ image, name }) {
    return (
        <>
            <div className="bg-secondary border-slate-300 border-2 rounded-full flex place-content-center text-sm mx-3 my-1 px-3 py-1">{name ? name : "Technology Pill"}</div>
        </>
    )
}