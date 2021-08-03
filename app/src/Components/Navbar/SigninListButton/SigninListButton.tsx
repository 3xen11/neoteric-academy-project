//IMPORT TYPE
import React, { ReactNode } from 'react';

//IMPORTS FROM MATERIAL UI
import { Button } from '@material-ui/core';

//IMPORTS STYLES
import styles from './signinListButton.module.scss';

//IMPORT CLASSNAMES
import classNames from 'classnames';

type ComponentProps = {
    readonly className?: string,
    readonly children?: ReactNode,
}

const SigninListButton = React.memo<ComponentProps>(({ className, children }) => {

    const classValue = classNames(className, styles.signinButton);

    return (
        <div>
            <Button variant="contained" className={classValue}>{children}</Button>
        </div >
    )
})

export default SigninListButton;