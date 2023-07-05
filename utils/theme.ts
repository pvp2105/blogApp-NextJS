import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
    palette: {
        primary: {
            main: '#00f',
        },
        secondary: {
            light: '#EDF7FA',
            main: '#00A8CC',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: 'Heebo, sans-serif',
    },

    //style lại cho component Container
    components: {
        MuiContainer: {
            styleOverrides: {
                maxWidthSm: {
                    maxWidth: '680px',
                    '@media (min-width: 600px)': {
                        maxWidth: '680px',
                    },
                },
                maxWidthMd: {
                    maxWidth: '860px',
                    '@media (min-width: 900px)': {
                        maxWidth: '860px',
                    }
                }

            },
            defaultProps: {
                maxWidth: 'md',
            },
            variants: []
        },
        // MuiTypography: {
        //     styleOverrides: {
        //         root: {
        //             color: 'black',

        //             '&:hover': {
        //                 color: '#FF6464',
        //             },
        //         },
        //     },
        // },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'contained', color: 'primary' },
                    style: {
                        color: 'white',
                    },
                },
            ],
        },
    }
});

