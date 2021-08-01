//IMPORT COMPONENTS
import MainButton from "../../Components/Buttons/MainButton";
import TextfieldSigninForm from "../../Components/TextFields/TextfieldSigninForm";
import SocialButton from "../../Components/Buttons/SocialButton";
import Navbar from '../../Components/Navigation/Navbar';

//IMPORT SVG SOCIAL-LOGO
import FacebookLogo from '../../assets/imgSocials/facebook.svg'
import GithubLogo from '../../assets/imgSocials/github.svg'
import GoogleLogo from '../../assets/imgSocials/google.svg'
import LinkedinLogo from '../../assets/imgSocials/linkedin.svg'

//IMPORT STYLES
import styles from '../../Styles/PagesStyles/_UserSigninForm.module.scss'


//IMPORT REACT ROUTER
import { Link } from 'react-router-dom'


const UserSigninForm = () => {


    return (
        <div className={styles['pageContainer']}>
            <Navbar />

            <div className={styles['form-container']}>


                <div className={styles['form-container__header-text']}>
                    Get started for free
                </div>


                <div className={styles['form-container__social-container']}>
                    <SocialButton className={styles['form-container__social-container__button']}><img src={GoogleLogo} className={styles['social-logo']} alt='logo-google' />Register with Google</SocialButton>
                    <SocialButton className={styles['form-container__social-container__button']}><img src={GithubLogo} className={styles['social-logo']} alt='logo-github' />Register with Github</SocialButton>
                    <SocialButton className={styles['form-container__social-container__button']}><img src={LinkedinLogo} className={styles['social-logo']} alt='logo-linkedin' />Register with Linkedin</SocialButton>
                    <SocialButton className={styles['form-container__social-container__button']}><img src={FacebookLogo} className={styles['social-logo']} alt='logo-facebook' />Register with Facebook</SocialButton>
                </div>

                <p>OR</p>


                <div className={styles['form-container__textfield-container']}><i className="fas fa-user"></i><TextfieldSigninForm label="Email" type='text' key='1' className={styles['form-container__textfield-container__input']} /></div>

                <div className={styles['form-container__textfield-container']}><i className="fas fa-lock"></i><TextfieldSigninForm label="Password" type='password' key='2' className={styles['form-container__textfield-container__input']} /></div>

                <br />
                <MainButton className={styles['form-container__main-button']}>Sign In</MainButton>


                <p>New account? <Link to='/user-register'>Register</Link></p>

                <p><a href='#'>Forgot password?</a></p>

            </div>
        </div>
    )
}


export default UserSigninForm;

