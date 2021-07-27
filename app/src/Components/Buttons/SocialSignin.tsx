//IMPORT TYPE
import React, { ReactNode } from 'react';

//IMPROTS FROM MATERIAL UI
import Button from '@material-ui/core/Button';


type ComponentProps = {
    readonly ClassName?: string,
    readonly children?: ReactNode,
}



const SocialSigninButton = React.memo<ComponentProps>(({ ClassName, children }) => {

    return (
        <Button
            className={ClassName}
            size='large'
            variant="contained">
            {children}
        </Button>
    )
});

export default SocialSigninButton;