import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StoreProvider from '@context/StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Voice Me Sing',
  description:
    'This is Voice Me Sing Hongik Graduation Project of Team Wandookong',
};

// 기본 html과 body 태그를 정의하는 것 이외에는 코드 제거
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-dvh">
      {/* <StoreProvider> */}
      <body className={`${inter.className} h-full`}>{children}</body>
      {/* </StoreProvider> */}
    </html>
  );
}
