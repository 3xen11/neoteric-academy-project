import { Button } from '@material-ui/core';
import styles from '../../Styles/ComponentesStyles/_SigninListButton.module.scss'


const SigninListButton = ({ children, ClassName }) => {


    return (
        <div>
            <Button variant="contained" className={`${styles['signin-button']} ${ClassName}`}>{children}</Button>
        </div >
    )
}

export default SigninListButton;