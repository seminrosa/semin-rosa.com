import { Container } from '@mui/material'
import headerStyles from './header.module.css'
import { PropsWithChildren, ReactNode } from 'react'

export default function Header(props: PropsWithChildren) {
    return (
        <header className={headerStyles.header}>{props.children}</header>
    )
}