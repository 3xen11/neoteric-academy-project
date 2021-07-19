//IMPROTS FROM MATERIAL UI
import TextField from '@material-ui/core/TextField';






const PasswordTextfield: React.FC = (props): JSX.Element => {

    return (
        <TextField
            id="outlined-password-input"
            label='Password'
            type="password"
            autoComplete="current-password"
            variant="outlined"
        />
    )
}

export default PasswordTextfield;