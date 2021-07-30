import React from 'react';
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';
import SigninListButton from './SigninListButton';

import OutlinedButton from '../Buttons/OutlinedButton';

//IMPORT REACT ROUTER
import { Link } from 'react-router-dom'

import styles from '../../Styles/ComponentesStyles/_SigninPopupCard.module.scss'



const SigninButtons = ({ className }) => {
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
            <OutlinedButton aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} className={className}>
                Sign in
            </OutlinedButton>

            <Menu
                id={styles['fade-menu']}
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}


            >
                <div className={styles['card']}>
                    <Link to='/user-signin'> <SigninListButton className={styles['signin-popup']}>Sign in as a developer</SigninListButton></Link>
                    <Link to='/employer-signin'><SigninListButton className={styles['signin-popup']}>Sign in to Employer Panel</SigninListButton></Link></div>


            </Menu>
        </div>
    );
}

export default SigninButtons
