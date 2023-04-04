import React, {useContext} from 'react';
import {ThemeContext} from "../App";

const Panel = ({title, children}) => {

    const theme = useContext(ThemeContext);
    const classname = 'panel-'+ theme
    return (
        <section className={classname}>
            <h1>{title}</h1>
            {children}
        </section>
    );
};

export {Panel};
