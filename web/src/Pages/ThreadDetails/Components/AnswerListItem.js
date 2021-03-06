/* Author: Andrieiev Danil | danssg08@gmail.com | https://github.com/DanilAndreev
   Copyright (C) 2020 */
import React from "react";
import {useAuth} from "../../../Utilities/Auth";
import {coreRequest} from "../../../Utilities/Rest";
import {useHistory, useParams} from 'react-router-dom';
import useStyles from "./style";
import clsx from "clsx";

//MUI components
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";

//MUI icons
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";

//Custom components
import ParsedMessage from "../../../Utilities/Components/ParsedMessage";


export default function AnswerListItem({
                                           answer, onEdited = () => {
    }, ...props
                                       }) {
    const {user, isAdmin} = useAuth();
    const [edit, setEdit] = React.useState(false);
    const [newData, setNewData] = React.useState(answer.text);
    const history = useHistory();
    const classes = useStyles();
    const {id} = useParams();
    const mounted = React.useRef();
    const [errors, setErrors] = React.useState(null);

    React.useEffect(() => {
        mounted.current = true;
        return () => mounted.current = false;
    }, []);

    React.useEffect(() => {
        setNewData(answer.text);
    }, [answer]);

    function changeRoute(route) {
        history.push(route);
    }

    function handleDataInput(event) {
        setNewData(event.target.value);
    }

    function checkFields() {
        if (newData === '') {
            setErrors('Заповніть обов\'язкове поле');
            return false;
        }
        return true;
    }

    function handleEditSubmit() {
        if (!checkFields()) {
            return null;
        }

        coreRequest().put(`replies/${answer.id}`)
            .send({text: newData})
            .then(response => {
                setEdit(false);
                onEdited(newData);
                setErrors(null);
            })
            .catch(error => {
                switch (error.status) {
                    case 401:
                        changeRoute('?login=true');
                        break;
                    default:
                        setErrors('Error');
                        console.error(error);
                }
            });
    }

    function handleDelete() {
        coreRequest().delete(`replies/${answer.id}`)
            .then(response => {
                onEdited();
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

    function handleCancelEdit(event) {
        setEdit(false);
        setNewData(answer.text);
    }

    const primary = (
        <React.Fragment>
            <Typography variant={'h6'}>
                {answer.user.name}
            </Typography>
            {!edit && answer.text &&
            <Typography style={{whiteSpace: 'pre-wrap'}}>
                <ParsedMessage message={answer.text}/>
            </Typography>
            }
            {edit &&
            <TextField
                helperText={errors}
                error={!!errors}
                fullWidth
                label={'Відповідь'}
                variant={'outlined'}
                size={"small"}
                multiline
                rows={4}
                onChange={handleDataInput}
                value={newData}
                required
            />
            }
        </React.Fragment>
    );

    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar
                        onClick={event => changeRoute(`/user/${answer.user.id}`)}
                        src={`${process.env.REACT_APP_CORE_AVATARS}/${answer.user.id}.jpg`}
                    >
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={primary}
                    secondary={`опубліковано ${new Date(answer.created_at).toLocaleString()}`}
                    className={clsx(classes.listItemTextFix, classes.overflowHidden)}
                />
                {(user && user.id === answer.user.id || isAdmin()) &&
                <ListItemSecondaryAction>
                    {!edit &&
                    <React.Fragment>
                        <IconButton onClick={event => setEdit(true)}>
                            <EditIcon fontSize={"small"}/>
                        </IconButton>
                        <IconButton onClick={handleDelete}>
                            <DeleteIcon fontSize={"small"}/>
                        </IconButton>
                    </React.Fragment>
                    }
                    {edit &&
                    <React.Fragment>
                        <IconButton onClick={handleEditSubmit}>
                            <DoneIcon fontSize={"small"}/>
                        </IconButton>
                        <IconButton onClick={handleCancelEdit}>
                            <CloseIcon fontSize={"small"}/>
                        </IconButton>
                    </React.Fragment>
                    }
                </ListItemSecondaryAction>
                }
            </ListItem>
            <Divider/>
        </>
    );
}