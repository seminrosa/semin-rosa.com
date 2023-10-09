'use client';

import { Box, Grid, Typography } from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import { BusinessOutlined, PublicOutlined, School, QueryStats, PersonSearch } from "@mui/icons-material";

import style from './page.module.css';
import { JOURNEY_TEXT } from './journeyText'

const oppositeSx = { m: 'auto 0' }
const contentSx = { py: '12px', px: 2 }

export default function Journey() {
    return (
        <Box className={style.journeyContainer}>
            <Timeline position="alternate">
                <Iowa />
                <UConn />
                <Calgary />
                <Impact />
                <Samsung />
                <SNUMS />
                <SNUBAEnd />
                <LGItem />
                <EBSItem />
                <SNUBAStart />   
            </Timeline>
        </Box>
    );
}

function Iowa() {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={oppositeSx}
                align="right"
                variant="body2"
            >
                {JOURNEY_TEXT.iowa.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: JOURNEY_TEXT.iowa.color }} />
                    <TimelineDot sx={{ bgcolor: JOURNEY_TEXT.iowa.color }}>
                        <School />
                    </TimelineDot>
                <TimelineConnector sx={{ bgcolor: JOURNEY_TEXT.iowa.color }} />
            </TimelineSeparator>
            <TimelineContent sx={contentSx}>
                <Grid container alignItems='center'>
                    <Grid xs={6}>
                        <Typography variant='h6' component='span'>
                            {JOURNEY_TEXT.iowa.title}
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant='body1' component='span'>{JOURNEY_TEXT.iowa.location}</Typography>
                    </Grid>
                </Grid>
                <Typography fontStyle='italic'>
                    {JOURNEY_TEXT.iowa.subtitle}
                </Typography>
                <Typography>{JOURNEY_TEXT.iowa.text}</Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

function UConn() {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={oppositeSx}
                align="right"
                variant="body2"
            >
                {JOURNEY_TEXT.uconn.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: JOURNEY_TEXT.uconn.color }} />
                    <TimelineDot sx={{bgcolor: JOURNEY_TEXT.uconn.color }}>
                        <School />
                    </TimelineDot>
                <TimelineConnector sx={{ bgcolor: JOURNEY_TEXT.uconn.color }} />
            </TimelineSeparator>
            <TimelineContent sx={contentSx}>
                <Grid container alignItems='center' justifyContent='flex-end'>
                    <Grid>
                        <Typography variant='body1' component='span'>{JOURNEY_TEXT.uconn.location}</Typography>
                    </Grid>
                    <Grid xs={6}>
                        <Typography variant='h6' component='span'>
                            {JOURNEY_TEXT.uconn.title}
                        </Typography>
                    </Grid>
                </Grid>
                <Typography fontStyle='italic'>
                    {JOURNEY_TEXT.uconn.subtitle}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

function Samsung() {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={oppositeSx}
                align="right"
                variant="body2"
            >
                {JOURNEY_TEXT.samsung.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'black'}} />
                    <TimelineDot sx={{bgcolor: 'black' }}>
                        <BusinessOutlined />
                    </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'black'}} />
            </TimelineSeparator>
            <TimelineContent sx={contentSx}>
                <Grid container alignItems='center'>
                    <Grid xs={6}>
                        <Typography variant='h6' component='span'>
                            {JOURNEY_TEXT.samsung.title}
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant='body1' component='span'>{JOURNEY_TEXT.samsung.location}</Typography>
                    </Grid>
                </Grid>
                <Typography fontStyle='italic'>
                    {JOURNEY_TEXT.samsung.subtitle}
                </Typography>
                <Typography>{JOURNEY_TEXT.samsung.text}</Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

function Calgary() {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={oppositeSx}
                align="right"
                variant="body2"
            >
                {JOURNEY_TEXT.calgary.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: JOURNEY_TEXT.calgary.color }} />
                    <TimelineDot sx={{ bgcolor: JOURNEY_TEXT.calgary.color }}>
                        <PersonSearch />
                    </TimelineDot>
                <TimelineConnector sx={{ bgcolor: JOURNEY_TEXT.calgary.color }} />
            </TimelineSeparator>
            <TimelineContent sx={contentSx}>
                <Grid container alignItems='center'>
                    <Grid xs={6}>
                        <Typography variant='h6' component='span'>
                            {JOURNEY_TEXT.calgary.title}
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant='body1' component='span'>{JOURNEY_TEXT.calgary.location}</Typography>
                    </Grid>
                </Grid>
                <Typography fontStyle='italic'>
                    {JOURNEY_TEXT.calgary.subtitle}
                </Typography>
                <Typography>{JOURNEY_TEXT.calgary.text}</Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

function Impact() {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={oppositeSx}
                align="right"
                variant="body2"
            >
                {JOURNEY_TEXT.impact.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'black'}} />
                    <TimelineDot sx={{bgcolor: 'black' }}>
                        <QueryStats />
                    </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'black'}} />
            </TimelineSeparator>
            <TimelineContent sx={contentSx}>
                <Grid container alignItems='center' justifyContent='flex-end'>
                    <Grid>
                        <Typography variant='body1' component='span'>{JOURNEY_TEXT.impact.location}</Typography>
                    </Grid>
                    <Grid xs={6}>
                        <Typography variant='h6' component='span'>
                            {JOURNEY_TEXT.impact.title}
                        </Typography>
                    </Grid>
                </Grid>
                <Typography fontStyle='italic'>
                    {JOURNEY_TEXT.impact.subtitle}
                </Typography>
                <Typography>{JOURNEY_TEXT.impact.text1}</Typography>
                <Typography>{JOURNEY_TEXT.impact.text2}</Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

