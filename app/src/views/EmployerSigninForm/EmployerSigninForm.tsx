//IMPORTS FROM REACT
import { Link } from 'react-router-dom'

//IMPORTS COMPONENTS
import MainButton from "../../Components/Buttons/MainButton";
import TextfieldSigninForm from "../../Components/TextFields/TextfieldSigninForm";
import SwitchForm from "./Checkbox/Checkbox";
import SigninCard from '../../Components/UI/SigninCard';


//IMPORTS STYLES
import styles from '../EmployerSigninForm/employerSigninForm.module.scss'



const EmployerSigninForm = () => {


    return (
        <div className={styles.container}>
            <div>
                <SigninCard className={styles.containerCard}>

                    <Link to='/' className={styles.headerText}>justjoin.it </Link>


                    <div className={styles.textfieldContainer}>
                        <i className="fas fa-user"></i>
                        <TextfieldSigninForm label="Email" type='text' className={styles.textfieldInput} />
                    </div>

                    <div className={styles.textfieldContainer}>
                        <i className="fas fa-lock"></i>
                        <TextfieldSigninForm label="Password" type='password' className={styles.textfieldInput} />
                    </div>

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