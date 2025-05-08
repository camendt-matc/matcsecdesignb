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
                    I&apos;m an IT Cloud DevOps Specialist graduating from Madison College in May. 
                    With a career in IT, I love that I can combine my passion for computer technology with my passion for art.
                    Namely, it is the problem solving process that I have fallen in love with. 
                    When approached with challenges, I get the opportunity to come up with original and creative 
                    solutions where my imagination is the limit: and they make a real-world difference.  
                    <br /><br />
                    When I&apos;m not 11 tabs deep into the documentation-filled troubleshooting rabbit hole,
                    I love to exchange language with people online to learn Mandarin Chinese.
                    My other hobbies include cooking, weightlifting, and learning. I love listening to new music or
                    being exposed to new cultures. I have a particular soft spot for animals and wildlife, and I
                    thrive the most in social and collaborative settings.

                </p>
            </section>
        </main>
    );
}
