//IMPORTS FROM MATERIAL UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

//IMPORTS COMPONENTS
import SigninRegisterButton from "../../Components/Buttons/SigninRegisterButton";
import TextfieldSigninForm from "../../Components/TextFields/TextfieldSigninForm";
import SocialSigninButton from "../../Components/Buttons/SocialSigninRegisterButton";

//IMPORTS STYLES
import styles from '../../Styles/UserSigninForm.module.scss'



const UserSigninForm: React.FC = (): JSX.Element => {


    return (
        <Grid container direction='column' spacing={2} className={styles.GridContainer}>
                <Typography 
                variant="h4" 
                gutterBottom
                className={styles.HeaderText}>
                    Get started for free
                </Typography>
                <div className={styles.SocialButtonsContainer}>
                    <SocialSigninButton ClassName={styles['MuiButton-root']}> Sign in with Google</SocialSigninButton>
                    <SocialSigninButton ClassName={styles['MuiButton-root']}> Sign in with Github</SocialSigninButton>
                    <SocialSigninButton ClassName={styles['MuiButton-root']}> Sign in with Linkedin</SocialSigninButton>
                    <SocialSigninButton ClassName={styles['MuiButton-root']}> Sign in with Facebook</SocialSigninButton>
                </div>
                <p>OR</p>

                
                <div className={styles.TextfieldContainer}><i className="fas fa-user"></i><TextfieldSigninForm LabelText="Email" Type='text' Key='1' ClassName={styles.Textfield}/></div>
                <div className={styles.TextfieldContainer}><i className="fas fa-lock"></i><TextfieldSigninForm LabelText="Password" Type='password' Key='2' ClassName={styles.Textfield}/></div>
                
                <br/>
               <SigninRegisterButton ClassName={styles.SigninRegisterButton}>Sign In</SigninRegisterButton>


            <p>New Account? <a href='#'>Register</a></p>
            <p><a href='#'>Forgot password?</a></p>

        </Grid>
    )
}


export default UserSigninForm;