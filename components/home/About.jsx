import Image from 'next/image'

export default function About() {
    return (
        <>
            {/* <div id="about" className="h-screen p-20 flex flex-col items-stretch justify-center"> */}
            <div id="about" className="p-20 flex flex-col justify-center">
                <div className="flex justify-center text-5xl pb-10">About Me</div>
                <div className="flex justify-center text-center text-xl pb-10 px-10">This is a description about me. I'm looking for this to be a multi-line description. Therefore, I need this section to have a lot fo sentences. Hopefully this final sentence will move to the next line.</div>
                {/* <SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="With a diverse skill set that includes UX design, UI design, full stack development, operational architecture, systems design, photography, and branding, I am a well-rounded digital professional."
				/> */}


                <div className="grid md:grid-cols-2 gap-5 m-3">
                    {/* <div id="" className="card row-span-2"> */}
                    {/* <div id="" className="row-span-2 flex justify-end bg-red-800"> */}
                        {/* <div id="aboutPic" className="fill-img"> */}
                            <img
                                priority
                                src="/images/About_Photo.jpeg"
                                alt="About Photo"
                                // className = "flex"
                                className="fill-img row-span-2"
                                // height={document.getElementById("aboutPic").getBoundingClientRect().height}
                                // width={document.getElementById("aboutPic").getBoundingClientRect().width}
                                // height={400}
                                // width={300}
                                // fill
                                // sizes="(max-width: 100px) 10-vw, (max-height: 100px) 10-vh"
                            />
                        {/* </div> */}
                    {/* </div> */}
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