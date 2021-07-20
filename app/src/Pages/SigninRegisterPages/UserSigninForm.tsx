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

                    <SocialSigninButton> Sign in with Google</SocialSigninButton>
                    <SocialSigninButton> Sign in with Github</SocialSigninButton>
                    <SocialSigninButton> Sign in with Linkedin</SocialSigninButton>
                    <SocialSigninButton> Sign in with Facebook</SocialSigninButton>
    
                <p>OR</p>

                <TextfieldSigninForm LabelText="Email" Type='text' Key='1' ClassName={styles.Textfield}/>
                <TextfieldSigninForm LabelText="Password" Type='password' Key='2' ClassName={styles.Textfield}/>
                <br/>
                <SigninRegisterButton>Sign In</SigninRegisterButton>


            <p>New Account? <a href='#'>Register</a></p>
            <p><a href='#'>Forgot password?</a></p>

        </Grid>
    )
}


export default UserSigninForm;