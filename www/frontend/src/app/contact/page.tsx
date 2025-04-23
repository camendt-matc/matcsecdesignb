'use client';

import Image from 'next/image'
import Link from 'next/link';

export default function ContactPage() {

    return (
        <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-800">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center py-20 px-6">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                    It look like we're under construction.
                </h1>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    I'm excited to meet you! Unfortunately, I don't have the contact page live yet. You can still connect with 
                    me using the LinkedIn and Github links located at the bottom of the page.
                </p>

            </section>
        </main>
    );
}
