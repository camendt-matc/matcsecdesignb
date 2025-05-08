'use client';

import Link from 'next/link'
import Image from 'next/image'

export default function ExpertisePage() {

    return (
        <main className="min-h-screen bg-background">

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
                <div className="mb-25" id='cloud'>
                    <h2 className="text-4xl font-bold text-heading mb-4 ml-6">
                        Cloud
                    </h2>
                    <hr className="border-t-2 border-subheading mb-6" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-heading mb-2">AWS</h3>
                            <p className="text-body">
                                I am proficient in Amazon Web Services (AWS) with hands-on experience in cloud architecture, deployment, and cost optimization.
                                I have the most experience with key services such as EC2, S3, VPC, IAM, CloudWatch, Lambda, and
                                <Link className="text-blue-400 inline-flex" target="_blank" rel="noopener noreferrer" href="https://github.com/jhopwood-matc/aws-admin-proj2">Cloudformation<Image src="/external-link.svg" width={16} height={16} alt="External Link by krystonschwarze"></Image></Link>.
                                <br /><br />
                                I am proficient using the console, CLI, and IaC methods. Additionally, I am experienced with Boto3 for both <Link className="text-blue-400 inline-flex" target="_blank" rel="noopener noreferrer" href="https://github.com/jhopwood-matc/adv-cloud-mirror/blob/main/week%206%20-%20Error%20Handling/s3website.py">deployment<Image src="/external-link.svg" width={16} height={16} alt="External Link by krystonschwarze"></Image></Link>
                                &nbsp;and <Link className="text-blue-400 inline-flex" target="_blank" rel="noopener noreferrer" href="https://github.com/jhopwood-matc/adv-cloud-mirror/blob/main/week%205%20-%20SNS/reboot_high_ec2.py">monitoring<Image src="/external-link.svg" width={16} height={16} alt="External Link by krystonschwarze"></Image></Link>.
                            </p>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-heading mb-2">Microsoft Azure</h3>
                            <p className="text-body">
                                I have foundational proficiency in with Azure: with hands-on experience deploying, managing, and optimizing solutions--including PaaS, IaaS, and SaaS offerings.
                                I am most experienced with Virtual Machines, Virtual Networks, Blob Storage, App Services, and DevOps. Most of my experience with Azure has been around
                                deploying .NET web applications--integrating databases, creating build/test and release pipelines, and storing web assets. I also have some exposure to Azure AI/Cognitive Services.
                                
                            </p>
                        </div>

                        
                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Cloud Design Patterns & Best Practices</h3>
                            <p>
                                I have a foundational understanding of microservices as well as some experience in implementing it with services such as AWS ECS. I am also experienced with multi-az
                                deployments for highly available architectures--which I am very familiar with. I am security conscious too--using tools such as IAM, encryption, and least privileged approaches to ensure a safe
                                cloud environment. Lastly, I am always considering cost optimization when creating cloud solutions.
                            </p>
                        </div>

                    </div>
                </div>

                {/* DevOps Section */}
                <div className="mb-25" id='devops'>
                    <h2 className="text-4xl font-bold text-heading mb-4 ml-6">
                        DevOps
                    </h2>
                    <hr className="border-t-2 border-subheading mb-6" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                    <h3 className="text-xl font-semibold text-heading mb-2">Python</h3>
                            <p>
                                I am adept in Python for scripting and automation tasks like infrastructure deployments or monitoring with Boto3 or serverless
                                scripting with AWS Lambda. Having been using
                                it for over 3 years, I have very firm understanding of the language and appreciation for best practices.
                            </p>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">CI/CD Pipelines</h3>
                            <p>
                                Experienced in automating builds, tests, and deployments using tools like Jenkins, Azure DevOps, and GitHub Actions to ensure fast, reliable, and repeatable deployments.
                            </p>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Docker & Docker Compose</h3>
                            <p>
                                Experienced in containerizing applications, managing Docker containers, and orchestrating with Docker Compose or AWS ECS for scalability and efficient resource utilization.
                            </p>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Terraform</h3>
                            <p>
                                Proficient in using Terraform to define and provision cloud infrastructure in a consistent and automated manner, ensuring reproducibility across environments.
                            </p>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Ansible</h3>
                            <p>
                                I have basic-level experience with Ansible. I have had the opportunity to implement a handful of playbooks for automated smoke testing.
                            </p>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Jenkins</h3>
                            <p>
                                Experienced in setting up and managing Jenkins for continuous integration and continuous delivery, automating the build-test-deploy lifecycle.
                            </p>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">GitHub Actions</h3>
                            <p>
                                Experienced with GitHub Actions for automating workflows like testing, building, and deployment processes directly within GitHub repositories
                                taking full advantage of its wide ecosystem and first-class support for concurrency.
                            </p>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Bash</h3>
                            <p>
                                Experienced with using bash shell scripting for Linux administration and a multitude automation applications like 
                                deployments, build scripts, and configuration.
                            </p>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Linux</h3>
                            <p>
                            Proficient in leveraging Linux distributions for automating infrastructure and managing server environments.
                            Extensive experience with shell scripting, package management, and system monitoring.
                            </p>
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
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">C++</h3>
                            <p>
                                Solid understanding of C++ for high-performance computing and real-time applications through hands-on 
                                engineless game development experience with OpenGL.
                            </p>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Rust</h3>
                            <p>
                                Experienced with the Rust programming language for building fast and memory-safe applications
                                with exposure to functional programming and entity-component-systems.
                            </p>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">SQL</h3>
                            <p>
                                Experienced with SQL for relational database design and querying with MySQL.
                            </p>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Java</h3>
                            <p>
                                Entry-level experience using Java for simple application development or backend development
                                (with Spring Boot). Picks up easily due to firm understanding of OOP principles.
                            </p>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Python</h3>
                            <p>
                                Highly proficient in using Python as a powerful language for application or tool development with a deep
                                understanding of the language and appreciation for best practices. 
                            </p>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Object Oriented Programming</h3>
                            <p>
                                Strong grasp of OOP principles such as inheritance, polymorphism, encapsulation, and abstraction, with experience applying them in multiple languages (Java, C++, Python).
                            </p>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">React (with Next.js)</h3>
                            <p>
                                Entry-level experience in building front-end applications using Next.js with Tailwind CSS.
                            </p>
                        </div>

                        <div className="bg-card/40 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between text-body">
                            <h3 className="text-xl font-semibold text-heading mb-2">Spring Boot</h3>
                            <p>
                            Entry-level experience in building backend applications using Java Spring Boot.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
