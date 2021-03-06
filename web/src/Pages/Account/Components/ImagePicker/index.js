/* Author: Andrieiev Danil | danssg08@gmail.com | https://github.com/DanilAndreev
   Copyright (C) 2020 */
import React from "react";
import useStyles from "./style";
import clsx from "clsx";
import withWidth, {isWidthUp} from "@material-ui/core/withWidth";

//MUI icons
import ImageIcon from '@material-ui/icons/Image';


function ImagePicker({
                         onChange = () => {
                         },
                         onError = () => {
                         },
                         src,
                         width,
                         date,
                         children,
                         disabled = false,
                         ...props
                     }) {
    const classes = useStyles();


    return (
        <>
            <div className={classes.root}>
                <img
                    src={src}
                    className={clsx(classes.img, !src && classes.displayNone)}
                    alt={date}
                    onError={onError}
                />
                <ImageIcon className={clsx(classes.imgIcon, src && classes.displayNone)}/>
                {!disabled &&
                <React.Fragment>
                    <input
                        type={'file'}
                        className={clsx(classes.input)}
                        onChange={event => onChange(event.target.files)}
                        accept={'.png,.jpg,.jpeg'}
                        multiple={false}
                    />
                    {children &&
                    <div
                        className={clsx(classes.message, isWidthUp('md', width) && classes.displayNone, !src && classes.messageUnloaded)}
                    >
                        {children}
                    </div>
                    }
                </React.Fragment>
                }
            </div>
        </>
    );
}

export default withWidth()(ImagePicker);