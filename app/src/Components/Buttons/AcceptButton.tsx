//IMPORT TYPE
import React, { ReactNode } from 'react';

//IMPROTS FROM MATERIAL UI
import Button from '@material-ui/core/Button';



type ComponentProps = {
  readonly ClassName?: string,
  readonly children: ReactNode,
}





const AcceptButton = React.memo<ComponentProps>(({ ClassName, children }) => {

  return (
    <Button
      variant="contained"
      color="secondary"
      disableElevation
      className={ClassName}>
      {children}
    </Button>
  )
})

export default AcceptButton;