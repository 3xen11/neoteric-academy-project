//IMPORTS FROM REACT
import { Link } from 'react-router-dom'

//IMPORTS COMPONENTS
import MainButton from "../../Components/Buttons/MainButton";
import TextfieldSigninForm from "../../Components/TextFields/TextfieldSigninForm";
import SocialButton from "../../Components/Buttons/SocialButton";
import CheckboxForm from "../EmployerSigninForm/Checkbox/Checkbox";
import Navbar from '../../Components/Navbar/Navbar';

//IMPORTS SVG SOCIAL-LOGO
import FacebookLogo from '../../assets/imgSocials/facebook.svg'
import GithubLogo from '../../assets/imgSocials/github.svg'
import GoogleLogo from '../../assets/imgSocials/google.svg'
import LinkedinLogo from '../../assets/imgSocials/linkedin.svg'

//IMPORTS STYLES
import styles from '../UserSigninForm/userSigninForm.module.scss'



const UserRegisterForm = () => {


    return (
        <div className={styles.pageContainer}>
            <Navbar />

            <div className={styles.formContainer}>


                <div className={styles.headerText}>
                    Get started for free
                </div>


                <div className={styles.socialContainer}>

                    <SocialButton className={styles.socialButton}>
                        <img src={GoogleLogo}
                            className={styles.socialLogo}
                            alt='logo-google' />
                        Register with Google
                    </SocialButton>

                    <SocialButton className={styles.socialButton}>
                        <img src={GithubLogo}
                            className={styles.socialLogo}
                            alt='logo-github' />
                        Register with Github
                    </SocialButton>

                    <SocialButton className={styles.socialButton}>
                        <img src={LinkedinLogo}
                            className={styles.socialLogo}
                            alt='logo-linkedin' />
                        Register with Linkedin
                    </SocialButton>

                    <SocialButton className={styles.socialButton}>
                        <img src={FacebookLogo}
                            className={styles.socialLogo}
                            alt='logo-facebook' />
                        Register with Facebook
                    </SocialButton>

                </div>

                <p>OR</p>

                <div
                    className={styles.textfieldContainer}>
                    <i className="fas fa-user"></i>
                    <TextfieldSigninForm
                        label="Email"
                        type='text'
                        key='1'
                        className={styles.textfieldInput} />
                </div>

                <div
                    className={styles.textfieldContainer}>
                    <i className="fas fa-lock"></i>
                    <TextfieldSigninForm
                        label="Password"
                        type='password'
                        key='2'
                        className={styles.textfieldInput} />
                </div>

                <div
                    className={styles.textfieldContainer}>
                    <i className="fas fa-lock"></i>
                    <TextfieldSigninForm
                        label="Repeat password"
                        type='password'
                        key='2'
                        className={styles.textfieldInput} />
                </div>

                <br />

                <p> <CheckboxForm />I accept <a href='#'>terms</a> of service</p>

                <MainButton className={styles.mainButton}>Register</MainButton>

                <p>Already have an account? <Link to='/user-signin'>Sign in</Link></p>
                <p><a href='#'>Forgot password?</a></p>

            </div>
        </div>
    )
}


export default UserRegisterForm;