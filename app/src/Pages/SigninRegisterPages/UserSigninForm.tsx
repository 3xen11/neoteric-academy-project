//IMPORTS FROM MATERIAL UI
import Typography from '@material-ui/core/Typography';

//IMPORTS COMPONENTS
import SigninRegisterButton from "../../Components/Buttons/SigninRegisterButton";
import SigninTextfield from "../../Components/TextFields/SigninTextfield";
import PasswordTextfield from "../../Components/TextFields/PasswordTextfield";
import SocialSigninButton from "../../Components/Buttons/SocialSigninRegisterButton";

//IMPORTS STYLES




const UserSigninForm: React.FC = (): JSX.Element => {

    return (
        <div>

            <Typography variant="h4" gutterBottom>
                Get started for free
            </Typography>
            <SocialSigninButton>Sign in with Google</SocialSigninButton>
            <SocialSigninButton>Sign in with Github</SocialSigninButton>
            <SocialSigninButton>Sign in with Linkedin</SocialSigninButton>
            <SocialSigninButton>Sign in with Facebook</SocialSigninButton>
            <p>Or</p>
            <SigninTextfield />
            <PasswordTextfield />
            <br />
            <SigninRegisterButton>Sign In</SigninRegisterButton>
            <p>New Account? <a href='#'>Register</a></p>
            <p><a href='#'>Forgot password?</a></p>

        </div>
    )
}


export default UserSigninForm;