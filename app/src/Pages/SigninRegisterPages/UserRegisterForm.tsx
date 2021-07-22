//IMPORT TYPE
import React, { FC, ReactElement } from 'react';

//IMPORTS FROM MATERIAL UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

//IMPORTS COMPONENTS
import AcceptButton from "../../Components/Buttons/AcceptButton";
import TextfieldSigninForm from "../../Components/TextFields/TextfieldSigninForm";
import SocialSigninButton from "../../Components/Buttons/SocialSignin";
import CheckboxForm from "../../Components/Buttons/Checkbox";

//IMPORTS SVG SOCIAL-LOGO
import { ReactComponent as FacebookLogo } from '../../img/facebook.svg'
import { ReactComponent as GithubLogo } from '../../img/github.svg'
import { ReactComponent as GoogleLogo } from '../../img/google.svg'
import { ReactComponent as LinkedinLogo } from '../../img/linkedin.svg'

//IMPORTS STYLES
import styles from "../../Styles/ComponentesStyles/_UserSigninForm.module.scss"




const UserRegisterForm: FC = (): ReactElement => {


    return (
        <Grid container direction='column' spacing={2} className={styles['form-container']} >

            <Typography variant="h4"
                gutterBottom
                className={styles['header-text']}>
                Get started for free
            </Typography>

            <div className={styles['social-container']}>
                <SocialSigninButton ClassName={styles['social-container__button']}><GoogleLogo className={styles['social-logo']} />Register with Google</SocialSigninButton>
                <SocialSigninButton ClassName={styles['social-container__button']}><GithubLogo className={styles['social-logo']} />Register with Github</SocialSigninButton>
                <SocialSigninButton ClassName={styles['social-container__button']}><LinkedinLogo className={styles['social-logo']} />Register with Linkedin</SocialSigninButton>
                <SocialSigninButton ClassName={styles['social-container__button']}><FacebookLogo className={styles['social-logo']} />Register with Facebook</SocialSigninButton>
            </div>

            <p>OR</p>

            <div className={styles['textfield-container']}><i className="fas fa-user"></i><TextfieldSigninForm LabelText="Email" Type='text' ClassName={styles['textfield-container__input']} /></div>
            <div className={styles['textfield-container']}><i className="fas fa-lock"></i><TextfieldSigninForm LabelText="Password" Type='password' ClassName={styles['textfield-container__input']} /></div>
            <div className={styles['textfield-container']}><i className="fas fa-lock"></i><TextfieldSigninForm LabelText="Repeat password" Type='password' ClassName={styles['textfield-container__input']} /></div>

            <br />

            <p> <CheckboxForm />I accept <a href='#'>terms</a> of service</p>

            <AcceptButton ClassName={styles['accept-button']}>Register</AcceptButton>

            <p>Already have an account? <a href='#'>Sign in</a></p>
            <p><a href='#'>Forgot password?</a></p>

        </Grid>
    )
}


export default UserRegisterForm;