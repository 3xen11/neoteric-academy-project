//IMPORT TYPE
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom'

//IMPORTS COMPONENTS
import TemporaryDrawer from "./TemporaryDrawer"
import MainButton from "../Buttons/MainButton"
import NavbarLink from './NavbarLink';
import SigninButtons from './SigninButtons';

//IMPORT STYLE
import styles from '../../Styles/ComponentesStyles/_Navbar.module.scss'




type ComponentProps = {
    readonly className?: string,
    readonly children?: ReactNode,
}



const Navbar = React.memo<ComponentProps>(({ className, children }) => {


    return (
        <div className={styles['navbar-container']}>

            <div className={styles['logo-motto-container']}>

                <Link to='/' className={styles['main-logo']}>justjoin.it</Link><span className={styles['main-motto']}>#1 Job Board for IT industry in Poland</span>

            </div>

            <div className={styles['links-buttons-container']}>

                <div className={styles['navbar-container__links']}>
                    <NavbarLink className={styles['navbar-container__links--link-offers']}>Offers</NavbarLink>
                    <NavbarLink>Brand Stories</NavbarLink>
                    <NavbarLink>Geek</NavbarLink>
                    <NavbarLink>Matchmaking</NavbarLink>

                </div>

                <div className={styles['navbar-container-buttons']}>
                    <MainButton className={styles['main-button']}>Post a Job</MainButton>
                    <SigninButtons className={styles['signin-button']} />
                    <TemporaryDrawer className={styles['navbar-container__drawer']} />

                </div>
            </div>
        </div>
    )
})

export default Navbar

