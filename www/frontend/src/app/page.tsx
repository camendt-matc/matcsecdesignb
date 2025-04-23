'use client';

import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-red-500 via-amber-500 to-amber-300 transition-colors duration-500">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center min-h-screen text-center p-8">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-50 mb-4">
                    Hi! I&apos;m Joseph
                </h1>
                <p className="text-xl text-gray-50 mb-6">
                Dynamic IT enthusiast commited to exceeding expectations of quality, detail, and innovation.
                </p>
                <div className="flex gap-4">
                    <a
                        href="#info"
                        className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition"
                    >
                        Learn More
                    </a>
                    <a
                        href="/contact"
                        className="border border-gray-900 text-gray-900 px-6 py-3 rounded-lg hover:bg-amber-100 transition"
                    >
                        Connect
                    </a>
                </div>
            </section>

            {/* Info Section */}
            <section
                id="info"
                className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-6 py-20 transition-colors duration-500"
            >
                <h2 className="text-3xl font-semibold mb-4">My Background</h2>
                <p className="max-w-2xl text-center text-lg pb-12">
                    With a diverse skill set across various technologies and disciplines, I focus on creating impactful,
                    scalable solutions that enhance efficiency. My work spans from optimizing infrastructure to implementing
                    automation, always with a strong emphasis on innovation and streamlined processes.
                </p>
                <div className="flex flex-wrap space-x-4">
                    {/* Feature Card 1 - Cloud*/}
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <div className="p-8 items-center justify-center flex">
                            <Image
                                src="/cloud.svg"
                                width={100}
                                height={100}
                                alt="Cloud by Vlad Cristea"
                            />
                        </div>
                        <div className="px-6 pb-4">
                            <div className="font-bold text-xl mb-2 text-red-600">Cloud</div>
                            <p className="text-gray-700 text-base">
                                Multi-cloud experience with AWS and Azure focusing on provisioning 
                                robust and cost-effective cloud solutions to fit the project&apos;s
                                needs. I am experienced with many methods of deployment - SDK, CLI, Console,  and IaC.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <Link href="/expertise#cloud" passHref>
                                <span className="inline-flex items-center bg-gradient-to-br from-red-500 via-amber-500 to-amber-300 transition-colors duration-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2 hover:from-red-600 hover:via-amber-600 hover:to-amber-400">
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

                    {/* Feature Card 2 - DevOps*/}
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <div className="p-8 items-center justify-center flex">
                            <Image
                                src="/dev-ops.svg"
                                width={100}
                                height={100}
                                alt="Infinity Fill by phosphor"
                            />
                        </div>
                        <div className="px-6 pb-4">
                            <div className="font-bold text-xl mb-2 text-red-600">DevOps</div>
                            <p className="text-gray-700 text-base">
                                End-to-end workflow optimiztion, automation, and innovation. Hands-on and
                                academic experience with leading CI/CD tools and methodologies. I bring a
                                passionate work ethic and a mindset focused on efficiency.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <Link href="/expertise#devops" passHref>
                                <span className="inline-flex items-center bg-gradient-to-br from-red-500 via-amber-500 to-amber-300 transition-colors duration-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2 hover:from-red-600 hover:via-amber-600 hover:to-amber-400">
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
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <div className="p-8 items-center justify-center flex">
                            <Image
                                src="/code.svg"
                                width={100}
                                height={100}
                                alt="Code by Dazzle"
                            />
                        </div>
                        <div className="px-6 pb-4">
                            <div className="font-bold text-xl mb-2 text-red-600">Development</div>
                            <p className="text-gray-700 text-base">
                                From low-level languages, memory management, and GPU programming to
                                in-demand high-level langauges or functionl design
                                patterns; I am highly adaptable and familiar with 
                                industry-leading architectures.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <Link href="/expertise#development" passHref>
                                <span className="inline-flex items-center bg-gradient-to-br from-red-500 via-amber-500 to-amber-300 transition-colors duration-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2 hover:from-red-600 hover:via-amber-600 hover:to-amber-400">
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
