import React from 'react';
import {deleteContact} from "../contacts";
import {redirect} from "react-router-dom";

export async function action({params}){
    throw new Error("oh dang!");
    await deleteContact(params.contactId);
    return redirect("/");
}

const DeleteContact = () => {
    return (
        <div>
            DeleteContact
        </div>
    );
};

export {DeleteContact};
