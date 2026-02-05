import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'String | Movies & TV Shows Directory',
    template: '%s | String',
  },
  description:
    'Discover popular movies and trending TV shows. Browse ratings, release dates, and detailed information powered by TMDB.',
  keywords: [
    'movies',
    'TV shows',
    'film',
    'streaming',
    'ratings',
    'TMDB',
    'popular movies',
    'trending shows',
  ],
  authors: [{ name: 'String' }],
  creator: 'String',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'String',
    title: 'String | Movies & TV Shows Directory',
    description:
      'Discover popular movies and trending TV shows. Browse ratings, release dates, and detailed information.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'String | Movies & TV Shows Directory',
    description:
      'Discover popular movies and trending TV shows. Browse ratings, release dates, and detailed information.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark'>
      <head>
        <link rel='preconnect' href='https://image.tmdb.org' />
        <link rel='dns-prefetch' href='https://image.tmdb.org' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-900 text-white antialiased`}>
        <Header />
        <main className='min-h-screen pt-20 pb-24 md:pt-24 md:pb-20'>
          {children}
        </main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
