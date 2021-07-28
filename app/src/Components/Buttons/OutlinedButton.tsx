//IMPORTS FROM REACT
import React from 'react';

//IMPORTS FROM MATERIAL UI
import { Button } from "@material-ui/core"

//IMPORTS STYLES
import styled from 'styled-components'


type ComponentProps = {
    readonly children: string,
    readonly ClassName?: string
    OnClick?: any,
}



const OutlinedButton = React.memo<ComponentProps>(({ children, ClassName, OnClick }) => {

    return (
        <OutlinedButtonStylled variant="outlined" className={ClassName} onClick={OnClick}>{children}</OutlinedButtonStylled>
    )
})

export default OutlinedButton



//STYLED COMPONENTS
const OutlinedButtonStylled = styled(Button)`
 border-radius: 50px !important;
    height: 40px !important;
    width: 150px;
    background-color: white;
    font-size: 1.3rem;
`;