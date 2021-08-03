//IMPORTS FROM REACT
import React, { ReactNode } from 'react';

//IMPORTS STYLES
import styles from './navbarLink.module.scss'

//IMPORT CLASSNAMES
import classNames from 'classnames'



type ComponentProps = {
    readonly children: ReactNode,
    readonly className?: string
}

const NavbarLink = React.memo<ComponentProps>(({ className, children }) => {


    const classValue = classNames(className, styles.linkPosition)


    return (
        <div className={classValue}> <a className={styles.navbarLink} href='/'>{children}</a></div >
    )
})

export default NavbarLink



