//IMPROTS FROM MATERIAL UI
import Button from '@material-ui/core/Button';

//IMPORTS STYLES




const SocialSigninButton: React.FC = (props): JSX.Element => {

    return (
        <Button
            size='large'
            variant="contained"
            style={{ borderRadius: '20px' }}>
            {props.children}
        </Button>
    )
}

export default SocialSigninButton;