//IMPORT TYPE
import React, { FC, ReactElement } from 'react';

//IMPROTS FROM MATERIAL UI
import Button from '@material-ui/core/Button';






// type ChildProps = {
//     ClassName?: string,
//     children?: string,
// }

// const SocialSigninButton: FC<ChildProps> = (props): ReactElement => {




const SocialSigninButton = (props: any) => {

    return (
        <Button
            className={props.ClassName}
            size='large'
            variant="contained">
            {props.children}
        </Button>
    )
}

export default SocialSigninButton;