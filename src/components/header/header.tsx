'use client';

import { Box, Drawer, Hidden, IconButton, Link, LinkProps, Typography } from '@mui/material'
import style from './header.module.css'
import { Dispatch, PropsWithChildren, SetStateAction, useState } from 'react'
import { styled } from '@mui/material/styles';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from '@mui/icons-material';

const LINKS = [
    { text: 'Home', href: '/'},
    { text: 'Research', href: '/research' },
    { text: 'Teaching', href: '/teaching' },
    { text: 'Journey', href: '/journey' }
];

type HeaderLinkProps = {
    currentRoute?: string
}

const HeaderLink = styled((props: HeaderLinkProps & LinkProps) => <Link {...props} />, {
    shouldForwardProp: (prop) => prop !== 'currentRoute'
})<HeaderLinkProps>(({href, currentRoute}) => ({
    textDecoration: href === currentRoute ? 'underline' : 'none',
    color: 'inherit',
    paddingRight: '1rem',
    paddingLeft: '1rem',
    ":hover": {
        textDecoration: 'underline'
    }
}));

export default function Header(props: PropsWithChildren) {
    const [menuOpen, setMenuOpen] = useState(false);
    const currentRoute = usePathname();

    return (
        <header className={style.header}>
            <Typography variant='h5'>
                <Link style={{color: 'inherit', textDecoration: 'none', fontWeight: 'bold'}} component={NextLink} href='/'>SEMIN PARK</Link>
            </Typography>
            <Hidden only="xs">
                <Links currentRoute={currentRoute} />
            </Hidden>
            <Hidden smUp>
                <MobileMenu currentRoute={currentRoute} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </Hidden>
        </header>
    )
}

function MobileMenu({currentRoute, menuOpen, setMenuOpen}: {currentRoute: string, menuOpen: boolean, setMenuOpen: Dispatch<SetStateAction<boolean>>}) {
    return (
        <div className={style.navContainer}>
            <IconButton onClick={() => setMenuOpen(!menuOpen)}>
                <Menu />
            </IconButton>
            <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
                <Box onClick={() => setMenuOpen(false)}>
                    {LINKS.map((link) => (
                        <Typography className={style.drawerLink} key={link.text} variant='h5'>
                            <HeaderLink currentRoute={currentRoute} component={NextLink} href={link.href}>{link.text}</HeaderLink>
                        </Typography>
                    ))}
                </Box>
            </Drawer> 
        </div>
    )
}

function Links({currentRoute}: {currentRoute: string}) {
    return (
        <div className={style.navContainer}>
            {LINKS.map((link) => (
                <Typography key={link.text} variant='h5'>
                    <HeaderLink currentRoute={currentRoute} component={NextLink} href={link.href}>{link.text}</HeaderLink>
                </Typography>
            ))}
        </div>
    )
}