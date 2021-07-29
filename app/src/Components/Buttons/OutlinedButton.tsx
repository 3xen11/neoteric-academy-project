//IMPORTS FROM REACT
import React from 'react';

//IMPORTS FROM MATERIAL UI
import { Button } from "@material-ui/core"

//IMPORTS STYLES
import styles from '../../Styles/ComponentesStyles/ButtonsStyles/_OutlinedButton.module.scss'


type ComponentProps = {
    readonly children: string,
    readonly className?: string
    onClick?: any,
}


const OutlinedButton = React.memo<ComponentProps>(({ children, className, onClick }) => {

    return (
        <Button variant="outlined" className={`${styles['outlined-button']} ${className}`} onClick={onClick} >{children}</Button>
    )
})

export default OutlinedButton



