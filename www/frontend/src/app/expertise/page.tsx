'use client';

import Image from 'next/image'

import {Tooltip} from "@heroui/tooltip";

export default function ExpertisePage() {

    return (
        <main className="min-h-screen bg-backgound">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center bg-radial-[at_50%_25%] from-card via-background to-background2 text-center py-20 px-6">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-primary via-secondary to-tertiary inline-block text-transparent bg-clip-text">
                    Expertise
                </h1>

                <p className="text-lg text-body max-w-3xl mx-auto">
                    A curated collection of in-demand skills and experience I&apos;ve developed. Browse below to see how I can contribute to your next project!
                </p>
            </section>
            <section>
                <hr className='h-1 bg-gradient-to-r from-background via-secondary to-background border-none'></hr>
            </section>

            {/* Catalog Section */}
            <section className="container mx-auto py-20 px-6">

                {/* Cloud Section */}
                <div className="mb-35" id='cloud'>
                    <h2 className="text-4xl font-bold text-heading mb-4 ml-6">
                        Cloud
                    </h2>
                    <hr className="border-t-2 border-subheading mb-6" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-heading mb-2">AWS</h3>
                            <p className="text-body">
                                Specialized in Amazon Web Services (AWS) with hands-on experience in cloud architecture, deployment, and cost optimization.
                                Proficient with key services such as EC2, S3, VPC, IAM, CloudWatch, Lambda, and CloudFormation.
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-gradient-to-br from-red-500 via-amber-500 to-amber-300 transition-colors rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                5/5
                                </span>
                                <Tooltip
                                    content={
                                        <div className="px-1 py-2">
                                            <div className="text-small font-bold">Relative Strengh Rating</div>
                                            <div className="text-tiny">
                                                This rating represents my level of proficiency and<br />
                                                comfort with the skill when comparing it to others.
                                            </div>
                                        </div>
                                    }
                                placement='bottom' classNames={{ content: 'bg-gray-200 text-gray-700 rounded-md px-3 py-2' }}>
                                    <span className='inline-flex items-center align-middle'>
                                        <Image
                                            src="/question-circle.svg"
                                            width={32}
                                            height={32}
                                            alt="Question Circle by primefaces"
                                        />
                                    </span>
                                </Tooltip>
                            </div>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-heading mb-2">Microsoft Azure</h3>
                            <p className="text-body">
                                Foundational proficiency in deploying, managing, and optimizing solutions within Azure, including PaaS, IaaS, and SaaS offerings.
                                Most experienced with Virtual Machines, Virtual Networks, Blob Storage, App Services, and DevOps.
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                4/5
                                </span>
                            </div>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Microservices</h3>
                            <p>
                                Experienced in deploying microservices architectures that scale efficiently with services such as AWS ECS. Familiar with microservices design patterns and inter-service communication interfaces.
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                2/5
                                </span>
                            </div>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">High Availability Architectures</h3>
                            <p>
                                Knowledgeable and experienced in architecting highly available and fault-tolerant cloud infrastructures, ensuring minimal downtime and disaster recovery readiness using multi-zone deployments.
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                3/5
                                </span>
                            </div>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Cloud Cost Optimization</h3>
                            <p>
                                Experienced in optimizing cloud resource usage and cost management using best practices, including auto-scaling, reserved instances, and right-sizing resources to achieve cost savings without sacrificing performance.
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                3/5
                                </span>
                            </div>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Cloud Security</h3>
                            <p>
                                Proficient in securing cloud environments using industry-standard security practices, including IAM, encryption at rest and in transit, and network segmentation.
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                3/5
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* DevOps Section */}
                <div className="mb-35" id='devops'>
                    <h2 className="text-4xl font-bold text-heading mb-4 ml-6">
                        DevOps
                    </h2>
                    <hr className="border-t-2 border-subheading mb-6" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                    <h3 className="text-xl font-semibold text-heading mb-2">Python</h3>
                            <p>
                                Adept in Python for scripting and automation tasks like infrastructure deployments or monitoring with Boto3 or serverless
                                scripting with AWS Lambda. Deep understanding of the language and appreciation for best practices.
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-gradient-to-br from-red-500 via-amber-500 to-amber-300 transition-colors rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                5/5
                                </span>
                                <Tooltip
                                    content={
                                        <div className="px-1 py-2">
                                            <div className="text-small font-bold">Relative Strengh Rating</div>
                                            <div className="text-tiny">
                                                This rating represents my level of proficiency and<br />
                                                comfort with the skill when comparing it to others.
                                            </div>
                                        </div>
                                    }
                                placement='bottom' classNames={{ content: 'bg-gray-200 text-gray-700 rounded-md px-3 py-2' }}>
                                    <span className='inline-flex items-center align-middle'>
                                        <Image
                                            src="/question-circle.svg"
                                            width={32}
                                            height={32}
                                            alt="Question Circle by primefaces"
                                        />
                                    </span>
                                </Tooltip>
                            </div>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">CI/CD Pipelines</h3>
                            <p>
                                Experienced in automating builds, tests, and deployments using tools like Jenkins, Azure DevOps, and GitHub Actions to ensure fast, reliable, and repeatable deployments.
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                4/5
                                </span>
                            </div>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Docker & Docker Compose</h3>
                            <p>
                                Experienced in containerizing applications, managing Docker containers, and orchestrating with Docker Compose or AWS ECS for scalability and efficient resource utilization.
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                4/5
                                </span>
                            </div>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Terraform</h3>
                            <p>
                                Proficient in using Terraform to define and provision cloud infrastructure in a consistent and automated manner, ensuring reproducibility across environments.
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                3/5
                                </span>
                            </div>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Ansible</h3>
                            <p>
                                Basic-level experience with Ansible for automating configuration management, ensuring consistency across multiple systems and environments.
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                1/5
                                </span>
                            </div>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Jenkins</h3>
                            <p>
                                Experienced in setting up and managing Jenkins for continuous integration and continuous delivery, automating the build-test-deploy lifecycle.
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                3/5
                                </span>
                            </div>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">GitHub Actions</h3>
                            <p>
                                Experienced with GitHub Actions for automating workflows like testing, building, and deployment processes directly within GitHub repositories
                                taking full advantage of its wide ecosystem and first-class support for concurrency.
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                4/5
                                </span>
                            </div>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Bash</h3>
                            <p>
                                Experienced with using bash shell scripting for Linux administration and a multitude automation applications like 
                                deployments, build scripts, and configuration.
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-gradient-to-br from-red-500 via-amber-500 to-amber-300 transition-colors rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                5/5
                                </span>
                                <Tooltip
                                    content={
                                        <div className="px-1 py-2">
                                            <div className="text-small font-bold">Relative Strengh Rating</div>
                                            <div className="text-tiny">
                                                This rating represents my level of proficiency and<br />
                                                comfort with the skill when comparing it to others.
                                            </div>
                                        </div>
                                    }
                                placement='bottom' classNames={{ content: 'bg-gray-200 text-gray-700 rounded-md px-3 py-2' }}>
                                    <span className='inline-flex items-center align-middle'>
                                        <Image
                                            src="/question-circle.svg"
                                            width={32}
                                            height={32}
                                            alt="Question Circle by primefaces"
                                        />
                                    </span>
                                </Tooltip>
                            </div>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Linux</h3>
                            <p>
                            Proficient in leveraging Linux distributions for automating infrastructure and managing server environments.
                            Extensive experience with shell scripting, package management, and system monitoring.
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-gradient-to-br from-red-500 via-amber-500 to-amber-300 transition-colors rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                5/5
                                </span>
                                <Tooltip
                                    content={
                                        <div className="px-1 py-2">
                                            <div className="text-small font-bold">Relative Strengh Rating</div>
                                            <div className="text-tiny">
                                                This rating represents my level of proficiency and<br />
                                                comfort with the skill when comparing it to others.
                                            </div>
                                        </div>
                                    }
                                placement='bottom' classNames={{ content: 'bg-gray-200 text-gray-700 rounded-md px-3 py-2' }}>
                                    <span className='inline-flex items-center align-middle'>
                                        <Image
                                            src="/question-circle.svg"
                                            width={32}
                                            height={32}
                                            alt="Question Circle by primefaces"
                                        />
                                    </span>
                                </Tooltip>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Development Section */}
                <div id='development'>
                    <h2 className="text-4xl font-bold text-heading mb-4 ml-6">
                        Development
                    </h2>
                    <hr className="border-t-2 border-subheading mb-6" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Git/GitHub</h3>
                            <p>
                                Proficient in version control using Git, including branch management, merges, and pull requests, with deep experience using GitHub for collaborative development.
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-gradient-to-br from-red-500 via-amber-500 to-amber-300 transition-colors rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                5/5
                                </span>
                                <Tooltip
                                    content={
                                        <div className="px-1 py-2">
                                            <div className="text-small font-bold">Relative Strengh Rating</div>
                                            <div className="text-tiny">
                                                This rating represents my level of proficiency and<br />
                                                comfort with the skill when comparing it to others.
                                            </div>
                                        </div>
                                    }
                                placement='bottom' classNames={{ content: 'bg-gray-200 text-gray-700 rounded-md px-3 py-2' }}>
                                    <span className='inline-flex items-center align-middle'>
                                        <Image
                                            src="/question-circle.svg"
                                            width={32}
                                            height={32}
                                            alt="Question Circle by primefaces"
                                        />
                                    </span>
                                </Tooltip>
                            </div>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">C++</h3>
                            <p>
                                Solid understanding of C++ for high-performance computing and real-time applications through hands-on 
                                engineless game development experience with OpenGL.
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                3/5
                                </span>
                            </div>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Rust</h3>
                            <p>
                                Experienced with the Rust programming langauge for building fast and memory-safe applications
                                with exposure to functional programming and entity-component-systems.
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                4/5
                                </span>
                            </div>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">SQL</h3>
                            <p>
                                Experienced with SQL for relational database design and querying with MySQL.
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                3/5
                                </span>
                            </div>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Java</h3>
                            <p>
                                Entry-level experience using Java for simple application development or backend development
                                (with Spring Boot). Picks up easily due to firm understanding of OOP principles.
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                2/5
                                </span>
                            </div>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Python</h3>
                            <p>
                                Highly proficient in using Python as a powerful language for application or tool development with a deep
                                understanding of the language and appreciation for best practices. 
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-gradient-to-br from-red-500 via-amber-500 to-amber-300 transition-colors rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                5/5
                                </span>
                                <Tooltip
                                    content={
                                        <div className="px-1 py-2">
                                            <div className="text-small font-bold">Relative Strengh Rating</div>
                                            <div className="text-tiny">
                                                This rating represents my level of proficiency and<br />
                                                comfort with the skill when comparing it to others.
                                            </div>
                                        </div>
                                    }
                                placement='bottom' classNames={{ content: 'bg-gray-200 text-gray-700 rounded-md px-3 py-2' }}>
                                    <span className='inline-flex items-center align-middle'>
                                        <Image
                                            src="/question-circle.svg"
                                            width={32}
                                            height={32}
                                            alt="Question Circle by primefaces"
                                        />
                                    </span>
                                </Tooltip>
                            </div>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Object Oriented Programming</h3>
                            <p>
                                Strong grasp of OOP principles such as inheritance, polymorphism, encapsulation, and abstraction, with experience applying them in multiple languages (Java, C++, Python).
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-gradient-to-br from-red-500 via-amber-500 to-amber-300 transition-colors rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                5/5
                                </span>
                                <Tooltip
                                    content={
                                        <div className="px-1 py-2">
                                            <div className="text-small font-bold">Relative Strengh Rating</div>
                                            <div className="text-tiny">
                                                This rating represents my level of proficiency and<br />
                                                comfort with the skill when comparing it to others.
                                            </div>
                                        </div>
                                    }
                                placement='bottom' classNames={{ content: 'bg-gray-200 text-gray-700 rounded-md px-3 py-2' }}>
                                    <span className='inline-flex items-center align-middle'>
                                        <Image
                                            src="/question-circle.svg"
                                            width={32}
                                            height={32}
                                            alt="Question Circle by primefaces"
                                        />
                                    </span>
                                </Tooltip>
                            </div>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">React (with Next.js)</h3>
                            <p>
                                Entry-level experience in building front-end applications using Next.js with Tailwind CSS.
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                1/5
                                </span>
                            </div>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Spring Boot</h3>
                            <p>
                            Entry-level experience in building backend applications using Java Spring Boot.
                            </p>
                            <div className="pt-4">
                                <span className="inline-flex items-center bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
                                1/5
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
