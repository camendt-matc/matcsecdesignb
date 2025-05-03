'use client';

import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen bg-radial-[at_50%_25%] from-card via-backgound to-background2 transition-colors duration-500">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center min-h-screen text-center p-8">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-primary via-secondary to-tertiary inline-block text-transparent bg-clip-text">
                    Hi! I&apos;m Joseph
                </h1>
                <p className="text-xl text-body mb-6">
                Adaptable IT Cloud DevOps Specialist commited to exceeding expectations of quality, detail, and innovation.
                </p>
                <div className="flex gap-4">
                    <a
                        href="#info"
                        className="bg-primary text-heading px-6 py-3 rounded-lg hover:bg-background hover:text-body transition"
                    >
                        Learn More
                    </a>
                    <a
                        href="/contact"
                        className="border-2 border-body text-body px-6 py-3 rounded-lg hover:bg-primary hover:text-heading hover:border-background/0 transition"
                    >
                        Connect
                    </a>
                </div>
            </section>

            {/* Info Section */}
            <section
                id="info"
                className="min-h-screen bg-radial-[at_50%_25%] from-card via-background to-background2 flex flex-col items-center justify-center bg-background text-body px-6 py-20 transition-colors duration-500"
            >
                {/* My Background */}               
                <h2 className="text-3xl text-heading font-semibold mb-4">My Background</h2>
                <p className="max-w-2xl text-center text-lg pb-12">
                    My story originally started in programming with an interest in
                    computer science and software development. Because of this, I&apos;ve been able to see the larger picture of how the
                    pieces fit together while learning the
                    ins-and-outs of IT Operations: approaching technical
                    aspects with greater adaptability and depth. 
                </p>
                <div className="flex flex-wrap space-x-4">


                    {/* Feature Card 1 - Cloud*/}
                    <div className="max-w-sm rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm shadow-lg">
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
                                Multi-cloud experience with AWS and Azure focusing on provisioning 
                                robust and cost-effective cloud solutions to fit the project&apos;s
                                needs. I am experienced with many methods of deployment - SDK, CLI, Console,  and IaC.
                            </p>
                        </div>
                        <div className="px-6 pb-2">
                            <Link href="/expertise#cloud" passHref>
                                <span className="inline-flex bg-gradient-to-br from-primary to-secondary items-center rounded-md px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:to-primary transition-colors duration-200">
                                Read More
                                    <Image
                                        src="/right-arrow.svg"
                                        width={16}
                                        height={16}
                                        alt="Right Arrow"
                                        className="ml-2 text-heading"
                                    />
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Feature Card 2 - DevOps*/}
                    <div className="max-w-sm rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm shadow-lg">
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
                                End-to-end workflow optimiztion, automation, and innovation. Hands-on and
                                academic experience with leading CI/CD tools and methodologies. I bring a
                                passionate work ethic and a mindset focused on efficiency.
                            </p>
                        </div>
                        <div className="px-6 pb-2">
                            <Link href="/expertise#devops" passHref>
                                <span className="inline-flex bg-gradient-to-br from-primary to-secondary items-center rounded-md px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:to-primary transition-colors duration-200">
                                Read More
                                    <Image
                                        src="/right-arrow.svg"
                                        width={16}
                                        height={16}
                                        alt="Right Arrow"
                                        className="ml-2"
                                    />
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Feature Card 3 - Development*/}
                    <div className="max-w-sm rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm shadow-lg">
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
                                From low-level languages, memory management, and GPU programming to
                                in-demand high-level langauges or functionl design
                                patterns; I am highly adaptable and familiar with 
                                industry-leading architectures.
                            </p>
                        </div>
                        <div className="px-6 pb-2">
                            <Link href="/expertise#development" passHref>
                                <span className="inline-flex bg-gradient-to-br from-primary to-secondary items-center rounded-md px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:to-primary transition-colors duration-200">
                                Read More
                                    <Image
                                        src="/right-arrow.svg"
                                        width={16}
                                        height={16}
                                        alt="Right Arrow"
                                        className="ml-2"
                                    />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}
