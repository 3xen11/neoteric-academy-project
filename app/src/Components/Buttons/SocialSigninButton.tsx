//IMPORT FROM REACT
import React, { ReactNode } from 'react';

//IMPROTS FROM MATERIAL UI
import Button from '@material-ui/core/Button';

//IMPORTS STYLES
import styled from 'styled-components'


type ComponentProps = {
    readonly ClassName?: string,
    readonly children?: ReactNode,
}



const SocialSigninButton = React.memo<ComponentProps>(({ ClassName, children }) => {

    return (
        <SocialButton
            className={ClassName}
            size='large'
            variant="contained">
            {children}
        </SocialButton>
    )
});

export default SocialSigninButton;

//STYLED COMPONENTS
const SocialButton = styled(Button)`
            box-shadow: none;
            border: 1px solid rgba(128, 128, 128, 0.426);
            border-radius: 50px;
            text-transform: none;
            font-size: 1.4rem;
            background-color: white;
`;