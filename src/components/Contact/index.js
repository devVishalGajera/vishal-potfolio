import {useState} from "react";
import {Box, Grid, Stack, TextareaAutosize, TextField, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import mainIcon from "../../assets/icon/mail.svg";
import "../../assets/css/about.css";

const About = () => {
    const [background, setBackground] = useState(false);

    const handleScroll = (e) => {
        e.target.scrollTop > 1 ? setBackground(true) : setBackground(false);
    }

    return (<div className='bg-extra-light-blue h-100'>
        <div className='main-div slide h-100' onScroll={handleScroll}>
            <Stack direction="row" alignItems='center' justifyContent='space-between'
                   className='w-100 h-100 about-card-main'>
                <Stack direction="row" alignItems='start' justifyContent='center'
                       className='about-card w-100'>
                    <Box maxWidth={650} className='w-100'>
                        <Typography className='josefin-sans text-start text-uppercase pb-2 text-dark'
                                    variant="h6"
                                    component="h6">
                            Contact Me
                        </Typography>
                        <Typography className='josefin-sans text-start fw-bolder text-uppercase pb-2 light-blue'
                                    variant="h4"
                                    component="h4">
                            Let's talk!
                        </Typography>
                        <Typography className='josefin-sans fw-400 letter-spacing-0 text-start pb-2 text-dark'
                                    variant="h6"
                                    component="h6">
                            To discuss career & freelance opportunities, contact me directly or fill out the form and
                            I'll get back to you promptly.
                        </Typography>
                        <Typography
                            className='josefin-sans fw-400 d-inline-flex gap-2 letter-spacing-0 text-start pb-2 text-dark'
                            variant="h6"
                            component="h6">
                            <img src={mainIcon} alt=''/>
                            <a href="mailto:vishalgajera101@gmail.com"
                               className='text-decoration-none mail-to text-dark'>
                                vishalgajera101@gmail.com
                            </a>
                        </Typography>
                    </Box>
                </Stack>
                <Stack direction="column" className='about-card-content p-2 pb-3 w-100' alignItems='start'
                       justifyContent='center'>
                    <Box maxWidth={700} className='w-100'>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography className='josefin-sans text-start fw-400 pb-2 light-blue'
                                            variant="h6"
                                            component="h6">
                                    Name
                                </Typography>
                                <TextField className='w-100' sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: 'white',
                                        borderRadius: '43px',
                                        '& fieldset': {
                                            color: 'black',
                                            borderColor: 'transparent !important',
                                            borderRadius: '43px',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'lightslategrey !important',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#456268 !important',
                                        },
                                    },
                                }}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography className='josefin-sans text-start fw-400 pb-2 light-blue'
                                            variant="h6"
                                            component="h6">
                                    Your Email
                                </Typography>
                                <TextField className='w-100' sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: 'white',
                                        borderRadius: '43px',
                                        '& fieldset': {
                                            color: 'black',
                                            borderColor: 'transparent !important',
                                            borderRadius: '43px',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'lightslategrey !important',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#456268 !important',
                                        },
                                    },
                                }}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className='josefin-sans text-start fw-400 pb-2 light-blue'
                                            variant="h6"
                                            component="h6">
                                    Message
                                </Typography>
                                <TextareaAutosize className='w-100 text-area-contact'
                                                  maxRows={10}
                                                  minRows={7}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
                <Stack direction="column" alignItems='center'
                       className={`nav-right ${background ? 'nav-with-bg' : ''}`} justifyContent='space-between'>
                    <Stack direction="column" alignItems='center' justifyContent='center'>
                        <Box className='nav-right-item'>
                            <NavLink
                                className={`nav-right-link nav-right-link-work josefin-sans cream-text light-blue fw-bold  ${background ? 'text-dark-hover' : ''}`}
                                to='/'>
                                Home
                            </NavLink>
                        </Box>
                        <Box className='nav-line bg-dark-blue'/>
                    </Stack>
                    <Box className='nav-right-item'>
                        <Typography
                            className={`josefin-sans nav-item-n-link cream-text light-blue fw-bold ${background ? 'text-dark-hover' : ''}`}>
                            @/2023
                        </Typography>
                    </Box>
                </Stack>
            </Stack>
        </div>
    </div>)
};
export default About;
