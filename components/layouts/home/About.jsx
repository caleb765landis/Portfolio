import Image from 'next/image'
import AboutStyles from "../../../styles/components/layouts/home/About.module.css"

export default function About() {
    return (
        <>
            {/* About Me Section */}
            <div id="about" className="min-h-screen md:p-20 p-10 flex flex-wrap justify-center">
                {/* Introduction Section */}
                <div className="content-center flex flex-col justify-center">
                    <div className="flex justify-center text-6xl font-semibold pb-10"><h1>About Me</h1></div>
                    <div className="flex justify-center md:text-center text-xl pb-10">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div> {/* End Intorduction Section */}

                {/* Photo/Skills Grid Section */}
                <div>
                    {/* Grid Layout */}
                    <div className="grid md:grid-rows-2 md:grid-cols-2 md:gap-5 gap-8">
                        {/* Portrait Photo */}
                        <div id="aboutPic" className="row-span-2">
                            <img
                                priority
                                src="/images/About_Photo.jpeg"
                                alt="About Photo"
                                className={AboutStyles.portraitPhoto}
                                />
                        </div>

                        {/* Skills Cards */}
                        <div className="card shadow-lg shadow-gray-700">
                            <h1 className="text-4xl font-semibold pb-4">Soft Skills</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="card shadow-lg shadow-gray-700">
                            <h1 className="text-4xl font-semibold pb-4">Hard Skills</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div> {/* End Grid Layout */}
                </div> {/* End Photo/Skills Section */}
            </div> {/* End About Me section */}
        </>
    );
}