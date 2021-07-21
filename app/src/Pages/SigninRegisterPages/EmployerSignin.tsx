//IMPORTS FROM MATERIAL UI
import Typography from '@material-ui/core/Typography';

//IMPORTS COMPONENTS
import SigninRegisterButton from "../../Components/Buttons/SigninRegisterButton";
import TextfieldSigninForm from "../../Components/TextFields/TextfieldSigninForm";
import SwitchForm from "../../Components/Buttons/SwitchForm";
import SigninCard from '../../Components/UI/SigninCard';
//IMPORTS STYLES
import styles from '../../Styles/SigninCard.module.scss'




const EmployerSigninForm: React.FC = (): JSX.Element => {


    return (
        <div className={styles.container}>

            <SigninCard ClassName={styles.Card}>

                <Typography variant="h4" gutterBottom className={styles.HeaderText}> justjoin.it </Typography>

                <div className={styles.TextfieldContainer}><i className="fas fa-user"></i><TextfieldSigninForm LabelText="Email" Type='text' ClassName={styles.Input} /></div>
                <div className={styles.TextfieldContainer}><i className="fas fa-lock"></i><TextfieldSigninForm LabelText="Password" Type='password' ClassName={styles.Input} /></div>

                <br />

                <p><SwitchForm ClassName={styles.Switch} />Remember me</p>

                <SigninRegisterButton ClassName={styles.SigninRegisterButton}>Sign In</SigninRegisterButton>

                <p><a href='#'>Forgot password?</a></p>

            </SigninCard>

        </div>
    )
}


export default EmployerSigninForm;