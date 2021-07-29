//IMPORTS FROM REACT
import React, { ReactNode } from 'react';

//IMPORTS FROM MATERIAL UI
import { Button } from '@material-ui/core';

//IMPORTS STYLES
import styles from '../../Styles/ComponentesStyles/_ListItemButton.module.scss'




type ComponentProps = {
    readonly children: ReactNode,
    readonly className?: string
}


const ListItemButton = React.memo<ComponentProps>(({ children, className }) => {


    return (
        <div>
            <Button variant="contained" className={styles['list-item']}>{children}</Button>
        </div>
    )
})

export default ListItemButton;


