//IMPORT TYPE
import React, { FC, ReactElement } from 'react';

//IMPROTS FROM MATERIAL UI
import Checkbox from '@material-ui/core/Checkbox';





type ChildProps = {
    ClassName?: string,
}


const CheckboxForm: FC<ChildProps> = (props): ReactElement => {

    return (
        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className={props.ClassName} style={{
            transform: "scale(1.4)",
        }} />
    )

}

export default CheckboxForm