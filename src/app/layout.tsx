import type { Metadata } from 'next';
import Header from '@_component/Header';
import RQProvider from '@lib/ReactQueryProvider';

import './_styles/globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <RQProvider>
          <div className="wrap">
            <Header />
            {children}
          </div>
        </RQProvider>
      </body>
    </html>
  );
}
