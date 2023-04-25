import {useEffect, useState} from "react";
import {Box, Card, CardContent, Fade, Stack, Tooltip, Typography} from "@mui/material";
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
import mongodbIcon from '../../assets/icon/mongodb.svg';
import sonarqubeIcon from '../../assets/icon/sonarqube.svg';
import bitbucketIcon from '../../assets/icon/bitbucket.svg';
import githubIcon from '../../assets/icon/github.svg';
import graphqlIcon from '../../assets/icon/graphql.svg';
import javascriptIcon from '../../assets/icon/javascript.svg';
import jenkinsIcon from '../../assets/icon/jenkins.svg';
import amazonIcon from '../../assets/icon/amazon-s3.svg';
import npmIcon from '../../assets/icon/npm.svg';
import reduxSagaIcon from '../../assets/icon/redux-saga.svg';
import jestIcon from '../../assets/icon/jest.svg';
import jiraIcon from '../../assets/icon/jira.svg';
import vsCodeIcon from '../../assets/icon/visual-studio.svg';
import WebStormIcon from '../../assets/icon/webstorm.svg';

import "../../assets/css/work.css";

const Work = () => {
    var slideIndex = 1;
    const [background, setBackground] = useState(false);
    useEffect(() => {
        showDivs(slideIndex);
    }, []);

    const handleScroll = (e) => {
        e.target.scrollTop > 1 ? setBackground(true) : setBackground(false);
    }

    var slideTimer;

    function plusDivs(n, fromBtn) {
        fromBtn && clearTimeout(slideTimer);
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
        slideTimer = setTimeout(carousel, 40000);
    }


    const skillsList = {
        technology: [
            {label: 'Javascript', value: javascriptIcon, width: 30, link: 'https://www.javascript.com/'},
            {label: 'React JS', value: reactIcon, link: 'https://react.dev/'},
            {label: 'Node JS', value: nodeJsIcon, link: 'https://nodejs.org/'},
            {label: 'Next JS', value: nextJsIcon, link: 'https://nextjs.org/'},
            {label: 'Typescript', value: typescriptIcon, link: 'https://www.typescriptlang.org/'},
            {label: 'Html', value: htmlIcon, link: 'https://html.spec.whatwg.org/'},
            {label: 'Css', value: cssIcon, link: 'https://www.w3.org/TR/CSS/#css'},
            {label: 'SCSS', value: scssIcon, link: 'https://sass-lang.com/'},
            {label: 'Redux', value: reduxIcon, link: 'https://redux.js.org/'},
            {label: 'Graphql', value: graphqlIcon, link: 'https://graphql.org/'},
            {label: 'Redux-Saga', value: reduxSagaIcon, height: 30, width: 30, link: 'https://redux-saga.js.org/'},
            {label: 'JEST', value: jestIcon, link: 'https://www.jest.org.in/'},
            {label: 'Storybook', value: storyBookIcon, link: 'https://storybook.js.org/'},
            {label: 'Bootstrap', value: bootstrapIcon, link: 'https://getbootstrap.com/'},
            {label: 'Material UI', value: muiIcon, link: 'https://mui.com/'},
            {label: 'ANT Design', value: antdIcon, link: 'https://ant.design/'}
        ],
        tools: [
            {label: 'Github', value: githubIcon, height: 30, width: 30, link: 'https://github.com/Vishal10001/'},
            {label: 'Bitbucket', value: bitbucketIcon, height: 30, width: 30, link: 'https://bitbucket.org/'},
            {label: 'MongoDB', value: mongodbIcon, height: 30, width: 30, link: 'https://www.mongodb.com/'},
            {label: 'SonarQube', value: sonarqubeIcon, link: 'https://www.sonarsource.com/products/sonarqube/'},
            {label: 'Jenkins', value: jenkinsIcon, link: 'https://www.jenkins.io/'},
            {label: 'Jira', value: jiraIcon, link: 'https://www.atlassian.com/software/jira'},
            {label: 'Amazon s3 bucket', value: amazonIcon, link: 'https://aws.amazon.com/s3/'},
            {label: 'Visual Studio Code', value: vsCodeIcon, link: 'https://code.visualstudio.com/'},
            {label: 'WebStorm', value: WebStormIcon, link: 'https://www.jetbrains.com/webstorm/'},
            {label: 'Npm', value: npmIcon, link: 'https://www.npmjs.com/'}
        ]
    };

    const loadToolsTech = (type) => (
        <>
            {skillsList[type].map((item, index) => (
                <Tooltip
                    componentsProps={{
                        tooltip: {
                            sx: {
                                bgcolor: '#456268',
                                '& .MuiTooltip-arrow': {
                                    color: '#456268',
                                },
                            },
                        },
                    }}
                    TransitionComponent={Fade}
                    followCursor
                    arrow
                    TransitionProps={{timeout: 600}}
                    title={item?.label} placement="top"
                >
                    <a href={item?.link} target='_blank'>
                        <img src={item?.value} key={index} width={item?.width} height={item?.height} alt=''/>
                    </a>
                </Tooltip>
            ))}
        </>
    );

    return (
        <div className='bg-cream h-100'>
            <div className="container-fluid slide-overlay-top-bottom work-page bg-extra-light-blue h-100  py-3"
                 onScroll={handleScroll}>
                <Stack className='h-100' justifyContent='center' direction='column'>
                    <Stack className='w-100 h-100' justifyContent='space-evenly' direction="row" flexWrap='wrap'>
                        <Stack direction="column" alignItems='start' spacing={2}
                               className='position-relative work-detail'
                               justifyContent='center'>
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
                                <Stack alignItems='center' flexWrap='wrap' direction='row' spacing={1}>
                                    <img src={reactIcon} alt=''/>
                                    <img src={reduxIcon} alt=''/>
                                    <img src={cssIcon} alt=''/>
                                    <img src={htmlIcon} alt=''/>
                                    <img src={nodeJsIcon} alt=''/>
                                    <img src={scssIcon} alt=''/>
                                    <img src={muiIcon} alt='' className='pt-2'/>
                                </Stack>
                            </Stack>
                            <Stack className='mySlides animate-fading project-overview p-2'>
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
                                <Stack alignItems='center' flexWrap='wrap' direction='row' spacing={1}>
                                    <img src={reactIcon} alt=''/>
                                    <img src={nextJsIcon} alt=''/>
                                    <img src={reduxIcon} alt=''/>
                                    <img src={cssIcon} alt=''/>
                                    <img src={htmlIcon} alt=''/>
                                    <img src={typescriptIcon} alt=''/>
                                    <img src={muiIcon} alt='' className='pt-2'/>
                                    <img src={storyBookIcon} alt=''/>
                                </Stack>
                            </Stack>
                            <Stack className='mySlides animate-fading project-overview p-2'>
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
                                <Stack alignItems='center' flexWrap='wrap' direction='row' spacing={1}>
                                    <img src={reactIcon} alt=''/>
                                    <img src={reduxIcon} alt=''/>
                                    <img src={cssIcon} alt=''/>
                                    <img src={htmlIcon} alt=''/>
                                    <img src={bootstrapIcon} alt=''/>
                                    <img src={antdIcon} alt=''/>
                                </Stack>
                            </Stack>
                            <button className="left-arrow-btn bg-transparent  border-0"
                                    onClick={() => plusDivs(-1, true)}>&#10094;</button>
                            <button className="right-arrow-btn bg-transparent border-0"
                                    onClick={() => plusDivs(1, true)}>&#10095;</button>
                        </Stack>
                        <Stack direction="column" alignItems='start' justifyContent='center' className='w-100'
                               maxWidth={360}>
                            <Box className='work-dec' position='fixed' maxWidth={360}>
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
                                    <Card>
                                        <CardContent>
                                            <Typography className='josefin-sans text-start light-blue pb-1 fw-bold'
                                                        fontSize={14}
                                                        variant="h6"
                                                        component="h6">
                                                Technology's
                                            </Typography>
                                            <Stack alignItems='center' flexWrap='wrap' maxWidth={400} useFlexGap
                                                   direction='row' spacing={2}>
                                                {loadToolsTech('technology')}
                                            </Stack>
                                            <Typography className='josefin-sans text-start light-blue mt-3 pb-1 fw-bold'
                                                        fontSize={14}
                                                        variant="h6"
                                                        component="h6">
                                                Tools
                                            </Typography>
                                            <Stack alignItems='center' flexWrap='wrap' maxWidth={400} useFlexGap
                                                   direction='row' spacing={1.5}>
                                                {loadToolsTech('tools')}
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack direction="column" alignItems='center'
                           className={`nav-right ${background ? 'nav-with-bg' : ''}`} justifyContent='space-between'>
                        <Stack direction="column" alignItems='center' justifyContent='center'>
                            <Box className='nav-right-item'>
                                <NavLink className={`nav-right-link nav-right-link-work josefin-sans cream-text fw-bold ${background ? 'text-dark-hover' : ''}`}
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
