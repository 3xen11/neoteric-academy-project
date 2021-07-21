import React, { FC, ReactElement } from 'react';
//IMPROTS FROM MATERIAL UI
import Checkbox from '@material-ui/core/Checkbox';


type ChildProps = {
    ClassName?: string,
    children?: string,
}


const SwitchForm: FC<ChildProps> = (props): JSX.Element => {

    return (
        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className={props.ClassName}/>
    )

}

export default SwitchForm