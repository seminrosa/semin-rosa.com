'use client';

import { Box, Drawer, IconButton, Link, LinkOwnProps, LinkProps, Typography, useMediaQuery } from '@mui/material'
import style from './header.module.css'
import { Dispatch, PropsWithChildren, SetStateAction, useState } from 'react'
import { styled } from '@mui/material/styles';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

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
    const isMobileMatch = useMediaQuery("(max-width:600px)");

    return (
        <header className={style.header}>
            <Typography variant='h5'>
                <Link style={{color: 'inherit', textDecoration: 'none', fontWeight: 'bold'}} component={NextLink} href='/'>SEMIN PARK</Link>
            </Typography>
            {showMenu(isMobileMatch, currentRoute, menuOpen, setMenuOpen)}
        </header>
    )
}

function showMenu(isMobileMatch: boolean, currentRoute: string, menuOpen: boolean, setMenuOpen: Dispatch<SetStateAction<boolean>>) {
    return (isMobileMatch ? mobileMenu(currentRoute, menuOpen, setMenuOpen) : links(currentRoute))
}

function mobileMenu(currentRoute: string, menuOpen: boolean, setMenuOpen: Dispatch<SetStateAction<boolean>>) {
    return (
        <div className={style.navContainer}>
            <IconButton onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <ExpandLess /> : <ExpandMore />}
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

function links(currentRoute: string) {
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