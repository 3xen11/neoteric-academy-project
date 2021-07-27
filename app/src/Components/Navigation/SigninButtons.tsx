import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import SigninListButton from './SigninListButton';

import styles from '../../Styles/ComponentesStyles/_SigninPopupCard.module.scss'

const SigninButtons = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                Sign in
            </Button>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}


            >
                <div className={styles['card']}><SigninListButton ClassName={styles['signin-popup']}>Sign in as a developer</SigninListButton>
                    <SigninListButton ClassName={styles['signin-popup']}>Sign in to Employer Panel</SigninListButton></div>


            </Menu>
        </div>
    );
}

export default SigninButtons
