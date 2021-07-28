//IMPORT TYPE
import React, { ReactNode } from 'react';

//IMPORTS COMPONENTS
import TemporaryDrawer from "./TemporaryDrawer"
import MainButton from "../Buttons/MainButton"
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

                <h1>justjoin.it</h1>


                <TemporaryDrawer ClassName={styles['navbar-container__drawer']} />

                <div className={styles['navbar-container__links']}>
                    <NavbarLink link='#' ClassName={styles['navbar-container__links--link-offers']}>Offers</NavbarLink>
                    <NavbarLink link='#' ClassName={styles['navbar-container__links--link']}>Brand Stories</NavbarLink>
                    <NavbarLink link='#' ClassName={styles['navbar-container__links--link']}>Geek</NavbarLink>
                    <NavbarLink link='#' ClassName={styles['navbar-container__links--link']}>Matchmaking</NavbarLink>
                    <MainButton>Post a Job</MainButton>
                    <SigninButtons />
                </div>

            </div>


        </div>
    )
})

export default Navbar