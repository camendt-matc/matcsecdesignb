'use client';

import Link from 'next/link';

export default function ExpertisePage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-900">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-100 text-center py-20 px-6">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-red-500 via-amber-500 to-amber-300 inline-block text-transparent bg-clip-text">
                    Expertise
                </h1>

                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    A curated collection of in-demand skills and experience I've developed. Browse below to see how I can contribute to your next project!
                </p>
            </section>

            {/* Catalog Section */}
            <section className="container mx-auto py-20 px-6">

                {/* Cloud Section */}
                <div className="mb-35" id='cloud'>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 ml-6">
                        Cloud
                    </h2>
                    <hr className="border-t-2 border-gray-300 mb-6" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-red-500 mb-2">AWS</h3>
                            <p className="text-gray-700 text-base">
                                Specialized in Amazon Web Services (AWS) with hands-on experience in cloud architecture, deployment, and cost optimization.
                                Proficient with key services such as EC2, S3, VPC, IAM, CloudWatch, Lambda, and CloudFormation.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-red-500 mb-2">Microsoft Azure</h3>
                            <p className="text-gray-700 text-base">
                                Foundational proficiency in deploying, managing, and optimizing solutions within Azure, including PaaS, IaaS, and SaaS offerings.
                                Most experienced with Virtual Machines, Virtual Networks, Blob Storage, App Services, and DevOps.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-red-500 mb-2">Microservices</h3>
                            <p className="text-gray-700 text-base">
                                Experienced in deploying microservices architectures that scale efficiently with services such as AWS ECS. Familiar with microservices design patterns and inter-service communication interfaces.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-red-500 mb-2">High Availability Architectures</h3>
                            <p className="text-gray-700 text-base">
                                Knowledgeable and experienced in architecting highly available and fault-tolerant cloud infrastructures, ensuring minimal downtime and disaster recovery readiness using multi-zone deployments.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-red-500 mb-2">Cloud Cost Optimization</h3>
                            <p className="text-gray-700 text-base">
                                Experienced in optimizing cloud resource usage and cost management using best practices, including auto-scaling, reserved instances, and right-sizing resources to achieve cost savings without sacrificing performance.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-red-500 mb-2">Cloud Security</h3>
                            <p className="text-gray-700 text-base">
                                Proficient in securing cloud environments using industry-standard security practices, including IAM, encryption at rest and in transit, and network segmentation.
                            </p>
                        </div>

                    </div>
                </div>

                {/* DevOps Section */}
                <div className="mb-35" id='devops'>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 ml-6">
                        DevOps
                    </h2>
                    <hr className="border-t-2 border-gray-300 mb-6" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-red-500 mb-2">CI/CD Pipelines</h3>
                            <p className="text-gray-700 text-base">
                                Experienced in automating builds, tests, and deployments using tools like Jenkins, Azure DevOps, and GitHub Actions to ensure fast, reliable, and repeatable deployments.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-red-500 mb-2">Docker & Docker Compose</h3>
                            <p className="text-gray-700 text-base">
                                Experienced in containerizing applications, managing Docker containers, and orchestrating with Docker Compose or AWS ECS for scalability and efficient resource utilization.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-red-500 mb-2">Terraform</h3>
                            <p className="text-gray-700 text-base">
                                Proficient in using Terraform to define and provision cloud infrastructure in a consistent and automated manner, ensuring reproducibility across environments.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-red-500 mb-2">Ansible</h3>
                            <p className="text-gray-700 text-base">
                                Basic-level experience with Ansible for automating configuration management, ensuring consistency across multiple systems and environments.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-red-500 mb-2">Jenkins</h3>
                            <p className="text-gray-700 text-base">
                                Experienced in setting up and managing Jenkins for continuous integration and continuous delivery, automating the build-test-deploy lifecycle.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-red-500 mb-2">GitHub Actions</h3>
                            <p className="text-gray-700 text-base">
                                Experienced with GitHub Actions for automating workflows like testing, building, and deployment processes directly within GitHub repositories
                                taking full advantage of its wide ecosystem and first-class support for concurrency.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Development Section */}
                <div id='development'>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 ml-6">
                        Development
                    </h2>
                    <hr className="border-t-2 border-gray-300 mb-6" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-red-500 mb-2">Git/GitHub</h3>
                            <p className="text-gray-700 text-base">
                                Proficient in version control using Git, including branch management, merges, and pull requests, with deep experience using GitHub for collaborative development.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-red-500 mb-2">Python</h3>
                            <p className="text-gray-700 text-base">
                                Adept in Python for scripting and automation tasks as well as application development with a deep
                                understanding of the language and appreciation for best practices.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-red-500 mb-2">C++</h3>
                            <p className="text-gray-700 text-base">
                                Solid understanding of C++ for high-performance computing and real-time applications through hands-on 
                                engineless game development experience with OpenGL.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-red-500 mb-2">Rust</h3>
                            <p className="text-gray-700 text-base">
                                Experienced with the Rust programming langauge for building fast and memory-safe applications
                                with exposure to functional programming and entity-component-systems.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-red-500 mb-2">SQL</h3>
                            <p className="text-gray-700 text-base">
                                Experienced with SQL for relational database design and querying with MySQL.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-red-500 mb-2">Java Spring Boot</h3>
                            <p className="text-gray-700 text-base">
                                Entry-level experience in building backend applications using Java Spring Boot.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-red-500 mb-2">Object Oriented Programming</h3>
                            <p className="text-gray-700 text-base">
                                Strong grasp of OOP principles such as inheritance, polymorphism, encapsulation, and abstraction, with experience applying them in multiple languages (Java, C++, Python).
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
