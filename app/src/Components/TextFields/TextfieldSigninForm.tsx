//IMPORT TYPE
import React, { FC } from 'react';

//IMPROTS FROM MATERIAL UI
import TextField from '@material-ui/core/TextField';


type ComponentProps = {
    label?: string,
    type: string,
    autoComplete?: string,
    key?: string,
    rows?: number
    className?: string;
    multiline?: boolean;
    placeholder?: string;
}

const TextfieldSigninForm: FC<ComponentProps> = ({ label, type, autoComplete, key, className, rows, multiline, placeholder }) => {

    return (
        <TextField
            required
            rows={rows}
            id="standard-required"
            label={label}
            type={type}
            autoComplete={autoComplete}
            variant="outlined"
            key={key}
            className={className}
            inputProps={{ style: { fontSize: 12 } }}
            InputLabelProps={{ style: { fontSize: 12 } }}
            multiline={multiline}
            placeholder={placeholder}
        />
    )
}

export default TextfieldSigninForm;