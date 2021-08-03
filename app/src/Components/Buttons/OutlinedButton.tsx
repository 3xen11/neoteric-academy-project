//IMPORTS FROM REACT
import React from 'react';

//IMPORTS FROM MATERIAL UI
import { Button } from "@material-ui/core"

//IMPORTS STYLES
import styles from './buttons.module.scss'

//IMPORT CLASSNAMES
import classNames from 'classnames'



type ComponentProps = {
    readonly children: string,
    readonly className?: string,
    readonly onClick?: any,
}


const OutlinedButton = React.memo<ComponentProps>(({ children, className, onClick }) => {

    const classValue = classNames(className, styles.outlinedButton)


    return (
        <Button variant="outlined" className={classValue} onClick={onClick} >{children}</Button>
    )
})

export default OutlinedButton



