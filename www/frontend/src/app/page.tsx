'use client';

import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <section className="min-h-screen bg-background flex flex-col items-center justify-center text-center p-8">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-heading">
                    Hi! I&apos;m Joseph
                </h1>
                <div className="flex gap-4">
                    <Link
                        href="#info"
                        className="inline-flex bg-border text-heading px-6 py-3 transition hover:invert rounded-lg"
                    >
                        Learn More
                    </Link>
                    <Link
                        href="/contact"
                        className="border-2 border-border px-6 py-3 hover:invert rounded-lg"
                    >
                        Connect
                    </Link>
                </div>
            </section>

            {/* Info Section */}
            <section
                id="info"
                className="min-h-screen flex flex-col items-center px-6 py-20"
            >
                {/* My Background */}
                <h2 className="text-3xl text-heading font-semibold">My Background</h2>

                {/* BIO */}
                <div className="overflow-hidden p-6 mb-7 max-w-7xl">
                    IT Cloud DevOps Specialist with three years of programming experience in Python.
                    Experienced providing IT academic support and hardware/software troubleshooting.
                    Additionally, I have a strong foundation in cloud technologies, DevOps pipelines,
                    and scripting, with personal projects involving automated AWS deployment scripts,
                    containerization, and continuous integration/continuous deployment (CI/CD) pipelines.
                    I am passionate about delivering quality solutions and continuing to grow my skillset
                    in cloud infrastructure and automation.
                </div>
                
                <div className="flex space-x-7 flex-row max-w-7xl">

                    {/* Feature Card 1 - Cloud*/}
                    <div className="overflow-hidden bg-card p-6 border-border border rounded-lg">
                        <div className="font-bold text-xl mb-2 text-subheading">Cloud</div>
                        <p>
                            Multi-cloud experience with AWS and Azure using key services for web deployment. My focus is on provisioning intelligently designed solutions
                            that are built on the pillars of scalability, security, cost-efficiency, and performance. 
                        </p>
                    </div>

                    {/* Feature Card 2 - DevOps*/}
                    <div className="overflow-hidden bg-card p-6 border-border border rounded-lg">
                        <div className="font-bold text-xl mb-2 text-subheading">DevOps</div>
                        <p>
                            Hands-on, academic, and personal experience with leading CI/CD tools and methodologies that enables me
                            to implement end-to-end workflow automation. I bring 
                            passion and a mindset focused on problem solving and practicality.
                        </p>
                    </div>

                    {/* Feature Card 3 - Development*/}
                    <div className="overflow-hidden bg-card p-6 border-border border rounded-lg">
                        <div className="font-bold text-xl mb-2 text-subheading">Development</div>
                        <p>
                            From projects with low-level languages, memory management, and GPU programming to
                            in-demand high-level languages. I am adaptable to new practices and come with a
                            solid foundation to recognize patterns and follow best practices.
                        </p>
                    </div>
                </div>
                <div className="py-8">
                    <Link
                        href="#projects"
                        className="inline-flex bg-border text-heading px-6 py-3 transition hover:invert rounded-lg"
                    >
                        See examples of my work
                        <Image
                            src="/right-arrow.svg"
                            width={16}
                            height={16}
                            alt="Right Arrow"
                            className="ml-2"
                        />
                    </Link>
                </div>
            </section>

            {/* Projects */}
            <section
                id="projects"
                className="min-h-screen flex flex-col items-center px-6 py-20"
            >
                {/* My Background */}
                <h2 className="text-3xl text-heading font-semibold mb-7">Projects</h2>
                
                <div className="flex space-x-7 flex-row max-w-7xl">

                    <div className="overflow-hidden bg-card border-border border rounded-lg">
                        <div className="bg-border/35" >
                            <h2 className="font-bold text-xl mx-6 py-3 text-subheading">
                            Yuxi Boss 
                            </h2>
                        </div>
                        <hr className='mb-2 border-border'></hr>
                        <p className='mb-4 mx-6'>
                            A Lightweight pre-study tool with support for Anki made for Simplified Chinese learners.
                            Built with Python.
                        </p>
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/JHops881/yuxi-boss"
                            className="inline-flex border bg-border/35 border-border text-blue-400 px-3 py-3 transition hover:invert rounded-lg mx-6 mb-6"
                        >
                            View on GitHub&nbsp;
                            <Image
                                src="/external-link.svg"
                                width={20} height={20}
                                alt="External Link by krystonschwarze"
                            />
                        </Link>
                    </div>


                    <div className="overflow-hidden bg-card border-border border rounded-lg">
                        <div className="bg-border/35" >
                            <h2 className="font-bold text-xl mx-6 py-3 text-subheading">
                            This Website
                            </h2>
                        </div>
                        <hr className='mb-2 border-border'></hr>
                        <p className='mb-4 mx-6'>
                            A fullstack application built with a Next.js frontend, Spring Boot Backend,
                            deployed on AWS using Terraform, and orchestrated via Docker and GitHub Actions.
                        </p>
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/JHops881/personal-website"
                            className="inline-flex border bg-border/35 border-border text-blue-400 px-3 py-3 transition hover:invert rounded-lg mx-6 mb-6"
                        >
                            View on GitHub&nbsp;
                            <Image
                                src="/external-link.svg"
                                width={20} height={20}
                                alt="External Link by krystonschwarze"
                            />
                        </Link>
                    </div>

                    <div className="overflow-hidden bg-card border-border border rounded-lg">
                        <div className="bg-border/35" >
                            <h2 className="font-bold text-xl mx-6 py-3 text-subheading">
                            Jenkins CI/CD Pipeline Optimiztion
                            </h2>
                        </div>
                        <hr className='mb-2 border-border'></hr>
                        <p className='mb-4 mx-6'>
                            Optimized Jenkins server performance, streamlined and debugged the main pipeline, and refactored the
                            cloud deployments to be more robust and scalable.
                        </p>
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/jhopwood-matc/jenkins-project"
                            className="inline-flex border bg-border/35 border-border text-blue-400 px-3 py-3 transition hover:invert rounded-lg mx-6 mb-6"
                        >
                            View on GitHub&nbsp;
                            <Image
                                src="/external-link.svg"
                                width={20} height={20}
                                alt="External Link by krystonschwarze"
                            />
                        </Link>
                    </div>

                </div>

                <div className="py-8">
                    <Link
                        href="/experience"
                        className="inline-flex bg-border text-heading px-6 py-3 transition hover:invert rounded-lg"
                    >
                        See skills
                        <Image
                            src="/right-arrow.svg"
                            width={16}
                            height={16}
                            alt="Right Arrow"
                            className="ml-2"
                        />
                    </Link>
                </div>

            </section>

        </main>
    );
}
