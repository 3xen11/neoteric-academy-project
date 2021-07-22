//IMPORT TYPE
import React, { FC, ReactElement } from 'react';

//IMPROTS FROM MATERIAL UI
import Button from '@material-ui/core/Button';






type ChildProps = {
  ClassName?: string,
  children?: string,
}


const AcceptButton: FC<ChildProps> = (props): ReactElement => {

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

export default AcceptButton;