//IMPORT TYPE
import React, { ReactNode } from 'react';

import { Button } from '@material-ui/core';
import styles from '../../Styles/ComponentesStyles/ButtonsStyles/_SigninListButton.module.scss'


type ComponentProps = {
    readonly className?: string,
    readonly children?: ReactNode,
}

const SigninListButton = React.memo<ComponentProps>(({ className, children }) => {


    return (
        <div>
            <Button variant="contained" className={`${styles['signin-button']} ${className}`}>{children}</Button>
        </div >
    )
})

export default SigninListButton;