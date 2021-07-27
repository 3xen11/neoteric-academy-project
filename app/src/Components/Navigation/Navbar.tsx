//IMPORT TYPE
import React, { ReactNode } from 'react';

//IMPORTS COMPONENTS
import TemporaryDrawer from "./TemporaryDrawer"
import AcceptButton from "../Buttons/AcceptButton"
import NavbarLink from './NavbarLink';
//IMPORT STYLE
import styles from '../../Styles/ComponentesStyles/_Navbar.module.scss'
import SigninButtons from './SigninButtons';

type ComponentProps = {
    readonly ClassName?: string,
    readonly children?: ReactNode,
}

const Navbar = React.memo<ComponentProps>(({ ClassName, children }) => {


    return (
        <div>
            <div className={styles['navbar-container']}>

                <h2>justjoin.it - #1 jebania biedy w polsce</h2>

                <AcceptButton ClassName={styles['navbar-container__login-button']}>Sign in</AcceptButton>
                <TemporaryDrawer ClassName={styles['navbar-container__drawer']} />

                <div className={styles['navbar-container__links']}>
                    <NavbarLink link='#' ClassName={styles['navbar-container__links--link-offers']}>Offers</NavbarLink>
                    <NavbarLink link='#' ClassName={styles['navbar-container__links--link']}>Brand Stories</NavbarLink>
                    <NavbarLink link='#' ClassName={styles['navbar-container__links--link']}>Geek</NavbarLink>
                    <NavbarLink link='#' ClassName={styles['navbar-container__links--link']}>Matchmaking</NavbarLink>
                    <AcceptButton>Post a Job</AcceptButton>
                    <SigninButtons />
                </div>

            </div>


        </div>
    )
})

export default Navbar