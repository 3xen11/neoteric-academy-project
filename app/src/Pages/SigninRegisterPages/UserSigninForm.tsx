//IMPORT FROM MATERIAL UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

//IMPORT COMPONENTS
import MainButton from "../../Components/Buttons/MainButton";
import TextfieldSigninForm from "../../Components/TextFields/TextfieldSigninForm";
import SocialSigninButton from "../../Components/Buttons/SocialSigninButton";

//IMPORT SVG SOCIAL-LOGO
import FacebookLogo from '../../img/facebook.svg'
import GithubLogo from '../../img/github.svg'
import GoogleLogo from '../../img/google.svg'
import LinkedinLogo from '../../img/linkedin.svg'

//IMPORT STYLES
import styles from '../../Styles/PagesStyles/_UserSigninForm.module.scss'
import styled from 'styled-components'

//IMPORT REACT ROUTER
import { Link } from 'react-router-dom'


const UserSigninForm = () => {


    return (
        <Grid container direction='column' spacing={2} className={styles['form-container']}>

            <Typography
                variant="h4"
                gutterBottom
                className={styles['header-text']}>
                Get started for free
            </Typography>


            <div className={styles['social-container']}>
                <SocialSigninButton ClassName={styles['social-container__button']}><img src={GoogleLogo} className={styles['social-logo']} alt='logo-google' />Register with Google</SocialSigninButton>
                <SocialSigninButton ClassName={styles['social-container__button']}><img src={GithubLogo} className={styles['social-logo']} alt='logo-github' />Register with Github</SocialSigninButton>
                <SocialSigninButton ClassName={styles['social-container__button']}><img src={LinkedinLogo} className={styles['social-logo']} alt='logo-linkedin' />Register with Linkedin</SocialSigninButton>
                <SocialSigninButton ClassName={styles['social-container__button']}><img src={FacebookLogo} className={styles['social-logo']} alt='logo-facebook' />Register with Facebook</SocialSigninButton>
            </div>

            <p>OR</p>


            <div className={styles['textfield-container']}><i className="fas fa-user"></i><TextfieldSigninForm LabelText="Email" Type='text' Key='1' ClassName={styles['textfield-container__input']} /></div>

            <div className={styles['textfield-container']}><i className="fas fa-lock"></i><TextfieldSigninForm LabelText="Password" Type='password' Key='2' ClassName={styles['textfield-container__input']} /></div>

            <br />
            <MainButton ClassName={styles['main-button']}>Sign In</MainButton>


            <p>New Account? <Link to='/user-register'>Register</Link></p>

            <p><a href='#'>Forgot password?</a></p>

        </Grid>
    )
}


export default UserSigninForm;

