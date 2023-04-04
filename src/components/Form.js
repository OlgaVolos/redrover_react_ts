import React from 'react';
import {Button} from "./Button";
import {Panel} from "./Panel";

const Form = ({title}) => {
    return (
        <Panel title={title}>
            <Button>Sign up</Button>
            <Button>Log in</Button>
        </Panel>
    );
};

export {Form};
