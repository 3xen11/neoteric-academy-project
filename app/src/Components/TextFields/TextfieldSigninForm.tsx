import React, { FC, ReactElement } from 'react';
//IMPROTS FROM MATERIAL UI
import TextField from '@material-ui/core/TextField';
//IMPORTS STYLES

type ChildProps = {
    LabelText: string,
    Type: string,
    AutoComplete?: string,
    Key?: string,
    ClassName?: string;
}

const TextfieldSigninForm: FC<ChildProps> = ({LabelText, Type, AutoComplete, Key, ClassName}): ReactElement => {

    return (
        <TextField
            id="outlined-password-input"
            label={LabelText}
            type={Type}
            autoComplete={AutoComplete}
            variant="outlined"
            key={Key}
            className={ClassName}
        />
    )
}

export default TextfieldSigninForm;