import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

import style from '../page.module.css';
import seminYellow1 from '../../../public/semin_yellow_1.jpg';
import Link from "next/link";

const aboutText = `This is a page about Semin Park. Add more details here. Keep adding details. This goes on and on and on and on and on on and on and on and on and on on and on and on and on and on on and on and on and on and on on and on and on and on and on on and on and on and on and on on and on and on and on and on.
Test a new line



And a few extra lines.


`

export default function About() {
    return (
        <Box className={style.main}>
            <h1>About</h1>
            <hr className={style.hr}/>
            <Link href="/CV.pdf">View CV</Link>
            <Grid container>
                <Grid item xs={6}>
                    <Typography variant="body1" component="span">
                        <pre style={{fontFamily: 'inherit', whiteSpace: 'pre-wrap'}}>{aboutText}</pre>
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Image style={{float: 'right'}} src={seminYellow1} alt={"semin_yellow"} width={600} />
                </Grid>
            </Grid>
        </Box>
    );
}