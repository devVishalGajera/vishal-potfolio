import {useState} from "react";
import {Box, Button, Stack, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import myCV from "../../assets/cv/Vishal gajera React.pdf";
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
                <Stack direction="row" alignItems='center' justifyContent='center'
                       className='about-card w-100'>
                    <Box>
                        <img className='rounded-circle' src='https://picsum.photos/300/300' alt=''/>
                    </Box>
                </Stack>
                <Stack direction="column" className='about-card-content p-2 pb-3 w-100' alignItems='start'
                       justifyContent='center'>
                    <Box maxWidth={650}>
                        <Typography className='josefin-sans text-start text-uppercase pb-2 text-dark'
                                    variant="h6"
                                    component="h6">
                            About Me
                        </Typography>
                        <Typography className='josefin-sans text-start fw-bolder text-uppercase pb-2 light-blue'
                                    variant="h4"
                                    component="h4">
                            Front-end developer
                        </Typography>
                        <Typography className='josefin-sans text-start pb-2 fw-semibold text-dark'
                                    variant="h6"
                                    component="h6">
                            <i>Specialising in React.js and Node.js development.</i>
                        </Typography>
                        <Typography className='josefin-sans fw-400 letter-spacing-0 text-start pb-2 text-dark'
                                    variant="h6"
                                    component="h6">
                            Hi! I'm Vishal Gajera, front-end developer from a metropolis city in Gujarat, India.
                        </Typography>
                        <Typography className='josefin-sans fw-400 letter-spacing-0 text-start pb-2 text-dark'
                                    variant="h6"
                                    component="h6">
                            Over several years, I've dedicated much of my free time to gaining proficiency in
                            several
                            front-end technologies and design tools, together with some back-end knowledge.
                        </Typography>
                        <Typography className='josefin-sans fw-400 letter-spacing-0 text-start pb-2 text-dark'
                                    variant="h6"
                                    component="h6">
                            My mission is to contribute in open-source sites and learn new technologies.
                        </Typography>
                        <Stack direction="row" alignItems='center' className='mt-3' justifyContent='start' gap={2}>
                            <Button sx={{
                                backgroundColor: '#456268', color: '#fff', '&:hover': {
                                    backgroundColor: '#79A3B1',
                                },
                            }}>
                                <NavLink to='/contact-me' className='text-white text-decoration-none'> Contact
                                    ME</NavLink>
                            </Button>
                            <Button sx={{
                                backgroundColor: '#456268', color: '#fff', '&:hover': {
                                    backgroundColor: '#79A3B1',
                                },
                            }}>
                                <a className='text-decoration-none text-white' download='Vishal Gajera' href={myCV}>Download CV</a>
                            </Button>
                        </Stack>
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
