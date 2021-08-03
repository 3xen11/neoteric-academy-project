//IMPORTS FROM REACT
import React, { ReactNode } from 'react';

//IMPORTS FROM MATERIAL UI
import { Button } from '@material-ui/core';

//IMPORTS STYLES
import styles from './buttons.module.scss'

//IMPORT CLASSNAMES
import classNames from 'classnames'


type ComponentProps = {
    readonly children: ReactNode,
    readonly className?: string
}


const ListItemButton = React.memo<ComponentProps>(({ children, className }) => {

    const classValue = classNames(className, styles.listItem);

    return (
        <div>
            <Button variant="contained" className={classValue}>{children}</Button>
        </div>
    )
})

export default ListItemButton;


