//IMPORT TYPE
import React, { FC, ReactElement } from 'react';

//IMPROTS FROM MATERIAL UI
import TextField from '@material-ui/core/TextField';


type ComponentProps = {
    LabelText: string,
    Type: string,
    AutoComplete?: string,
    Key?: string,
    ClassName?: string;
}

const TextfieldSigninForm: FC<ComponentProps> = (props) => {

    return (
        <TextField
            id="outlined-password-input"
            label={props.LabelText}
            type={props.Type}
            autoComplete={props.AutoComplete}
            variant="outlined"
            key={props.Key}
            className={props.ClassName}
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 15 } }} //poprawić wielkość wcięcia po kliknięciue (za duży tekst)
        />
    )
}

export default TextfieldSigninForm;