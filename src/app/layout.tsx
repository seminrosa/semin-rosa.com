import ThemeRegistry from '@/components/themeRegistry/ThemeRegistry'
import type { Metadata } from 'next'
import Header from '@/components/header/header';
import '../../public/css/academicons.min.css';

export const metadata: Metadata = {
  title: 'Semin Park',
  description: 'Semin Park - Professor of Management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
