/* Author: Andrieiev Danil | danssg08@gmail.com | https://github.com/DanilAndreev
   Copyright (C) 2020 */
import React from "react";
import {useHistory} from "react-router-dom";

//MUI components
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";


export default function ThreadsListItem({thread, ...props}) {
    const history = useHistory();

    const primary = (
        <Typography variant={'body2'}>
            {thread.title}
        </Typography>
    );
    const secondary = (
        <>
            {`${thread.reply_count} відповідей`}
        </>
    );

    function changeRoute(route) {
        history.push(route);
    }

    return (
        <>
            <ListItem
                button
                onClick={event => changeRoute(`/thread/${thread.id}`)}
            >
                <ListItemAvatar>
                    <Avatar
                        src={`${process.env.REACT_APP_CORE_AVATARS}/${thread.user.id}.jpg`}
                    >
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary}/>
            </ListItem>
            <Divider/>
        </>
    );
}