//IMPORTS FROM REACT
import React, { ReactNode } from 'react';

//IMPORTS FROM MATERIAL UI
import { Button } from '@material-ui/core';

//IMPORTS STYLES
import styled from 'styled-components'




type ComponentProps = {
    readonly children: ReactNode,
    readonly ClassName?: string
}


const ListItemButton = React.memo<ComponentProps>(({ children, ClassName }) => {


    return (
        <div>
            <ListeItemButton variant="contained" className={ClassName}>{children}</ListeItemButton>
        </div>
    )
})

export default ListItemButton;

//STYLED COMPONENTS

const ListeItemButton = styled(Button)`
    width: 100%;
    margin: 0 !important;
    display: flex;
    text-align: left !important;
    background-color: white !important;
    border-radius: none;
    border: none !important;
    box-shadow: none !important;
    height: 40px;
`;
