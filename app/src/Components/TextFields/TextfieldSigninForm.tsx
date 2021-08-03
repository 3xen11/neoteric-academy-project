//IMPORT TYPE
import React, { FC } from 'react';

//IMPROTS FROM MATERIAL UI
import TextField from '@material-ui/core/TextField';


type ComponentProps = {
    label: string,
    type: string,
    autoComplete?: string,
    key?: string,
    className?: string;
}

const TextfieldSigninForm: FC<ComponentProps> = ({ label, type, autoComplete, key, className }) => {

    return (
        <TextField
            required
            id="standard-required"
            label={label}
            type={type}
            autoComplete={autoComplete}
            variant="outlined"
            key={key}
            className={className}
            inputProps={{ style: { fontSize: 12 } }}
            InputLabelProps={{ style: { fontSize: 12 } }}
        />
    )
}

export default TextfieldSigninForm;