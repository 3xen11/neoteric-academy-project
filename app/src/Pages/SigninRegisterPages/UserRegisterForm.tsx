//IMPORTS FROM MATERIAL UI
import Typography from '@material-ui/core/Typography';

//IMPORTS COMPONENTS
import SigninRegisterButton from "../../Components/Buttons/SigninRegisterButton";
import SigninTextfield from "../../Components/TextFields/SigninTextfield";
import PasswordTextfield from "../../Components/TextFields/PasswordTextfield";
import SocialSigninButton from "../../Components/Buttons/SocialSigninRegisterButton";
import SwitchForm from "../../Components/Buttons/SwitchForm";

//IMPORTS STYLES






const UserRegisterForm: React.FC = (): JSX.Element => {



    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Get started for free
            </Typography>
            <SocialSigninButton>Register with Google</SocialSigninButton>
            <SocialSigninButton>Register with Github</SocialSigninButton>
            <SocialSigninButton>Register with Linkedin</SocialSigninButton>
            <SocialSigninButton>Register with Facebook</SocialSigninButton>
            <p>Or</p>
            <SigninTextfield />
            <PasswordTextfield />
            <PasswordTextfield />
            <br />
            <p> <SwitchForm />I accept <a href='#'>terms</a> of service</p>
            <SigninRegisterButton>Register</SigninRegisterButton>
            <p>Already have an account? <a href='#'>Sign in</a></p>
            <p><a href='#'>Forgot password?</a></p>

        </div>
    )
}


export default UserRegisterForm;