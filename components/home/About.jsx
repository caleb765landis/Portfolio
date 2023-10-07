export default function About() {
    return (
        <>
        <div id="about" className="h-screen p-20 items-center justify-items-center">
            {/* <div className="grid columns-1"> */}

            <h1 className="flex justify-center text-5xl pb-10">About Me</h1>
            {/* <div className="flex-1"> */}

            <div className="bg-green-500 grid md:grid-flow-col gap-5">
                <div className="card row-span-2">
                {/* <div className="card row-span-2 "> */}
                    Photo
                </div>
                {/* <div> */}
                    <div className="card">
                        About
                    </div>
                    <div className="card">
                        Soft Skills
                    </div>
                {/* </div> */}
            </div>
            
            {/* </div> */}
            
            {/* </div> */}
        </div>
        </>
    );
}