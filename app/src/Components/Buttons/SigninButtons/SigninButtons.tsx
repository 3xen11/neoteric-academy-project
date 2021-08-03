//IMPORTS FROM REACT
import React from 'react';
import { Link } from 'react-router-dom'

//IMPORTS FROM MATERIAL UI
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';

//IMPORTS COMPONENTS
import SigninListButton from '../../Navbar/SigninListButton/SigninListButton';
import OutlinedButton from '../OutlinedButton';

//IMPORT STYLES
import styles from './signinButtons.module.scss'

//IMPORT SVG USERS-LOGO
import Employee from '../../../assets/imgUsers/employee.svg'
import Employer from '../../../assets/imgUsers/employer.svg'


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
                id={styles.fadeMenu}
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}


            >
                <div className={styles.card}>

                    <Link to='/user-signin'>
                        <SigninListButton className={styles.signinPopup}>
                            <img src={Employee} className={styles.userLogo} alt='logo-employee' />
                            <span>Sign in as a developer</span>
                        </SigninListButton>
                    </Link>

                    <Link to='/employer-signin'>
                        <SigninListButton className={styles.signinPopup}>
                            <img src={Employer} className={styles.userLogo} alt='logo-employer' />
                            <span>Sign in to Employer Panel</span>
                        </SigninListButton>
                    </Link>

                </div>


            </Menu>
        </div>
    );
}

export default SigninButtons
