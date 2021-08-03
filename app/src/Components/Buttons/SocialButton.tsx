//IMPORT FROM REACT
import React, { ReactNode } from 'react';

//IMPROTS FROM MATERIAL UI
import Button from '@material-ui/core/Button';

//IMPORTS STYLES
import styles from './buttons.module.scss'

//IMPORT CLASSNAMES
import classNames from 'classnames'


type ComponentProps = {
    readonly className?: string,
    readonly children?: ReactNode | string,
    readonly onClick?: any,
    readonly variant?: 'contained' | 'outlined',
    readonly disableElevation?: boolean,
}



const SocialButton = React.memo<ComponentProps>(({ className, children }) => {

    const classValue = classNames(className, styles.socialButton);

    return (
        <Button
            disableElevation
            className={classValue}
            variant="contained">
            {children}
        </Button>
    )
});

export default SocialButton;

