//IMPORTS FROM MATERIAL UI
import Typography from '@material-ui/core/Typography';

//IMPORTS COMPONENTS
import SigninRegisterButton from "../../Components/Buttons/SigninRegisterButton";
import TextfieldSigninForm from "../../Components/TextFields/TextfieldSigninForm";
import SwitchForm from "../../Components/Buttons/SwitchForm";

//IMPORTS STYLES





const EmployerSigninForm: React.FC = (): JSX.Element => {


    return (
        <div>
            <Typography variant="h4" gutterBottom>
                justjoin.it
            </Typography>
            <TextfieldSigninForm LabelText="Email" Type='text'/>
            <TextfieldSigninForm LabelText="Password" Type='password'/>
            <br />
            <p><SwitchForm />Remember me</p>
            <SigninRegisterButton>Sign In</SigninRegisterButton>
            <p><a href='#'>Forgot password?</a></p>
        </div>
    )
}


export default EmployerSigninForm;