'use client';

export default function ContactPage() {

    return (
        <main className="min-h-screen bg-gradient-to-br from-background to-background2 text-body">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center py-20 px-6">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-heading">
                    About Me
                </h1>
                <p className="text-lg max-w-3xl mx-auto text-left">
                    I am a recent IT Cloud DevOps graduate with hands-on experience providing technical support and tutoring
                    Python at Madison College. I have four months of experience in a student support role assisting with hardware/software
                    troubleshooting and academic support. Additionally, I have a strong foundation in cloud technologies,
                    DevOps pipelines, and scripting, with personal projects involving automated AWS deployment scripts and containerized web CI/CD.
                    I am passionate about delivering reliable, scalable solutions and continuing to grow in cloud infrastructure and automation.
                </p>
            </section>
        </main>
    );
}
