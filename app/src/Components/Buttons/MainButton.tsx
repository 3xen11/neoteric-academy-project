//IMPORT TYPE
import React, { ReactNode } from 'react';

//IMPROT FROM MATERIAL UI
import Button from '@material-ui/core/Button';

//IMPORTS STYLES
import styled from 'styled-components'


type ComponentProps = {
  readonly children: ReactNode,
  readonly ClassName?: string
}



const MainButton = React.memo<ComponentProps>(({ children, ClassName }) => {



  return (
    <StylledButton
      variant="contained"
      disableElevation
      className={ClassName}
    >

      {children}
    </StylledButton>
  )
})

export default MainButton;



//STYLED COMPONENTS
const StylledButton = styled(Button)`
  border-radius: 50px !important;
  width: 150px !important;
  text-transform: none !important;
  background-color: #ff5387 !important;
  font-size: 1.5rem !important;
  color: white !important;
     height: 40px !important;
`;