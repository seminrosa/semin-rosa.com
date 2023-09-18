'use client';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseLine from '@mui/material/CssBaseline';
import EmotionCacheProvider from './EmotionCache';
import theme from './theme';

export default function ThemeRegistry({children}: { children: React.ReactNode }) {
    return (
        <EmotionCacheProvider options={{ key: 'mui' }}>
            <ThemeProvider theme={theme}>
                <CssBaseLine />
                {children}
            </ThemeProvider>
        </EmotionCacheProvider>
    )
}