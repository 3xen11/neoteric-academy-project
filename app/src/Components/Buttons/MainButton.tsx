//IMPORT TYPE
import React, { ReactNode } from 'react';

//IMPROT FROM MATERIAL UI
import Button from '@material-ui/core/Button';

//IMPORTS STYLES
import styles from '../../Styles/ComponentesStyles/ButtonsStyles/_MainButton.module.scss'


type ComponentProps = {
  readonly children: ReactNode,
  readonly className?: string
  readonly onClick?: any
}



const MainButton = React.memo<ComponentProps>(({ children, className }) => {



  return (
    <Button
      variant="contained"
      disableElevation
      className={`${styles['main-button']} ${className}`}
    >
      {children}
    </Button>
  )
})

export default MainButton;