function SNUBAStart() {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={oppositeSx}
                align="right"
                variant="body2"
            >
                {JOURNEY_TEXT.snuBaStart.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector sx={{bgcolor: JOURNEY_TEXT.snuBaStart.color}} />
                    <TimelineDot sx={{ bgcolor: JOURNEY_TEXT.snuBaStart.color }}>
                        <School />
                    </TimelineDot>
                <TimelineConnector sx={{bgcolor: JOURNEY_TEXT.snuBaStart.color}} />
            </TimelineSeparator>
            <TimelineContent sx={contentSx}>
                <Grid container alignItems='center' justifyContent='flex-end'>
                    <Grid>
                        <Typography variant='body1' component='span'>{JOURNEY_TEXT.snuBaStart.location}</Typography>
                    </Grid>
                    <Grid xs={6}>
                        <Typography variant='h6' component='span'>
                            {JOURNEY_TEXT.snuBaStart.title}
                        </Typography>
                    </Grid>
                </Grid>
            </TimelineContent>
        </TimelineItem>
    )
}

function SNUBAEnd() {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={oppositeSx}
                align="right"
                variant="body2"
            >
                {JOURNEY_TEXT.snuBaEnd.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector sx={{bgcolor: JOURNEY_TEXT.snuBaStart.color}} />
                    <TimelineDot sx={{ bgcolor: JOURNEY_TEXT.snuBaStart.color }}>
                        <School />
                    </TimelineDot>
                <TimelineConnector sx={{bgcolor: JOURNEY_TEXT.snuBaStart.color}} />
            </TimelineSeparator>
            <TimelineContent sx={contentSx}>
                <Typography variant='h6' component='span'>
                    {JOURNEY_TEXT.snuBaStart.title}
                </Typography>
                <Typography fontStyle='italic'>
                    {JOURNEY_TEXT.snuBaStart.subtitle}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

function SNUMS() {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={oppositeSx}
                align="right"
                variant="body2"
            >
                {JOURNEY_TEXT.snuMaEnd.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector sx={{bgcolor: JOURNEY_TEXT.snuMaEnd.color}} />
                    <TimelineDot sx={{ bgcolor: JOURNEY_TEXT.snuMaEnd.color }}>
                        <School />
                    </TimelineDot>
                <TimelineConnector sx={{bgcolor: JOURNEY_TEXT.snuMaEnd.color}} />
            </TimelineSeparator>
            <TimelineContent sx={contentSx}>
                <Grid container alignItems='center' justifyContent='flex-end'>
                    <Grid>
                        <Typography variant='body1' component='span'>{JOURNEY_TEXT.snuMaEnd.location}</Typography>
                    </Grid>
                    <Grid xs={6}>
                        <Typography variant='h6' component='span'>
                            {JOURNEY_TEXT.snuMaEnd.title}
                        </Typography>
                    </Grid>
                </Grid>
                <Typography fontStyle='italic'>
                    {JOURNEY_TEXT.snuMaEnd.subtitle}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

function EBSItem() {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={oppositeSx}
                variant="body2"
            >
                {JOURNEY_TEXT.ebs.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector sx={{bgcolor: JOURNEY_TEXT.ebs.color}} />
                <TimelineDot sx={{bgcolor: 'white'}}>
                    <PublicOutlined sx={{color: JOURNEY_TEXT.ebs.color}} />
                </TimelineDot>
                <TimelineConnector sx={{bgcolor: JOURNEY_TEXT.ebs.color}} />
            </TimelineSeparator>
            <TimelineContent sx={contentSx}>
                <Grid container alignItems='center'>
                    <Grid xs={6}>
                        <Typography variant='h6' component='span'>
                            {JOURNEY_TEXT.ebs.title}
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant='body1' component='span'>{JOURNEY_TEXT.ebs.location}</Typography>
                    </Grid>
                </Grid>
                <Typography fontStyle='italic'>
                    {JOURNEY_TEXT.ebs.subtitle}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

function LGItem() {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={oppositeSx}
                variant="body2"
            >
                {JOURNEY_TEXT.lg.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector sx={{bgcolor: JOURNEY_TEXT.lg.color}} />
                <TimelineDot sx={{bgcolor: 'white'}} >
                    <BusinessOutlined sx={{color: JOURNEY_TEXT.lg.color}}/>
                </TimelineDot>
                <TimelineConnector sx={{bgcolor: JOURNEY_TEXT.lg.color}} />
            </TimelineSeparator>
            <TimelineContent sx={contentSx}>
                <Grid container alignItems='center' justifyContent='flex-end'>
                    <Grid>
                        <Typography variant='body1' component='span'>{JOURNEY_TEXT.lg.location}</Typography>
                    </Grid>
                    <Grid xs={6}>
                        <Typography variant='h6' component='span'>
                            {JOURNEY_TEXT.lg.title}
                        </Typography>
                    </Grid>
                </Grid>
                <Typography fontStyle='italic'>
                    {JOURNEY_TEXT.lg.subtitle}
                </Typography>
                <Typography>
                    {JOURNEY_TEXT.lg.text}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    )
}