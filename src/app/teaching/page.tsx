'use client';

import { Box, Collapse, Container, Grid, Link, Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';

import baseStyle from '../page.module.css';
import style from './page.module.css';

import { TeachingBelief, SchoolCourses, Course } from './types';
import { PHILOSOPHY, TEACHING_BELIEFS, COURSES } from './teachingText';

export default function Teaching() {
    return (
        <Box className={baseStyle.main}>
            <Container className={style.content}>
                <Typography variant="h5">Teaching Philosophy</Typography>
                <Typography variant="body1">{PHILOSOPHY}</Typography>
                {TEACHING_BELIEFS.map((teachingBelief: TeachingBelief, index: number) => (
                    <div key={index}>
                        <Typography variant="h6">{teachingBelief.title}</Typography>
                        <Typography variant="body1">{teachingBelief.description}</Typography>
                    </div>
                ))}
                <hr />
            </Container>
            <Container className={style.classes}>
                <Typography variant="h5">Classes</Typography>
                {COURSES.map((schoolCourses: SchoolCourses, index: number) => (
                    <div key={index}>
                        <Typography className={style.schoolName} variant="subtitle1">{schoolCourses.school}</Typography>
                        {schoolCourses.courses.map((course: Course, index: number) => (
                            <div key={index}>
                                <Typography variant="subtitle2" fontWeight="bold">{course.title}</Typography>
                                {course.sections.map((section: string, index: number) => (
                                    <Typography key={index} variant="body1">{section}</Typography>
                                ))}
                                <br />
                                {course.feedbacks ? course.feedbacks?.map((feedback: string, index: number) => (
                                    <Typography key={index} className={style.feedback} variant="body1">{feedback}</Typography>
                                )) : null}
                                <br />
                            </div>
                        ))}
                        <br />
                    </div>
                ))}
            </Container>
        </Box>
    );
}
