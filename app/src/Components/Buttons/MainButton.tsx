//IMPORT TYPE
import React, { ReactNode } from 'react';

//IMPROT FROM MATERIAL UI
import Button from '@material-ui/core/Button';

//IMPORTS STYLES
import styles from './buttons.module.scss'

//IMPORT CLASSNAMES
import classNames from 'classnames'

type ComponentProps = {
  readonly children: ReactNode,
  readonly className?: string
  readonly onClick?: any
  readonly disableElevation?: boolean,
}



const MainButton = React.memo<ComponentProps>(({ children, className }) => {

  const classValue = classNames(className, styles.mainButton);

  return (
    <Button

      variant="contained"
      disableElevation
      className={classValue}
    >
      {children}
    </Button>
  )
})

export default MainButton;

