/* Author: Andrieiev Danil | danssg08@gmail.com | https://github.com/DanilAndreev
   Copyright (C) 2020 */
import React from "react";
import {useConfirmDialog} from "./../ConfirmDialog";

//MUI components
import Link from "@material-ui/core/Link";
import Tooltip from "@material-ui/core/Tooltip";


export function messageParser(message, confirm) {
    const result = [];
    while (message.includes('http://') || message.includes('https://')) {
        const linkIndex = message.includes('http://') ? message.indexOf('http://') : message.indexOf('https://');
        const head = message.slice(0, linkIndex);
        let tailIndex = message.indexOf(' ', linkIndex);
        if (tailIndex === -1) tailIndex = message.length - 1;
        const link = message.slice(linkIndex, tailIndex);
        let linkText = link.slice(0, 40);
        if (link.length > 40) {
            linkText += '...';
        }
        message = message.slice(tailIndex, message.length - 1);
        head && result.push(head);
        link && result.push(
            <Tooltip title={link} aria-label="link" key={`link-${link}`}>
                <Link
                    onClick={
                        event => confirm(
                            () => {
                                window.location.href = link
                            },
                            {
                                text: `Посилання ${linkText} це користувацьке посилання і не належить до нашого додатку. Ви переходите по цьому посиланню на свій страх і ризик.`,
                                title: `Підтвердіть перехід по користувацькому посиланню`,
                                type: 'continue',
                            })
                    }
                >
                    {linkText}
                </Link>
            </Tooltip>
        );
    }
    message && result.push(message);
    return result;
}


export default function ParsedMessage({message = ''}) {
    const confirm = useConfirmDialog();
    return (
        <React.Fragment>
            {messageParser(message, confirm)}
        </React.Fragment>
    );
}