//IMPORT TYPE
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom'

//IMPORTS COMPONENTS
import TemporaryDrawer from "./Drawer/Drawer"
import MainButton from "../Buttons/MainButton"
import NavbarLink from './NavbarLink/NavbarLink';
import SigninButtons from '../Buttons/SigninButtons/SigninButtons';

//IMPORT STYLE
import styles from './navbar.module.scss'




type ComponentProps = {
    readonly className?: string,
    readonly children?: ReactNode,
}



const Navbar = React.memo<ComponentProps>(({ className, children }) => {


    return (
        <div className={styles.container}>

            <div className={styles.logoMottoContainer}>

                <Link to='/' className={styles.logo}>justjoin.it</Link><span className={styles.motto}>#1 Job Board for IT industry in Poland</span>

            </div>

            <div className={styles.linksButtonsContainer}>

                <div className={styles.links}>
                    <NavbarLink className={styles.linkOffers}>Offers</NavbarLink>
                    <NavbarLink>Brand Stories</NavbarLink>
                    <NavbarLink>Geek</NavbarLink>
                    <NavbarLink>Matchmaking</NavbarLink>

                </div>

                <div className={styles.navbarButtons}>
                    <MainButton className={styles.mainButton}>Post a Job</MainButton>
                    <SigninButtons className={styles.signinButton} />
                    <TemporaryDrawer className={styles.navbarDrawer} />

                </div>
            </div>
        </div>
    )
})

export default Navbar

