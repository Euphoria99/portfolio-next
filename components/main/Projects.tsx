import React from 'react'
import SectionTitle from '../sub-components/SectionTitle'
import Image from "next/image";
import { VscGithubInverted } from "react-icons/vsc";
import { FaExternalLinkAlt } from "react-icons/fa";
import { featuredProjectList } from "../../datasource"

const Projects = () => {
    return (
        <section
            id="projects"
            className='max-w-container mx-auto lgl:px-20 py-24'
        >
            <SectionTitle title="Projects" titleNo="" />
            <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                {featuredProjectList.map((project, index) => (
                    <div
                        key={index}
                        className='w-full flex flex-col items-center justify-center gap-28 mt-10'
                    >
                        <div className={`flex flex-col  ${index % 2 === 1 ? 'xl:flex-row-reverse' : 'xl:flex-row'} gap-6`}>
                            <a
                                className='w-full xl:w-1/2 h-auto relative group'
                                href={project.projectLink ? project.projectLink : project.githubLink}
                                target="_blank"
                            >
                                <div>
                                    <Image
                                        className="w-full h-full object-cover"
                                        src={project.projectImage}
                                        alt="chat app"
                                    />
                                </div>
                            </a>
                            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10'>
                                {/* Project details using project object */}
                                <p className='font-titleFont text-textColor text-sm tracking-wide'>
                                    Featured Project
                                </p>
                                <h3 className='text-2xl font-bold'>
                                    {project.projectName}
                                </h3>

                                <div
                                    className={`bg-cardColor text-sm md:text-base p-2 ${index % 2 === 1 ? 'xl:-mr-16' : 'xl:-ml-16'}  md:p-2 rounded-md`}
                                    dangerouslySetInnerHTML={{ __html: project.projectDesc }}
                                />

                                {" "}
                                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                                    {project.projectTech.map((tech, techIndex) => (
                                        <li key={techIndex}>{tech}</li>
                                    ))}
                                </ul>
                                <div className='text-2xl flex gap-4'>
                                    {
                                        project.githubLink != '' && (
                                            <a
                                                className='hover:text-textColor duration-300 hover:-translate-y-2 transition-all'
                                                href={project.githubLink}
                                                target="_blank"
                                            >
                                                <VscGithubInverted />
                                            </a>
                                        )
                                    }
                                    {
                                        project.projectLink != '' && (
                                            <a
                                                className='hover:text-textColor duration-300 hover:-translate-y-2 transition-all'
                                                href={project.projectLink}
                                                target="_blank"
                                            >
                                                <FaExternalLinkAlt />
                                            </a>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects