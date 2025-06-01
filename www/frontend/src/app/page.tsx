'use client';

import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <section className="min-h-screen bg-background flex flex-col items-center justify-center text-center p-8">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-primary via-secondary to-tertiary inline-block text-transparent bg-clip-text">
                    Hi! I&apos;m Joseph
                </h1>
                <div className="flex gap-4">
                    <Link
                        href="#info"
                        className="bg-primary text-heading px-6 py-3 hover:bg-background2 hover:text-body transition"
                    >
                        Learn More
                    </Link>
                    <Link
                        href="/contact"
                        className="border-2 border-body px-6 py-3 hover:bg-background2 hover:border-background/0 transition"
                    >
                        Connect
                    </Link>
                </div>
            </section>

            {/* Info Section */}
            <section
                id="info"
                className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
            >
                {/* My Background */}               
                <h2 className="text-3xl text-heading font-semibold mb-6">My Background</h2>
                <div className="flex flex-wrap space-x-4">
                    {/* Feature Card 1 - Cloud*/}
                    <div className="max-w-sm overflow-hidden bg-card pb-6">
                        <div className="p-8 items-center justify-center flex">
                            <Image
                                src="/cloud.svg"
                                width={100}
                                height={100}
                                alt="Cloud by Vlad Cristea"
                                className='dark:invert'
                            />
                        </div>
                        <div className="px-6 pb-4">
                            <div className="font-bold text-xl mb-2 text-heading">Cloud</div>
                            <p className="">
                                Multi-cloud experience with AWS and Azure using key services for web deployment. My focus is on provisioning intelligently designed solutions
                                that are built on the pillars of scalability, security, cost-efficiency, and performance. 
                            </p>
                        </div>
                    </div>

                    {/* Feature Card 2 - DevOps*/}
                    <div className="max-w-sm overflow-hidden bg-card pb-6">
                        <div className="p-8 items-center justify-center flex">
                            <Image
                                src="/dev-ops.svg"
                                width={100}
                                height={100}
                                alt="Infinity Fill by phosphor"
                                className='dark:invert'
                            />
                        </div>
                        <div className="px-6 pb-4">
                            <div className="font-bold text-xl mb-2 text-heading">DevOps</div>
                            <p>
                                Hands-on, academic, and personal experience with leading CI/CD tools and methodologies that enables me
                                to implement end-to-end workflow automation. I bring 
                                passion and a mindset focused on problem solving and practicality.
                            </p>
                        </div>
                    </div>

                    {/* Feature Card 3 - Development*/}
                    <div className="max-w-sm overflow-hidden bg-card pb-6">
                        <div className="p-8 items-center justify-center flex">
                            <Image
                                src="/code.svg"
                                width={100}
                                height={100}
                                alt="Code by Dazzle"
                                className='dark:invert'
                            />
                        </div>
                        <div className="px-6 pb-4">
                            <div className="font-bold text-xl mb-2 text-heading">Development</div>
                            <p className="text-body">
                                From projects with low-level languages, memory management, and GPU programming to
                                in-demand high-level languages. I am adaptable to new practices and come with a
                                solid foundation to recognize patterns and follow best practices. 

                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-8">
                    <Link
                        href="/expertise"
                        className="inline-flex bg-primary text-heading px-6 py-3 hover:bg-background2 transition"
                    >
                        Read More
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

            {/* About */}
            <section className="flex flex-col items-center justify-center text-center py-20 px-6">
                <h1 className="text-3xl font-bold mb-4 text-heading">
                    About Me
                </h1>
                <p className="text-lg max-w-3xl mx-auto text-left text-body mb-60">
                    IT Cloud DevOps Specialist with three years of programming experience in Python.
                    Experienced providing IT academic support and hardware/software troubleshooting.
                    Additionally, I have a strong foundation in cloud technologies, DevOps pipelines,
                    and scripting, with personal projects involving automated AWS deployment scripts,
                    containerization, and continuous integration/continuous deployment (CI/CD) pipelines.
                    I am passionate about delivering quality solutions and continuing to grow my skillset
                    in cloud infrastructure and automation.
                </p>
            </section>

        </main>
    );
}
