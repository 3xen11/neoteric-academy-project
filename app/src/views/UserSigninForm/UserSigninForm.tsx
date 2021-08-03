//IMPORT FROM REACT
import { Link } from 'react-router-dom'

//IMPORT COMPONENTS
import MainButton from "../../Components/Buttons/MainButton";
import TextfieldSigninForm from "../../Components/TextFields/TextfieldSigninForm";
import SocialButton from "../../Components/Buttons/SocialButton";
import Navbar from '../../Components/Navbar/Navbar';

//IMPORT SVG SOCIAL-LOGO
import FacebookLogo from '../../assets/imgSocials/facebook.svg'
import GithubLogo from '../../assets/imgSocials/github.svg'
import GoogleLogo from '../../assets/imgSocials/google.svg'
import LinkedinLogo from '../../assets/imgSocials/linkedin.svg'

//IMPORT STYLES
import styles from '../UserSigninForm/userSigninForm.module.scss'




const UserSigninForm = () => {


    return (
        <div className={styles.pageContainer}>
            <Navbar />

            <div className={styles.formContainer}>


                <div className={styles.headerText}>
                    Get started for free
                </div>


                <div className={styles.socialContainer}>

                    <SocialButton className={styles.socialButton}>
                        <img
                            src={GoogleLogo}
                            className={styles.socialLogo}
                            alt='logo-google' />
                        Register with Google
                    </SocialButton>

                    <SocialButton className={styles.socialButton}>
                        <img
                            src={GithubLogo}
                            className={styles.socialLogo}
                            alt='logo-github' />
                        Register with Github
                    </SocialButton>

                    <SocialButton className={styles.socialButton}>
                        <img
                            src={LinkedinLogo
                            } className={styles.socialLogo}
                            alt='logo-linkedin' />
                        Register with Linkedin
                    </SocialButton>

                    <SocialButton className={styles.socialButton}>
                        <img
                            src={FacebookLogo
                            } className={styles.socialLogo}
                            alt='logo-facebook' />
                        Register with Facebook
                    </SocialButton>

                </div>

                <p>OR</p>


                <div className={styles.textfieldContainer}>
                    <i className="fas fa-user"></i>
                    <TextfieldSigninForm
                        label="Email"
                        type='text'
                        key='1'
                        className={styles.textfieldInput} />
                </div>

                <div className={styles.textfieldContainer}>
                    <i className="fas fa-lock"></i>
                    <TextfieldSigninForm
                        label="Password"
                        type='password'
                        key='2'
                        className={styles.textfieldInput} />
                </div>

                <br />

                <MainButton className={styles.mainButton}>Sign In</MainButton>


                <p>New account? <Link to='/user-register'>Register</Link></p>

                <p><a href='#'>Forgot password?</a></p>

            </div>
        </div>
    )
}


export default UserSigninForm;

