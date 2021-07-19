//IMPORTS FROM MATERIAL UI
import Typography from '@material-ui/core/Typography';

//IMPORTS COMPONENTS
import SigninRegisterButton from "../../Components/Buttons/SigninRegisterButton";
import SigninTextfield from "../../Components/TextFields/SigninTextfield";
import PasswordTextfield from "../../Components/TextFields/PasswordTextfield";
import SwitchForm from "../../Components/Buttons/SwitchForm";

//IMPORTS STYLES





const EmployerSigninForm: React.FC = (): JSX.Element => {


    return (
        <div>
            <Typography variant="h4" gutterBottom>
                justjoin.it
            </Typography>
            <SigninTextfield />
            <PasswordTextfield />
            <br />
            <p><SwitchForm />Remember me</p>
            <SigninRegisterButton>Sign In</SigninRegisterButton>
            <p><a href='#'>Forgot password?</a></p>
        </div>
    )
}


export default EmployerSigninForm;