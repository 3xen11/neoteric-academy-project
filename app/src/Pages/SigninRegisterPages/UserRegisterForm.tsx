//IMPORTS FROM REACT
import { Link } from 'react-router-dom'


//IMPORTS FROM MATERIAL UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

//IMPORTS COMPONENTS
import MainButton from "../../Components/Buttons/MainButton";
import TextfieldSigninForm from "../../Components/TextFields/TextfieldSigninForm";
import SocialButton from "../../Components/Buttons/SocialButton";
import CheckboxForm from "../../Components/Buttons/Checkbox";
import Navbar from '../../Components/Navigation/Navbar';

//IMPORTS SVG SOCIAL-LOGO
import FacebookLogo from '../../img/facebook.svg'
import GithubLogo from '../../img/github.svg'
import GoogleLogo from '../../img/google.svg'
import LinkedinLogo from '../../img/linkedin.svg'


//IMPORTS STYLES
import styles from "../../Styles/PagesStyles/_UserSigninForm.module.scss"



const UserRegisterForm = () => {


    return (
        <div>
            <Navbar />
            <Grid container direction='column' spacing={2} className={styles['form-container']} >

                <Typography variant="h4"
                    gutterBottom
                    className={styles['header-text']}>
                    Get started for free
                </Typography>

                <div className={styles['social-container']}>
                    <SocialButton className={styles['social-container__button']}><img src={GoogleLogo} className={styles['social-logo']} alt='logo-google' />Register with Google</SocialButton>
                    <SocialButton className={styles['social-container__button']}><img src={GithubLogo} className={styles['social-logo']} alt='logo-github' />Register with Github</SocialButton>
                    <SocialButton className={styles['social-container__button']}><img src={LinkedinLogo} className={styles['social-logo']} alt='logo-linkedin' />Register with Linkedin</SocialButton>
                    <SocialButton className={styles['social-container__button']}><img src={FacebookLogo} className={styles['social-logo']} alt='logo-facebook' />Register with Facebook</SocialButton>
                </div>

                <p>OR</p>

                <div className={styles['textfield-container']}><i className="fas fa-user"></i><TextfieldSigninForm labelText="Email" type='text' className={styles['textfield-container__input']} /></div>
                <div className={styles['textfield-container']}><i className="fas fa-lock"></i><TextfieldSigninForm labelText="Password" type='password' className={styles['textfield-container__input']} /></div>
                <div className={styles['textfield-container']}><i className="fas fa-lock"></i><TextfieldSigninForm labelText="Repeat password" type='password' className={styles['textfield-container__input']} /></div>

                <br />

                <p> <CheckboxForm />I accept <a href='#'>terms</a> of service</p>

                <MainButton className={styles['main-button']}>Register</MainButton>

                <p>Already have an account? <Link to='/user-signin'>Sign in</Link></p>
                <p><a href='#'>Forgot password?</a></p>

            </Grid>
        </div>
    )
}


export default UserRegisterForm;