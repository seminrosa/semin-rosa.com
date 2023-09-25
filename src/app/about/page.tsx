import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

import baseStyle from '../page.module.css';
import style from './page.module.css';
import seminCommencement1 from '../../../public/semin_commencement_1.jpg';

const aboutText = `This is the about page.`

export default function About() {
    return (
        <Box className={baseStyle.main}>
            <Grid container>
                <Grid item xs>
                    <Typography variant="body1" component="span">
                        <pre style={{fontFamily: 'inherit', whiteSpace: 'pre-wrap'}}>{aboutText}</pre>
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <div className={style.imageWrapper}>
                        <Image className={style.image} src={seminCommencement1} alt={"semin_yellow"} height="400" />
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}