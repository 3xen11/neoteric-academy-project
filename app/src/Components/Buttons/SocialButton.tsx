//IMPORT FROM REACT
import React, { ReactNode } from 'react';

//IMPROTS FROM MATERIAL UI
import Button from '@material-ui/core/Button';

//IMPORTS STYLES
import styles from '../../Styles/ComponentesStyles/ButtonsStyles/_SocialButton.module.scss'


type ComponentProps = {
    readonly className?: string,
    readonly children?: ReactNode,
}



const SocialButton = React.memo<ComponentProps>(({ className, children }) => {

    return (
        <Button
            className={styles['social-button']}
            size='large'
            variant="contained">
            {children}
        </Button>
    )
});

export default SocialButton;

