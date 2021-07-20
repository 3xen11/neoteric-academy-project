//IMPROTS FROM MATERIAL UI
import Button from '@material-ui/core/Button';






const SigninRegisterButton: React.FC = (props): JSX.Element => {

  return (
    <Button
      variant="contained"
      color="secondary"
      disableElevation
      className='MuiButton-textSizeMedium'>
      {props.children}
    </Button>
  )
}

export default SigninRegisterButton