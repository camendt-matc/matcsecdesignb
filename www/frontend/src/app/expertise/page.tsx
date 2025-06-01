'use client';

import Link from 'next/link'
import Image from 'next/image'

export default function ExpertisePage() {

    return (
        <main className="min-h-screen">

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center bg-background2 text-center py-20 px-6">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-primary via-secondary to-tertiary inline-block text-transparent bg-clip-text">
                    Expertise
                </h1>

                <p className="text-lg max-w-3xl mx-auto">
                    A collection that highlights my skills and experience. Browse below to see how I align with your needs.
                </p>
            </section>

            {/* Catalog Section */}
            <section className="container mx-auto py-20 px-6">

                {/* Cloud Section */}
                <div className="mb-25" id='cloud'>
                    <h2 className="text-4xl font-bold text-heading mb-4 ml-6">
                        Cloud
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-card overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-heading mb-2">AWS</h3>
                            <p>
                                Hands-on experience with Amazon Web Services (AWS) deployments using EC2, S3, VPC, IAM, CloudWatch, Lambda, and&nbsp;
                                <Link className="text-blue-400 inline-flex" target="_blank" rel="noopener noreferrer" href="https://github.com/jhopwood-matc/aws-admin-proj2">CloudFormation<Image src="/external-link.svg" width={16} height={16} alt="External Link by krystonschwarze"></Image></Link>.
                                Intentional about cost optimization and highly-available architectures.
                            </p>
                        </div>

                        <div className="bg-card overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-heading mb-2">Microsoft Azure</h3>
                            <p>
                                Hands-on experience with Azure for deploying .NET web applications mainly using Virtual Machines and App Services for hosting,
                                Virtual Networks, Blob Storage for storing web assets, and Azure DevOps services for creating build/test and release pipelines.                                
                            </p>
                        </div>

                    </div>
                </div>

                {/* DevOps Section */}
                <div className="mb-25" id='devops'>
                    <h2 className="text-4xl font-bold text-heading mb-4 ml-6">
                        DevOps
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="bg-card overflow-hidden p-6 flex flex-col justify-between">
                    <h3 className="text-xl font-semibold text-heading mb-2">Python</h3>
                            <p>
                                Experienced using Python for automation including automating cloud&nbsp;
                                <Link className="text-blue-400 inline-flex" target="_blank" rel="noopener noreferrer" href="https://github.com/jhopwood-matc/adv-cloud-mirror/blob/main/week%206%20-%20Error%20Handling/s3website.py">deployments<Image src="/external-link.svg" width={16} height={16} alt="External Link by krystonschwarze"></Image></Link>
                                &nbsp;and <Link className="text-blue-400 inline-flex" target="_blank" rel="noopener noreferrer" href="https://github.com/jhopwood-matc/adv-cloud-mirror/blob/main/week%205%20-%20SNS/reboot_high_ec2.py">monitoring<Image src="/external-link.svg" width={16} height={16} alt="External Link by krystonschwarze"></Image></Link>
                                with Boto3 or serverless scripting for cloud with AWS Lambda.
                            </p>
                        </div>

                        <div className="bg-card overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-heading mb-2">CI/CD Pipelines</h3>
                            <p>
                                Experienced automating builds, tests, and deployments using&nbsp;
                                <Link className="text-blue-400 inline-flex" target="_blank" rel="noopener noreferrer" href="https://github.com/jhopwood-matc/jenkins-project">Jenkins<Image src="/external-link.svg" width={16} height={16} alt="External Link by krystonschwarze"></Image></Link>
                                , Azure DevOps, and&nbsp;
                                <Link className="text-blue-400 inline-flex" target="_blank" rel="noopener noreferrer" href="https://github.com/JHops881/personal-website/blob/main/.github/workflows/main.yaml">GitHub Actions<Image src="/external-link.svg" width={16} height={16} alt="External Link by krystonschwarze"></Image></Link>
                                for fast, reliable, and repeatable deployments.
                            </p>
                        </div>

                        <div className="bg-card overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-heading mb-2">Containerization</h3>
                            <p>
                                Experienced containerizing applications with Docker and orchestrating with Docker Compose or AWS ECS for scalability and efficient resource utilization.
                            </p>
                        </div>

                        <div className="bg-card overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-heading mb-2">Terraform</h3>
                            <p>
                                Experienced using Terraform for automated infrastructure deployments with AWS and Azure. 
                            </p>
                        </div>

                        <div className="bg-card overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-heading mb-2">Bash</h3>
                            <p>
                                Experienced with using Bash shell scripting for Linux administration and a multitude of automation applications like 
                                deployments, build scripts, and configuration.
                            </p>
                        </div>

                        <div className="bg-card overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-heading mb-2">Linux</h3>
                            <p>
                            Two years of hands-on classroom experience with Linux distributions involving administration, shell scripting, package management, and system monitoring.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Development Section */}
                <div id='development'>
                    <h2 className="text-4xl font-bold text-heading mb-4 ml-6">
                        Development
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-card overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-heading mb-2">Git/GitHub</h3>
                            <p>
                                Four years of Git experience for version control and collaboration in both academic environments and for personal projects. 
                            </p>
                        </div>

                        <div className="bg-card overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-heading mb-2">Object Oriented Programming</h3>
                            <p>
                                Strong grasp of fundamental OOP principles with experience applying them in multiple languages (Java, C++, Rust, Python).
                            </p>
                        </div>

                        <div className="bg-card overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-heading mb-2">Full-Stack</h3>
                            <p>
                                Entry-level frontend experience using Next.js with Tailwind CSS to build&nbsp;
                                <Link className="text-blue-400 inline-flex" target="_blank" rel="noopener noreferrer" href="https://github.com/JHops881/personal-website">this website<Image src="/external-link.svg" width={16} height={16} alt="External Link by krystonschwarze"></Image></Link>
                                as well as Nginx for load-balancing and Java Spring Boot for the backend.
                            </p>
                        </div>


                        <div className="bg-card overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-heading mb-2">Python</h3>
                            <p>
                                Experienced using Python for&nbsp;
                                <Link className="text-blue-400 inline-flex" target="_blank" rel="noopener noreferrer" href="https://github.com/JHops881/yuxi-boss">application<Image src="/external-link.svg" width={16} height={16} alt="External Link by krystonschwarze"></Image></Link>
                                development. 
                            </p>
                        </div>

                        <div className="bg-card overflow-hidden p-6 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-heading mb-2">SQL</h3>
                            <p>
                                Experienced with SQL for relational database design and querying with MySQL.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
