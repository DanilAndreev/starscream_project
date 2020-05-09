import React from 'react'
import useStyles from "./style";
import {BaseTheme, LightTheme} from './../../Themes/DefaultTheme'
import {ThemeProvider} from '@material-ui/core/styles';
import {Route, Switch} from "react-router-dom";

//Pages
import ThreadsViewer from "../ThreadsViewer";
import ThreadDetails from "../ThreadDetails";
import AuthDialog from "../Auth";

//MUI components
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

//MUI icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RateReviewIcon from '@material-ui/icons/RateReview';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ImageIcon from '@material-ui/icons/Image';
import SearchIcon from '@material-ui/icons/Search';


function ThreadsListItem({thread, ...props}) {
    const classes = useStyles();

    const primary = (
        <Typography variant={'body2'}>
            {thread.title}
        </Typography>
    );
    const secondary = (
        <>
            {`${thread.answers} answers`}
        </>
    );

    return (
        <>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary}/>
            </ListItem>
            <Divider/>
        </>
    );
}

export default function Layout() {
    const classes = useStyles();
    const [authOpened, setAuthOpened] = React.useState(false);
    const [authData, setAuthData] = React.useState({username: null, password: null});

    const topArticles = [
        {title: 'Какие книги читать по python для продолжение изучения?\n', answers: 4},
        {title: 'Как добавлять текст к input?', answers: 2},
        {title: 'Какой монитор на IPS матрице выбрать?', answers: 8},
        {title: 'Как устроена андроид разработка по аналогии с веб фронтенд разработкой?', answers: 4},
        {title: 'Что не так с кодом ютуба?', answers: 10}
    ];

    function handleAuthClose() {
        setAuthOpened(false);
        setAuthData({username: null, password: null});
    }

    return (
        <>
            <Dialog aria-labelledby="auth-dialog" open={authOpened} onClose={handleAuthClose}>
                <DialogTitle id="auth-dialog-title">Authentication</DialogTitle>
                <AuthDialog authData={authData} setAuthData={setAuthData} />
            </Dialog>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Forum
                    </Typography>
                    <Button color="inherit" onClick={() => {setAuthOpened(true)}}>Login</Button>
                </Toolbar>
            </AppBar>
            <Grid container>
                <Grid item xs={0} md={1} lg={2} />
                <Grid item xs={12} md={10} lg={8} id={'page'}>
                    <Box>
                        <ThemeProvider theme={LightTheme}>
                            <Grid container className={classes.topLine}>
                                <Grid xs={12} md={2}/>
                                <Grid xs={12} md={7}>
                                    <Box p={1}>
                                        <div className={classes.searchLineBase}>
                                            <TextField
                                                fullWidth
                                                variant="filled"
                                                label={'Find question'}
                                                size={'small'}
                                            />
                                            <Button variant={'contained'} color={'primary'}>
                                                <SearchIcon />
                                            </Button>
                                        </div>
                                    </Box>
                                </Grid>
                                <Grid xs={12} md={3}>
                                    <div className={classes.createThreadButtonContainer}>
                                        <Box p={1} className={classes.createThreadButtonBox}>
                                            <Button
                                                fullWidth
                                                variant={'contained'}
                                                color={'secondary'}
                                                className={classes.createThreadButton}
                                            >
                                                Create thread
                                            </Button>
                                        </Box>
                                    </div>
                                </Grid>
                            </Grid>
                        </ThemeProvider>
                        <Grid container>
                            <ThemeProvider theme={LightTheme}>
                                <Grid xs={12} md={2} className={classes.leftColumn}>
                                    <Box p={1}>
                                        <List>
                                            <ListItem dense button>
                                                <FormatListBulletedIcon fontSize={'small'}/>
                                                <ListItemText
                                                    primary={"All threads"}
                                                    className={classes.leftPanelButtonsText}
                                                />
                                            </ListItem>
                                            <ListItem dense button>
                                                <RecordVoiceOverIcon fontSize={'small'}/>
                                                <ListItemText
                                                    primary={"My threads"}
                                                    className={classes.leftPanelButtonsText}
                                                />
                                            </ListItem>
                                            <ListItem dense button>
                                                <RateReviewIcon fontSize={'small'}/>
                                                <ListItemText
                                                    primary={"Commented by me"}
                                                    className={classes.leftPanelButtonsText}
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem dense button>
                                                <AccountCircleIcon fontSize={'small'}/>
                                                <ListItemText
                                                    primary={"My account"}
                                                    className={classes.leftPanelButtonsText}
                                                />
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Grid>
                            </ThemeProvider>
                            <Grid xs={12} md={7} className={classes.contentColumn}>
                                <Grid container>
                                    <Switch>
                                        <Route path={'/threads'}>
                                            <ThreadsViewer/>
                                        </Route>
                                        <Route path={'/thread/:id'}>
                                            <ThreadDetails/>
                                        </Route>
                                    </Switch>
                                </Grid>
                            </Grid>
                            <Grid xs={12} md={3} className={classes.rightColumn}>
                                <Box p={1}>
                                    <List>
                                        <ListItem>
                                            <ListItemText primary={"Top 10 threads"}/>
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
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={0} md={1} lg={2}/>
            </Grid>
        </>
    );
}