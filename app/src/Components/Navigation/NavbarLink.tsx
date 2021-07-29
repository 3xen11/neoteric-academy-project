//IMPORTS FROM REACT
import React, { ReactNode } from 'react';

//IMPORTS STYLES
import styled from 'styled-components'

type ComponentProps = {
    readonly children: ReactNode,
    readonly className?: string
}

const NavbarLink = React.memo<ComponentProps>(({ className, children }) => {

    return (
        <LinkCenter><StylledNavbarLink className={className}>{children}</StylledNavbarLink></LinkCenter>
    )
})

export default NavbarLink


//STYLED COMPONENTS
const StylledNavbarLink = styled.a`
            font-size: 1.4rem;
            color: gray;
            font-weight: bold;
            display: flex;
            align-self: center;
            cursor: pointer;
            &:hover {
            color: #ff5387;
        }
`;

const LinkCenter = styled.div`
    text-align: center;
    margin-left: 30px;
`