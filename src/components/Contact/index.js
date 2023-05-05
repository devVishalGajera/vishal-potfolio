import {useState} from "react";
import {Alert, Box, Button, Grid, Snackbar, Stack, TextareaAutosize, TextField, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import emailjs from 'emailjs-com';
import mainIcon from "../../assets/icon/mail.svg";
import "../../assets/css/about.css";

const Contact = () => {
    const [background, setBackground] = useState(false);
    const [open, setOpen] = useState({});
    const [data, setData] = useState({});
    const [errorMsg, setErrorMsg] = useState('');
    const [error, setError] = useState({
        username: false,
        userEmail: false,
        message: false
    });

    const handleScroll = (e) => {
        e.target.scrollTop > 1 ? setBackground(true) : setBackground(false);
    }
    const handleBlur = (e) => {
        const {name, value} = e?.target;
        if (value.trim() === '') {
            setError({...error, [name]: true});
        }
    };

    const HandleChange = (e) => {
        errorMsg && setErrorMsg('');
        const {name, value} = e?.target;
        if (error[name] && value.trim() !== '') {
            setError({...error, [name]: false});
        }
        setData({...data, [name]: value});
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        if (data?.username && data?.userEmail && data?.message) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!re.test(String(data?.userEmail).toLowerCase())) {
                setErrorMsg('Please Enter Valid Email!');
                return;
            } else if (data?.username?.length >= 3 && data?.message?.length >= 3) {
                setErrorMsg('Name OR Message is Required!');
                return;
            }
            if (!errorMsg)
                emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, e.target, process.env.REACT_APP_YOUR_USER_ID)
                    .then((result) => {
                        setData({});
                        setErrorMsg('');
                        setError({});
                        setOpen({isOpen: true, severity: "success"});
                    }, (error) => {
                        setOpen({isOpen: true, severity: "error"});
                        console.log(error.text);
                    });
        } else {
            setErrorMsg('Please Fill all the Detail');
        }
    }

    const handleClose = () => {
        setOpen({});
    };

    return (<div className='bg-extra-light-blue h-100'>
        {(open?.isOpen || open?.severity) && <Snackbar
            open={open?.isOpen} autoHideDuration={2000} onClose={handleClose}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        >
            <Alert onClose={handleClose} severity={open?.severity} sx={{width: '100%'}}>
                {open?.severity === "success" ? 'Email sent successfully!' : 'Failed to send Mail!'}
            </Alert>
        </Snackbar>}
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
                        <form onSubmit={(e) => HandleSubmit(e)}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography className='josefin-sans text-start fw-400 pb-2 light-blue'
                                                variant="h6"
                                                component="h6">
                                        Name
                                    </Typography>
                                    <TextField
                                        name='username'
                                        error={error?.username} className='w-100'
                                        onBlur={(e) => handleBlur(e)}
                                        onChange={(e) => HandleChange(e)}
                                        required
                                        sx={{
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
                                                '&.Mui-error fieldset': {
                                                    borderColor: 'red !important',
                                                },
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className='josefin-sans text-start fw-400 pb-2 light-blue'
                                                variant="h6"
                                                component="h6">
                                        Your Email
                                    </Typography>
                                    <TextField
                                        name='userEmail'
                                        type='email'
                                        error={error?.userEmail} className='w-100'
                                        onBlur={(e) => handleBlur(e)}
                                        onChange={(e) => HandleChange(e)}
                                        required
                                        sx={{
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
                                                '&.Mui-error fieldset': {
                                                    borderColor: 'red !important',
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
                                    <TextareaAutosize name='message'
                                                      onChange={(e) => HandleChange(e)} required
                                                      className={`w-100 text-area-contact ${error?.message && 'text-area-contact-error'}`}
                                                      onBlur={(e) => handleBlur(e)}
                                                      maxRows={10}
                                                      minRows={7}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <p className='text-danger'>
                                        {errorMsg}
                                    </p>
                                </Grid>
                                <Grid item className='d-flex align-items-center justify-content-end' xs={12}>
                                    <Button className='mt-2'
                                            type='submit'
                                            sx={{
                                                backgroundColor: '#456268', color: '#fff', '&:hover': {
                                                    backgroundColor: '#79A3B1',
                                                },
                                            }}
                                    >
                                        Send Message
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
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
export default Contact;
