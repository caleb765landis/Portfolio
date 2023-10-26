import Image from 'next/image'

export default function About() {
    return (
        <>
            <div id="about" className="p-20 flex flex-wrap justify-center">
                <div className="flex justify-center text-5xl pb-10">About Me</div>
                <div className="flex justify-center text-center text-xl pb-10 px-10">This is a description about me. I'm looking for this to be a multi-line description. Therefore, I need this section to have a lot fo sentences. Hopefully this final sentence will move to the next line.</div>


                <div className="grid md:grid-rows-2 md:grid-cols-2 gap-5 m-3">
                    <div id="aboutPic" className="row-span-2">
                        <img
                            priority
                            src="/images/About_Photo.jpeg"
                            alt="About Photo"
                            className="fill-img"
                        />
                    </div>

                    <div className="card">
                        Soft Skills
                    </div>
                    <div className="card">
                        Hard Skills
                    </div>
                </div>
            </div>
        </>
    );
}