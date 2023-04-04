import React, {useContext} from 'react';
import {ThemeContext} from "../App";

const Button = ({children, onClick}) => {
    const theme = useContext(ThemeContext);
    const classname = 'button-'+ theme
    return (
        <button className={classname} onClick={onClick}>
            {children}
        </button>
    );
};

export {Button};
