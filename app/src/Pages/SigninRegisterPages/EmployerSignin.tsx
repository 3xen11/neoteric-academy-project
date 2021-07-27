//IMPORTS FROM MATERIAL UI
import Typography from '@material-ui/core/Typography';

//IMPORTS COMPONENTS
import AcceptButton from "../../Components/Buttons/AcceptButton";
import TextfieldSigninForm from "../../Components/TextFields/TextfieldSigninForm";
import SwitchForm from "../../Components/Buttons/Checkbox";
import SigninCard from '../../Components/UI/SigninCard';

//IMPORTS STYLES
import styles from "../../Styles/ComponentesStyles/_SigninCard.module.scss"




const EmployerSigninForm = () => {


    return (
        <div className={styles['form-container']}>

            <SigninCard ClassName={styles['form-container__card']}>

                <Typography variant="h4" gutterBottom className={styles['header-text']}> justjoin.it </Typography>

                <div className={styles['textfield-container']}><i className="fas fa-user"></i><TextfieldSigninForm LabelText="Email" Type='text' ClassName={styles['textfield-container__input']} /></div>
                <div className={styles['textfield-container']}><i className="fas fa-lock"></i><TextfieldSigninForm LabelText="Password" Type='password' ClassName={styles['textfield-container__input']} /></div>

                <br />

                <p><SwitchForm ClassName={styles.switch} />Remember me</p>

                <AcceptButton ClassName={styles['accept-button']}>Sign In</AcceptButton>

                <p><a href='#'>Forgot password?</a></p>

            </SigninCard>

        </div>
    )
}


export default EmployerSigninForm;