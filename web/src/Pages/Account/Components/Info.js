/* Author: Andrieiev Danil | danssg08@gmail.com | https://github.com/DanilAndreev
   Copyright (C) 2020 */
import React from "react";
import {useParams, useHistory} from 'react-router-dom'
import {coreRequest} from "../../../Utilities/Rest";
import {useAuth} from "../../../Utilities/Auth";
import useStyles from "./style";
import clsx from "clsx";

//MUI components
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";

//MUI icons
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';

//Custom components
import UserAvatar from "./UserAvatar";


export default function Info({origUserdata, init, ...props}) {
    const [editMode, setEditMode] = React.useState(false);
    const {id} = useParams();
    const [userdata, setUserdata] = React.useState({...origUserdata, id: undefined});
    const {user, setUser, isAdmin} = useAuth();
    const [errors, setErrors] = React.useState({name: null, email: null});
    const classes = useStyles();
    const history = useHistory();
    let loading = false;

    React.useEffect(() => {
        setUserdata({...origUserdata, id: undefined});
    }, [origUserdata]);

    function changeRoute(route) {
        history.push(route);
    }

    function checkFields() {
        let error = false;
        if (!userdata.name) {
            setErrors(last => ({...last, name: 'Заповніть обов\'язкове поле'}));
            error = true;
        } else {
            setErrors(last => ({...last, name: null}))
        }
        if (!userdata.email) {
            setErrors(last => ({...last, email: 'Заповніть обов\'язкове поле'}));
            error = true;
        } else {
            setErrors(last => ({...last, email: null}))
        }
        return !error;
    }

    function handleEditSubmit() {
        if (!checkFields()) {
            return null;
        }

        coreRequest().put(`users/${id}`)
            .send(userdata)
            .then(response => {
                if (user.id === +id) {
                    setUser(response.body.data);
                }
                setEditMode(false);
                init();
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

    function handleEdit() {
        setEditMode(true);
    }

    function handleCancel() {
        setUserdata(origUserdata);
        setEditMode(false);
    }

    function handleDataInput(event) {
        setUserdata({...userdata, [event.target.name]: event.target.value});
    }

    if (loading) {
        return null;
    }

    return (
        <ListItem>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box p={1}>
                        <UserAvatar inputUser={origUserdata}/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <List>
                        <ListItem>
                            <ListItemText
                                primary={`${origUserdata.is_admin ? 'Admin |' : ''} Інформація`}
                                secondary={`Оновлено ${new Date(userdata.updated_at).toLocaleString() || 'recently'}`}
                                className={clsx(editMode && classes.listItemTextFix)}
                            />
                            {(user && user.id === +id || isAdmin()) &&
                            <ListItemSecondaryAction>
                                {!editMode &&
                                <IconButton onClick={handleEdit}>
                                    <EditIcon fontSize={'small'}/>
                                </IconButton>
                                }
                                {editMode &&
                                <React.Fragment>
                                    <IconButton onClick={handleEditSubmit}>
                                        <DoneIcon fontSize={'small'}/>
                                    </IconButton>
                                    <IconButton onClick={handleCancel}>
                                        <CloseIcon fontSize={'small'}/>
                                    </IconButton>
                                </React.Fragment>
                                }
                            </ListItemSecondaryAction>
                            }
                        </ListItem>
                        <ListItem>
                            <TextField
                                error={!!errors.name}
                                helperText={errors.name}
                                disabled={!editMode}
                                fullWidth
                                name={'name'}
                                label={'Ім\'я'}
                                value={userdata.name}
                                onChange={handleDataInput}
                            />
                        </ListItem>
                        <ListItem>
                            <TextField
                                error={!!errors.email}
                                helperText={errors.email}
                                disabled={!editMode}
                                name={'email'}
                                fullWidth
                                label={'Email'}
                                value={userdata.email}
                                onChange={handleDataInput}
                            />
                        </ListItem>
                    </List>
                </Grid>
                <Grid xs={12}>
                    <TextField
                        variant={'outlined'}
                        multiline
                        rows={editMode ? 10 : 5}
                        label={'Про мене'}
                        fullWidth
                        name={'about_me'}
                        onChange={handleDataInput}
                        value={userdata.about_me}
                        disabled={!editMode}
                    />
                </Grid>
            </Grid>
        </ListItem>
    );
}