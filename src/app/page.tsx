import { Box, Container, Grid, Icon, IconButton, Typography } from "@mui/material";
import { LinkedIn, Email } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import style from './page.module.css';
import seminYellow1 from '../../public/semin_yellow_1.jpg';

import { HOME_TEXT } from './homeText';

export default function Home() {
    return (
        <div>
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css" />
        </Head>
          <Box className={style.main}>
            <Container className={style.content}>
                <Grid container alignItems="center">
                    <Grid item xs={6}>
                        <div className={style.imageWrapper}>
                            <Image className={style.image} src={seminYellow1} alt={"semin_yellow"} />
                        </div>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="body1" component="span">
                            <pre style={{fontFamily: 'inherit', whiteSpace: 'pre-wrap'}}>{HOME_TEXT}</pre>
                        </Typography>
                        <Link href="/CV.pdf">View CV</Link>
                        <Box className={style.contactFooter}>
                          <IconButton href="https://www.linkedin.com/in/semin-park-0021b245">
                            <LinkedIn/>
                          </IconButton>
                          <IconButton href="https://scholar.google.com/citations?user=pPkYRlwAAAAJ&hl=en">
                            <Icon baseClassName="ai" className="ai-google-scholar-square" />
                          </IconButton>
                          <IconButton href="https://www.researchgate.net/profile/Semin-Park-4">
                            <Icon baseClassName="ai" className="ai-researchgate-square" />
                          </IconButton>
                          <IconButton href={`mailto:semin.park@psu.edu`}>
                            <Email />
                          </IconButton>
                        </Box>

                    </Grid>
                </Grid>
              </Container>
          </Box>
        </div>
    );
}