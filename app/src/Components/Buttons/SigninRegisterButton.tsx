import React, { FC, ReactElement } from 'react';
//IMPROTS FROM MATERIAL UI
import Button from '@material-ui/core/Button';

//IMPORTS STYLES

type ChildProps = {
    ClassName?: string,
    children?: string,
}



const SigninRegisterButton: FC<ChildProps> = (props): JSX.Element => {

  return (
    <Button
      variant="contained"
      color="secondary"
      disableElevation
      className={props.ClassName}>
      {props.children}
    </Button>
  )
}

export default SigninRegisterButton