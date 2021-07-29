//IMPORTS FROM REACT
import { Link } from 'react-router-dom'

//IMPORTS FROM MATERIAL UI
import Typography from '@material-ui/core/Typography';

//IMPORTS COMPONENTS
import MainButton from "../../Components/Buttons/MainButton";
import TextfieldSigninForm from "../../Components/TextFields/TextfieldSigninForm";
import SwitchForm from "../../Components/Buttons/Checkbox";
import SigninCard from '../../Components/UI/SigninCard';


//IMPORTS STYLES
import styles from "../../Styles/PagesStyles/_EmployerSigninForm.module.scss"



const EmployerSigninForm = () => {


    return (
        <div className={styles['form-container']}>
            <div>
                <SigninCard className={styles['form-container__card']}>

                    <Link to='/' className={styles['header-text']}>justjoin.it </Link>


                    <div className={styles['textfield-container']}><i className="fas fa-user"></i><TextfieldSigninForm labelText="Email" type='text' className={styles['textfield-container__input']} /></div>
                    <div className={styles['textfield-container']}><i className="fas fa-lock"></i><TextfieldSigninForm labelText="Password" type='password' className={styles['textfield-container__input']} /></div>

                    <br />

                    <p><SwitchForm className={styles.switch} />Remember me</p>

                    <MainButton>Sign In</MainButton>

                    <p><a href='#'>Forgot password?</a></p>

                </SigninCard>

            </div>

        </div >
    )
}


export default EmployerSigninForm;