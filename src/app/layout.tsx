import ThemeRegistry from '@/components/themeRegistry/ThemeRegistry'
import type { Metadata } from 'next'
import { Link, MenuItem, Typography } from '@mui/material'
import Header from '@/components/header/header';

export const metadata: Metadata = {
  title: 'Semin Park',
  description: 'Semin Park Professional Portfolio',
};

const LINKS = [
  { text: 'About', href: '/about' },
  { text: 'Research', href: '/research' },
  { text: 'Teaching', href: '/teaching' },
  { text: 'Contact', href: '/contact' }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header>
            <MenuItem component={Link} href='/'>
              <Typography textAlign="center" variant="h4">SEMIN PARK</Typography>
            </MenuItem>
            <div style={{marginRight: 0, marginLeft: 'auto', display: 'flex', flexDirection: 'row'}}>
              {LINKS.map((link) => (
                <MenuItem component={Link} key={link.text} href={link.href}>
                  <Typography textAlign="center" variant="h4">{link.text}</Typography>
                </MenuItem>
              ))}
            </div>
          </Header>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
