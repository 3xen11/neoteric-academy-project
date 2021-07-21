//IMPORTS FROM MATERIAL UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

//IMPORTS COMPONENTS
import SigninRegisterButton from "../../Components/Buttons/SigninRegisterButton";
import TextfieldSigninForm from "../../Components/TextFields/TextfieldSigninForm";
import SocialSigninButton from "../../Components/Buttons/SocialSigninRegisterButton";
import SwitchForm from "../../Components/Buttons/SwitchForm";

//IMPORTS STYLES
import styles from '../../Styles/UserSigninForm.module.scss'





const UserRegisterForm: React.FC = (): JSX.Element => {


    return (
        <Grid container direction='column' spacing={2} className={styles.GridContainer} >

            <Typography variant="h4" gutterBottom className={styles.HeaderText}>
                Get started for free
            </Typography>

            <div className={styles.SocialButtonsContainer}>
            <SocialSigninButton ClassName={styles['MuiButton-root']}>Register with Google</SocialSigninButton>
            <SocialSigninButton ClassName={styles['MuiButton-root']}>Register with Github</SocialSigninButton>
            <SocialSigninButton ClassName={styles['MuiButton-root']}>Register with Linkedin</SocialSigninButton>
            <SocialSigninButton ClassName={styles['MuiButton-root']}>Register with Facebook</SocialSigninButton>
            </div>

            <p>OR</p>
            
            <div className={styles.TextfieldContainer}><i className="fas fa-user"></i><TextfieldSigninForm LabelText="Email" Type='text' ClassName={styles.Textfield}/></div>
            <div className={styles.TextfieldContainer}><i className="fas fa-lock"></i><TextfieldSigninForm LabelText="Password" Type='password' ClassName={styles.Textfield}/></div>
            <div className={styles.TextfieldContainer}><i className="fas fa-lock"></i><TextfieldSigninForm LabelText="Repeat password" Type='password' ClassName={styles.Textfield}/></div>

            <br />
            
            <p> <SwitchForm />I accept <a href='#'>terms</a> of service</p>
          
            <SigninRegisterButton ClassName={styles.SigninRegisterButton}>Register</SigninRegisterButton>
           
            <p>Already have an account? <a href='#'>Sign in</a></p>
            <p><a href='#'>Forgot password?</a></p>
            
        </Grid>
    )
}


export default UserRegisterForm;