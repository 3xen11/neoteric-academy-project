//IMPORT TYPE
import React, { FC, ReactElement } from 'react';

//IMPROTS FROM MATERIAL UI
import TextField from '@material-ui/core/TextField';


type ComponentProps = {
    labelText: string,
    type: string,
    autoComplete?: string,
    key?: string,
    className?: string;
}

const TextfieldSigninForm: FC<ComponentProps> = (props) => {

    return (
        <TextField
            id="outlined-password-input"
            label={props.labelText}
            type={props.type}
            autoComplete={props.autoComplete}
            variant="outlined"
            key={props.key}
            className={props.className}
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 15 } }} //poprawić wielkość wcięcia po kliknięciu (za duży tekst)
        />
    )
}

export default TextfieldSigninForm;