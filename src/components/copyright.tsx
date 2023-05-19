import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://kalira.in/">
        Kalira
    </Link>{' '}
    {new Date().getFullYear()}.
    </Typography>
);
}
