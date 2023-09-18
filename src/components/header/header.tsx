import { Container } from '@mui/material'
import headerStyles from './header.module.css'

export default function Header({children}) {
    return (
        <header className={headerStyles.header}>{children}</header>
    )
}