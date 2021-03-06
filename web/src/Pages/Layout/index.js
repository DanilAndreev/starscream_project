/* Author: Andrieiev Danil | danssg08@gmail.com | https://github.com/DanilAndreev
   Copyright (C) 2020 */
import React from 'react'
import useStyles from "./style";
import {LightTheme, BaseTheme} from './../../Themes/DefaultTheme'
import {ThemeProvider} from '@material-ui/core/styles';
import {useHistory, useLocation} from "react-router-dom";
import {withWidth, isWidthDown, isWidthUp} from "@material-ui/core";
import {coreRequest} from "../../Utilities/Rest";
import {useAuth} from "../../Utilities/Auth";
import qs from 'qs'
import clsx from "clsx";
import {Helmet} from "react-helmet";

//Pages
import AuthDialog from "../Auth";
import RegistrationDialog from "../Registration";

//MUI components
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import ButtonGroup from "@material-ui/core/ButtonGroup";

//MUI icons
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

//Custom components
import ThreadsListItem from "./Components/ThreadsListItem";
import PagesSwitch from "./Components/PagesSwitch";
import Footer from "./Components/Footer";
import MenuButtons from "./Components/MenuButtons";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

//Images
import logo from './images/readit_logo_light.png';


function Layout({width, ...props}) {
    const classes = useStyles();
    const history = useHistory();
    const [search, setSearch] = React.useState('');
    const [articles, setArticles] = React.useState([]);
    const [authData, setAuthData] = React.useState({email: null, password: null, remember: false});
    const {user, setUser, setToken} = useAuth();
    const [gotUser, setGotUser] = React.useState(false);
    const location = useLocation();
    const {register, login, menu} = qs.parse(location.search, {ignoreQueryPrefix: true});
    let loading = false;

    const [topArticles, setTopArticles] = React.useState([]);

    function changeRoute(route) {
        history.push(route);
    }

    React.useEffect(() => {
        loading = true;
        //changeRoute('/threads');
    }, []);

    React.useEffect(() => {
        loading = true;
        coreRequest().get('users/me')
            .then(response => {
                setUser({...response.body.data, created_at: undefined, updated_at: undefined});
                setGotUser(true);
                console.log(`Automatically authorized as ${response.body.data.name}`);
            })
            .catch(error => {
                switch (error.status) {
                    case 401:
                        setUser(null);
                        setGotUser(true);
                        console.log(`Automatically authorized as guest`);
                        break;
                    default:
                        console.error('Failed to auto-authorize, error:', error);
                }
            });
    }, []);

    function handleLoadTop10Threads() {
        coreRequest().get('questions/top10')
            .then(response => {
                setTopArticles(response.body.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    React.useEffect(() => {
        loading = true;
        handleLoadTop10Threads();
        const updater = setInterval(() => {
            handleLoadTop10Threads();
            console.log(`Sync [top10threads]: synchronizing (${new Date().toLocaleString()})`);
        }, 30000);

        return () => {
            clearInterval(updater);
        }
    }, []);

    function handleLogout() {
        coreRequest().post('auth/logout')
            .send({})
            .then(response => {
                setToken(null);
                setUser(null);
            })
            .catch(error => {
                switch (error.status) {
                    case 401:
                        changeRoute('?login=true');
                        break;
                    default:
                        console.error(error);
                }
            });
    }

    function handleFindQuestion() {
        search && changeRoute(`/threads?search=${search}`);
        !search && changeRoute('/threads');
    }

    function handleAuthenticated(user) {
        changeRoute(location.pathname);
    }

    function handleAuthClose() {
        changeRoute(location.pathname);
        setAuthData({username: null, password: null});
    }

    function handleRegistrationClose() {
        changeRoute(location.pathname);
    }

    function handleSearchInput(event) {
        setSearch(event.target.value);
    }

    function handleCreateThread(event) {
        user && changeRoute('/editthread/new');
        !user && changeRoute(`?login=true`);
    }

    if (loading || !gotUser) {
        return null;
    }

    return (
        <>
            <Helmet>
                <title>Readit</title>
            </Helmet>
            <Dialog aria-labelledby="auth-dialog" open={!!login} onClose={handleAuthClose}>
                <DialogTitle id="auth-dialog-title">Аутентифікація</DialogTitle>
                <AuthDialog authData={authData} setAuthData={setAuthData} onComplete={handleAuthenticated}/>
            </Dialog>
            <Dialog aria-labelledby="auth-dialog" open={!!register} onClose={handleRegistrationClose}>
                <DialogTitle id="auth-dialog-title">Реєстрація</DialogTitle>
                <RegistrationDialog onComplete={handleAuthenticated}/>
            </Dialog>
            {isWidthDown('md', width) &&
            <SwipeableDrawer
                anchor={'left'}
                open={!!menu}
                onClose={event => changeRoute(location.pathname)}
                onOpen={event => changeRoute(`?menu=true`)}
                swipeAreaWidth={40}
                classes={{paperAnchorLeft: classes.menuDrawer}}
            >
                <List>
                    {user &&
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar
                                src={`${process.env.REACT_APP_CORE_AVATARS}/${user.id}.jpg`}
                            >
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={user && user.name}
                            secondary={user && user.email}
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="logout" onClick={handleLogout}>
                                <ExitToAppIcon/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    }
                    {!user &&
                    <ListItem>
                        <ButtonGroup fullWidth>
                            <Button onClick={event => changeRoute('?register=true')}>
                                Register
                            </Button>
                            <Button onClick={event => changeRoute('?login=true')}>
                                Login
                            </Button>
                        </ButtonGroup>
                    </ListItem>
                    }
                </List>
                <MenuButtons/>
                <List>
                    <ListItem>
                        <ListItemText primary={"Топ 10 питань"}/>
                    </ListItem>
                    <Divider/>
                    {topArticles.map((item, index) => {
                        return (
                            <ThreadsListItem key={`top_artciles_${index}`} thread={item}/>
                        );
                    })}
                </List>
            </SwipeableDrawer>
            }
            <AppBar position={isWidthUp('md', width) ? "static" : 'fixed'}>
                <Toolbar>
                    {isWidthDown('sm', width) &&
                    <IconButton onClick={event => isWidthDown('md', width) && changeRoute(`?menu=true`)}>
                        <MenuIcon color={'inherit'} className={classes.menuIcon}/>
                    </IconButton>
                    }
                    <div className={classes.title}>
                        <Button onClick={event => changeRoute('/about')}>
                            <img
                                src={logo}
                                alt={'Logo'}
                                className={clsx(classes.logo)}
                            />
                        </Button>
                    </div>
                    {!user && <Button color="inherit" onClick={() => changeRoute(`?register=true`)}>Sign up</Button>}
                    {!user && <Button color="inherit" onClick={() => changeRoute(`?login=true`)}>Login</Button>}
                    {user &&
                    <Button color="inherit" onClick={event => changeRoute(`/user/${user.id}`)}>
                        {isWidthUp('md', width) && user.name}
                        <Avatar
                            className={classes.avatar}
                            src={`${process.env.REACT_APP_CORE_AVATARS}/${user.id}.jpg`}
                        >
                        </Avatar>
                    </Button>
                    }
                    {user && isWidthUp('sm', width) && <Button color="inherit" onClick={handleLogout}>Logout</Button>}
                </Toolbar>
            </AppBar>
            <Grid container className={clsx(
                isWidthDown('sm', width) && classes.appBarMobileMargin,
            )}>
                {isWidthUp('sm', width) && <Grid item md={1} lg={2}/>}
                <Grid item xs={12} md={10} lg={8} id={'page'}>
                    <Box>
                        <ThemeProvider theme={LightTheme}>
                            <Grid container className={classes.topLine}>
                                <Grid item xs={12} md={2}/>
                                <Grid item xs={12} md={7}>
                                    <Box p={1}>
                                        <div className={classes.searchLineBase}>
                                            <TextField
                                                value={search}
                                                fullWidth
                                                variant="filled"
                                                label={'Знайти питання'}
                                                size={'small'}
                                                name={'search'}
                                                onChange={handleSearchInput}
                                                onKeyPress={event => {
                                                    if (event.key === 'Enter') {
                                                        handleFindQuestion();
                                                        setSearch('');
                                                    }
                                                }}
                                                autoComplete={'search'}
                                                InputLabelProps={{
                                                    classes: {
                                                        root: classes.whiteColor,
                                                    }
                                                }}
                                                InputProps={{
                                                    disableUnderline: true,
                                                    classes: {
                                                        root: classes.InputRoot,
                                                        input: classes.whiteColor,
                                                    }
                                                }}
                                            />
                                            <Button
                                                variant={'contained'}
                                                color={'primary'}
                                                onClick={handleFindQuestion}
                                            >
                                                <SearchIcon/>
                                            </Button>
                                        </div>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <div className={classes.createThreadButtonContainer}>
                                        <Box p={1} className={classes.createThreadButtonBox}>
                                            <Button
                                                fullWidth
                                                variant={'contained'}
                                                color={'secondary'}
                                                className={classes.createThreadButton}
                                                onClick={handleCreateThread}
                                            >
                                                Створити питання
                                            </Button>
                                        </Box>
                                    </div>
                                </Grid>
                            </Grid>
                        </ThemeProvider>
                        <Grid container>
                            <ThemeProvider theme={LightTheme}>
                                {isWidthUp('md', width) &&
                                <Grid item xs={12} md={2} className={classes.leftColumn}>
                                    <Box p={1}>
                                        <MenuButtons/>
                                    </Box>
                                </Grid>
                                }
                            </ThemeProvider>
                            <Grid item xs={12} md={7} className={classes.contentColumn}>
                                <Grid container>
                                    <PagesSwitch
                                        articles={articles}
                                        setArticles={setArticles}
                                    />
                                </Grid>
                            </Grid>
                            {isWidthUp('md', width) &&
                            <Grid item xs={12} md={3} className={classes.rightColumn}>
                                <Box p={1}>
                                    <List>
                                        <ListItem>
                                            <ListItemText primary={"Топ 10 питань"}/>
                                        </ListItem>
                                        <Divider/>
                                        {topArticles.map((item, index) => {
                                            return (
                                                <ThreadsListItem key={`top_artciles_${index}`} thread={item}/>
                                            );
                                        })}
                                    </List>
                                </Box>
                            </Grid>
                            }
                        </Grid>
                    </Box>
                </Grid>
                {isWidthUp('sm', width) && <Grid item md={1} lg={2}/>}
                <Footer/>
            </Grid>
        </>
    );
}

export default withWidth()(Layout);
