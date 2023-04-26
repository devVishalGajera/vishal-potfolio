import {useEffect} from "react";
import {Box, Stack, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

import linkedinIcon from "../../assets/icon/linkedin.svg";
import githubIcon from "../../assets/icon/github.svg";
import "../../assets/css/home.css";

const Home = () => {

    useEffect(() => {
        // let element = document.getElementsByTagName('body')[0];
        // element.style.height = '100vh';
        // element.style.overflow = 'hidden';
    }, []);

    return (
        <div className='bg-extra-light-blue h-100'>
            <div className='slide-overlay'></div>
            <div className="container-fluid main-layout h-100 bg-cream py-3">
                <Stack className='h-100' justifyContent='center' direction='column'>
                    <Stack className='w-100 personal-detail' justifyContent='space-evenly' direction="row"
                           flexWrap='wrap' spacing={2}>
                        <Stack direction="column" alignItems='start' justifyContent='end' flexWrap='wrap'
                               maxWidth={360}>
                            <Stack direction="column" mb={3}>
                                <Typography className='josefin-sans text-uppercase pb-2 light-blue' variant="h6"
                                            component="h6">
                                    Vishal Gajera
                                </Typography>
                                <Typography className='josefin-sans pb-2 light-blue' fontSize={14} variant="h6"
                                            component="h6">
                                    Strategic Web Designer and Web Developer
                                </Typography>
                                <Typography className='josefin-sans pb-2 light-blue' fontSize={14} variant="h6"
                                            component="h6">
                                    I am software developer, I have 2.5+ years’ experience in this industry.
                                    I am working on various technologies, also I am working on the
                                    frontend & backend technologies. I excel at working with a team,
                                    having experienced managing a remote group of developers, I am
                                    also capable of single-handedly delivering projects from start to
                                    finish.
                                </Typography>
                                <Typography className='josefin-sans light-blue' fontSize={14} variant="h6"
                                            component="h6">
                                    Currently working as a Senior Full Stack Developer at <span className='company-name'
                                                                                                onClick={() => window.open('https://bvminfotech.com/', '_blank')}>BVM Infotech</span>.
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack direction="column" alignItems='end' justifyContent='center'>
                            <Box>
                                <NavLink to='/work' className='text-decoration-none'>
                                    <Typography className='home-list text-uppercase light-blue fw-normal dancing-font'
                                                variant="h1"
                                                component="h1">
                                        Work
                                    </Typography>
                                </NavLink>
                                <NavLink to='/about-me' className='text-decoration-none'>
                                    <Typography className='home-list text-uppercase light-blue fw-normal dancing-font'
                                                variant="h1"
                                                component="h1">
                                        About
                                    </Typography>
                                </NavLink>
                                <NavLink to='/contact-me' className='text-decoration-none'>
                                    <Typography
                                        className='home-list text-uppercase light-blue fw-normal dancing-font'
                                        variant="h1"
                                        component="h1">
                                        Contact
                                    </Typography>
                                </NavLink>
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack direction="column" alignItems='center' className='nav-right' justifyContent='space-between'>
                        <Stack direction="column" alignItems='center' justifyContent='center'
                               className='nav-right-first'>
                            <Box className='nav-right-item transform-none'>
                                <NavLink target="_blank" className='nav-right-link josefin-sans light-blue fw-bold'
                                         to='https://www.linkedin.com/in/vishal-gajera-3b51b0208/'>
                                    <img className='img-shadow' src={linkedinIcon} alt=''/>
                                </NavLink>
                            </Box>
                            <Box className='nav-right-item transform-none'>
                                <NavLink target="_blank" to='https://github.com/Vishal10001/'
                                         className='nav-right-link josefin-sans light-blue fw-bold'>
                                    <img className='img-shadow-black' src={githubIcon} alt=''/>
                                </NavLink>
                            </Box>
                            <Box className='nav-line bg-dark-blue'/>
                        </Stack>
                        <Box className='nav-right-item'>
                            <Typography className='josefin-sans nav-item-n-link light-blue fw-bold'>
                                @/2023
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
            </div>
        </div>
    )
};
export default Home;
