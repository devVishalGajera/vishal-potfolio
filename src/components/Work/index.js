import {Box, Stack, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

import reactIcon from '../../assets/icon/react.svg';
import reduxIcon from '../../assets/icon/redux.svg';
import cssIcon from '../../assets/icon/css.svg';
import htmlIcon from '../../assets/icon/html.svg';
import bootstrapIcon from '../../assets/icon/bootstrap.svg';
import antdIcon from '../../assets/icon/antds.svg';
import nodeJsIcon from '../../assets/icon/nodejs.svg';
import scssIcon from '../../assets/icon/sass.svg';
import muiIcon from '../../assets/icon/material-ui.svg';
import nextJsIcon from '../../assets/icon/nextjs.svg';
import storyBookIcon from '../../assets/icon/storybook.svg';
import typescriptIcon from '../../assets/icon/typescript.svg';

import "../../assets/css/work.css";
import {useEffect} from "react";

const Work = () => {
    var slideIndex = 1;
    useEffect(() => {
        showDivs(slideIndex);
    }, []);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function carousel() {
        plusDivs(1);
    }

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        if (n > x.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = x.length
        }
        if (x.length > 0) {
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[slideIndex - 1].style.display = "block";
        }
        setTimeout(carousel, 70000);
    }

    return (
        <div className='bg-cream h-100'>
            <div className="container-fluid slide-overlay-top-bottom bg-extra-light-blue h-100  py-3">
                <Stack className='h-100' justifyContent='center' direction='column'>
                    <Stack className='w-100 h-100' justifyContent='space-evenly' direction="row" flexWrap='wrap'>
                        <Stack direction="column" alignItems='start' spacing={2} className='position-relative' justifyContent='center'>
                            <Box className='mySlides animate-fading project-overview p-2'>
                                <Typography className='josefin-sans text-start pb-2 cream-text'
                                            variant="h6"
                                            component="h6">
                                    Neo Benk
                                </Typography>
                                <Typography maxWidth={600} className='josefin-sans pb-3 cream-text text-start'
                                            fontSize={14} variant="h6"
                                            component="h6">
                                    This project is related to Online Money Transfer. You can login with Google and
                                    Facebook. In this you
                                    can Transfer, Send and Receive Currency and as well as digital currency from other
                                    user.
                                </Typography>
                                <Typography maxWidth={600} className='josefin-sans pb-1 cream-text text-start'
                                            fontSize={15} variant="h6"
                                            component="h6">
                                    Skills were used:
                                </Typography>
                                <Stack alignItems='center' direction='row' spacing={1}>
                                    <img src={reactIcon} alt=''/>
                                    <img src={reduxIcon} alt=''/>
                                    <img src={cssIcon} alt=''/>
                                    <img src={htmlIcon} alt=''/>
                                    <img src={bootstrapIcon} alt=''/>
                                    <img src={antdIcon} alt=''/>
                                </Stack>
                            </Box>
                            <Stack className='mySlides animate-fading project-overview p-2'>
                                <Typography className='josefin-sans text-start pb-2 cream-text'
                                            variant="h6"
                                            component="h6">
                                    Dietech
                                </Typography>
                                <Typography maxWidth={600} className='josefin-sans pb-3 cream-text text-start'
                                            fontSize={14} variant="h6"
                                            component="h6">
                                    Dietech is a highly specialized program that was developed with the help of a
                                    committee of Dietitians,
                                    Dietetic Technicians, Certified Dietary Managers, Food Service Directors and Health
                                    Department
                                    personnel. Dietech shows an important evolution in software that has previously
                                    operated in the field of
                                    Food Service & Nutrition. It incorporates both the most recent developments in Food
                                    Service and
                                    computer technology and combines them into a powerful all-encompassing software to
                                    meet your
                                    facility’s needs now and into the future.
                                </Typography>
                                <Typography maxWidth={600} className='josefin-sans pb-1 cream-text text-start'
                                            fontSize={15} variant="h6"
                                            component="h6">
                                    Skills were used:
                                </Typography>
                                <Stack alignItems='center' direction='row' spacing={1}>
                                    <img src={reactIcon} alt=''/>
                                    <img src={reduxIcon} alt=''/>
                                    <img src={cssIcon} alt=''/>
                                    <img src={htmlIcon} alt=''/>
                                    <img src={nodeJsIcon} alt=''/>
                                    <img src={scssIcon} alt=''/>
                                    <img src={muiIcon} alt='' className='pt-2'/>
                                </Stack>
                            </Stack>
                            <Box className='mySlides animate-fading project-overview p-2'>
                                <Typography className='josefin-sans text-start pb-2 cream-text'
                                            variant="h6"
                                            component="h6">
                                    BearishOs
                                </Typography>
                                <Typography maxWidth={600} className='josefin-sans pb-3 cream-text text-start'
                                            fontSize={14} variant="h6"
                                            component="h6">
                                    The Bearish OS connects & Unifies all your work in One Place. The Bearish OS
                                    connects & Unifies all
                                    your work in One Place. With advanced APIs and Algorithms, we've created full 2-way
                                    sync that gives
                                    you native-level control of every application all from the comfort of the Bearish
                                    OS. It connects most
                                    major software experiences to the Bearish.
                                </Typography>
                                <Typography maxWidth={600} className='josefin-sans pb-1 cream-text text-start'
                                            fontSize={15} variant="h6"
                                            component="h6">
                                    Skills were used:
                                </Typography>
                                <Stack alignItems='center' direction='row' spacing={1}>
                                    <img src={reactIcon} alt=''/>
                                    <img src={nextJsIcon} alt=''/>
                                    <img src={reduxIcon} alt=''/>
                                    <img src={cssIcon} alt=''/>
                                    <img src={htmlIcon} alt=''/>
                                    <img src={typescriptIcon} alt=''/>
                                    <img src={muiIcon} alt='' className='pt-2'/>
                                    <img src={storyBookIcon} alt=''/>
                                </Stack>
                            </Box>
                            <Box className='mySlides animate-fading project-overview p-2'>
                                <Typography className='josefin-sans text-start text-uppercase pb-2 cream-text'
                                            variant="h6"
                                            component="h6">
                                    WFM (Work Force Management)
                                </Typography>
                                <Typography maxWidth={600} className='josefin-sans pb-3 cream-text text-start'
                                            fontSize={14} variant="h6"
                                            component="h6">
                                    This project is about managing electricity company’s all the works. Like users
                                    information, vendor details, crew details, payment info and meter regarding
                                    information. Moreover, it contains GEO – location of user and that can thorough
                                    manage action’s. All the user have different permission that can through they access
                                    page that permission and all the things are handled from the backend.
                                </Typography>
                                <Typography maxWidth={600} className='josefin-sans pb-1 cream-text text-start'
                                            fontSize={15} variant="h6"
                                            component="h6">
                                    Skills were used:
                                </Typography>
                                <Stack alignItems='center' direction='row' spacing={1}>
                                    <img src={reactIcon} alt=''/>
                                    <img src={reduxIcon} alt=''/>
                                    <img src={cssIcon} alt=''/>
                                    <img src={htmlIcon} alt=''/>
                                    <img src={bootstrapIcon} alt=''/>
                                    <img src={antdIcon} alt=''/>
                                </Stack>
                            </Box>
                            <button className="left-arrow-btn bg-transparent  border-0"
                                    onClick={() => plusDivs(-1)}>&#10094;</button>
                            <button className="right-arrow-btn bg-transparent border-0"
                                    onClick={() => plusDivs(1)}>&#10095;</button>
                        </Stack>
                        <Stack direction="column" alignItems='start' className='w-100'
                               maxWidth={360}>
                            <Box position='fixed' maxWidth={360}>
                                <Stack direction="column" alignItems='start' mb={3}>
                                    <Typography className='josefin-sans text-start text-uppercase pb-2 cream-text'
                                                variant="h6"
                                                component="h6">
                                        Work
                                    </Typography>
                                    <Typography className='josefin-sans text-start pb-2 cream-text' fontSize={14}
                                                variant="h6"
                                                component="h6">
                                        This is a showcase of my best work in a variety of fields, from Graphic and Web
                                        Design to Product Design and Management.
                                    </Typography>
                                    <Typography className='josefin-sans text-start cream-text' fontSize={14}
                                                variant="h6"
                                                component="h6">
                                        The world of Digital Design has grown at an extremely rapid rate over the last
                                        10
                                        years and my aim has been to evolve with it. I’m learning and gaining new skills
                                        every day.
                                    </Typography>
                                </Stack>
                                <Stack direction="column" alignItems='start' mb={3}>
                                    <Typography className='josefin-sans text-start text-uppercase pb-2 cream-text'
                                                variant="h6"
                                                component="h6">
                                        SKills
                                    </Typography>
                                    <Typography className='josefin-sans text-start pb-2 cream-text' fontSize={14}
                                                variant="h6"
                                                component="h6">
                                    </Typography>
                                </Stack>
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack direction="column" alignItems='center' className='nav-right' justifyContent='space-between'>
                        <Stack direction="column" alignItems='center' justifyContent='center'>
                            <Box className='nav-right-item'>
                                <NavLink className='nav-right-link nav-right-link-work josefin-sans cream-text fw-bold'
                                         to='/'>
                                    Home
                                </NavLink>
                            </Box>
                            <Box className='nav-line bg-cream'/>
                        </Stack>
                        <Box className='nav-right-item'>
                            <Typography className='josefin-sans nav-item-n-link cream-text fw-bold'>
                                @/2023
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
            </div>
        </div>
    )
};
export default Work;
