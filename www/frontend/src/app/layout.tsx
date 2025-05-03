import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";
import {Providers} from "./providers";
import Link from 'next/link';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: "jhops.me by Joseph Hopwood",
  description: "Discover what I bring and more; let's connect and build something amazing together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${roboto.className} bg-background`}>
      <Providers>
          {/* Header */}
          <header className="bg-background/80 shadow-md py-4 sticky top-0 backdrop-blur-sm">
            <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
              <h1 className="text-2xl font-semibold ">
                <span className="text-primary">jhops</span><span className="text-heading">.me</span>
              </h1>
              <ul className="flex space-x-8 text-subheading">
                <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
                <li><Link href="/expertise" className="hover:text-primary transition">Expertise</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
                <li><Link href="/about" className="hover:text-primary transition">About</Link></li>
              </ul>
            </nav>
          </header>

          {/* Main Content */}
          
          <main>
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-background py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
              <p className="text-body mb-4">&copy; 2025 jhops.me by Joseph Hopwood. All Rights Reserved.</p>
              <div className="flex gap-4">
                <a href="https://github.com/JHops881" target="_blank" rel="noopener noreferrer" className="text-heading hover:text-primary">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/josephhopwood" target="_blank" rel="noopener noreferrer" className="text-heading hover:text-primary">
                  LinkedIn
                </a>
              </div>
              <p className="text-body mt-4">
                Let&apos;s connect and build something amazing together.
              </p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
