function MoreInfo() {
    return (
        <>
            <div className="flex flex-col justify-center align-middle font-light text-center">
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:grid-cols-3">
                        {/* Section 1 */}
                        <div className=" md:p-8 flex flex-col text-start xl:border-r-2 text-tertiary">
                            <h1 className="md:text-5xl pb-4 pt-4 font-poppins text-3xl text-primary">Relevant Subjects</h1>
                            <ul className="list-disc ml-5 space-y-5">
                                <li className="md:text-3xl text-xl">Programming 1, 2, 3, and 4</li>
                                <li className="md:text-3xl text-xl">Database Fundamentals</li>
                                <li className="md:text-3xl text-xl">Introduction to Software Engineering</li>
                                <li className="md:text-3xl text-xl">Programming Workshop</li>
                                <li className="md:text-3xl text-xl">Language Theory</li>
                            </ul>
                        </div>
                        {/* Section 2 */}
                        <div className=" md:p-8 flex flex-col text-start xl:border-r-2 border-t-2 lg:border-t-0 xl:border-t-0 text-tertiary">
                            <h1 className="md:text-5xl font-poppins text-3xl pb-4 pt-4 text-primary">Current Subjects</h1>
                            <ul className="list-disc ml-5 space-y-5">
                                <li className="md:text-3xl text-xl">Computer Architecture</li>
                                <li className="md:text-3xl text-xl">Software Engineering Project</li>
                                <li className="md:text-3xl text-xl">Machine Learning</li>
                                <li className="md:text-3xl text-xl">The Business of Software</li>
                                <li className="md:text-3xl text-xl">Data Integration</li>
                            </ul>
                        </div>
                        {/* Section 3 */}
                        <div className=" md:p-8 flex flex-col text-start xl:border-t-0 border-t-2 text-tertiary">
                            <h1 className="md:text-5xl font-poppins text-3xl pb-4 pt-4 text-primary">Hobbies</h1>
                            <ul className="list-disc ml-5 space-y-5">
                                <li className="md:text-3xl text-xl">Design websites</li>
                                <li className="md:text-3xl text-xl">Play football</li>
                                <li className="md:text-3xl text-xl">Go to the gym</li>
                                <li className="md:text-3xl text-xl">Cook</li>
                            </ul>
                        </div>
                        {/* Horizontal Section */}
                        <div className="col-span-1 lg:flex-row xl:col-span-3 md:p-8 text-start border-t-2 align-middle justify-center text-tertiary">
                            <h1 className="md:text-5xl font-poppins text-3xl pb-4 pt-4 text-primary">Skills</h1>
                            <ul className="list-disc ml-5 space-y-5">
                                <li className="md:text-3xl text-xl"><span className="font-semibold">Frontend:</span> React, Astro, Tailwind CSS, CSS, HTML, JavaScript</li>
                                <li className="md:text-3xl text-xl"><span className="font-semibold">Backend:</span> Java, Node JS, C++, Express JS</li>
                                <li className="md:text-3xl text-xl"><span className="font-semibold">Data Science:</span> PostgreSQL</li>
                                <li className="md:text-3xl text-xl"><span className="font-semibold">Other:</span> GitHub, LaTeX, Figma</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MoreInfo;