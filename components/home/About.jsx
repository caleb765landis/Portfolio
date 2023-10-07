import Image from 'next/image'

export default function About() {
    return (
        <>
            <div id="about" className="h-screen p-20 flex flex-col items-stretch justify-center">
                <div className="flex justify-center text-5xl pb-10">About Me</div>

                <div className="grid md:grid-flow-col gap-5 m-3 grow">
                    <div id="aboutPic" className="card row-span-2">
                        <div id="profilePic" className="flex justify-center items-center">
                            Profile
                            {/* <Image
                                priority
                                src="/images/profile.jpg"
                                className=""
                                // height={document.getElementById("aboutPic").getBoundingClientRect().height}
                                // width={document.getElementById("aboutPic").getBoundingClientRect().width}
                                height={400}
                                width={400}
                                alt="Profile Photo"
                            /> */}
                        </div>
                    </div>
                    <div className="card">
                        About
                    </div>
                    <div className="card">
                        Soft Skills
                    </div>
                </div>
            </div>
        </>
    );
}