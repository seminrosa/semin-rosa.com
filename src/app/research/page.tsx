'use client';

import { Box, Collapse, Container, Grid, Link, Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';

import baseStyle from '../page.module.css';
import style from './page.module.css';

import { ResearchTopic, Paper } from './types';
import { OVERVIEW, RESEARCH } from './researchText';

export default function Research() {
    return (
        <Box className={baseStyle.main}>
            <Container className={baseStyle.content}>
                <Typography variant="body1">{OVERVIEW}</Typography>
                <hr className={baseStyle.hr}/>
                <Grid container>
                    <Grid item xs>
                    {RESEARCH.map((researchTopic, index) => (
                        <div key={index}>
                            <ResearchItem researchTopic={researchTopic} />
                            <hr className={baseStyle.hr}/>
                        </div>
                    ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

function ResearchItem({researchTopic}: {researchTopic: ResearchTopic}) {
    return (
        <div className={style.researchItem}>
            <Typography variant="h5" className={style.researchItemTitle}>
                {researchTopic.title}
            </Typography>
            <Typography variant="body1">
                {researchTopic.description}
            </Typography>
            {researchTopic.papers.map((paper, index) => <PaperItem key={index} paper={paper} />)}
        </div>
    );
}

function PaperItem({paper}: {paper: Paper}) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div onClick={() => setOpen(!open)} className={style.expandButton}>
                {open ? <ExpandLess /> : <ExpandMore />}
                <Typography variant="subtitle1">{paper.title}</Typography>
            </div>
            <Collapse in={open}>
                <div className={style.paperContainer}>
                    <Typography align="justify" variant="body2">{paper.citation}</Typography>
                    {paper.link ? <Link variant="body2">{paper.link}</Link> : null}
                    {paper.description ? <div><br /><Typography align="justify" variant="body2">{paper.description}</Typography></div> : null}
                </div>
            </Collapse>
        </div>
    );
}