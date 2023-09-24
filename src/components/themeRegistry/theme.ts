import { createTheme } from "@mui/material";
import { Tinos } from "next/font/google";

const tinos = Tinos({
    subsets: ['latin'],
    weight: ['400']
});

const theme = createTheme({
    palette: {
        mode: 'light'
    },
    typography: {
        fontFamily: tinos.style.fontFamily,
        fontSize: 16
    }
});

export default theme;