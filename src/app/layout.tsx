import ThemeRegistry from '@/components/themeRegistry/ThemeRegistry'
import type { Metadata } from 'next'
import Header from '@/components/header/header';
import '../../public/css/academicons.min.css';

export const metadata: Metadata = {
  title: 'Semin Park, Ph.D.',
  description: 'Dr. Semin Park is a researcher at the Smeal College of Business, the Penn State University, specializing in interpersonal dynamics in teams',
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
