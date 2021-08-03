//IMPORTS FROM REACT
import React from 'react';
import { Link } from 'react-router-dom'

//IMPORTS FROM MATERIAL UI
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

//IMPORTS COMPONENTS
import SigninListButton from '../SigninListButton/SigninListButton';
import SimpleAccordion from './DrawerAccordion/DrawerAccordion';
import ListItemButton from '../../Buttons/ListItemButton';

//IMPORTS STYLE
import styles from './drawer.module.scss';

//IMPORT SVG USERS-LOGO
import Employee from '../../../assets/imgUsers/employee.svg'
import Employer from '../../../assets/imgUsers/employer.svg'
import classNames from 'classnames';






type Anchor = 'right';

export default function TemporaryDrawer(props: any) {

    const [state, setState] = React.useState({
        right: false,
    });


    const toggleDrawer = (anchor: Anchor, open: boolean) => (

        event: React.KeyboardEvent | React.MouseEvent,) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setState({ ...state, [anchor]: open });

    };


    const list = (anchor: Anchor, className?) => (


        <div
            className={styles.listContainer}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}>

            <h2 className={styles.headerText}>MENU</h2>
            <h2 onClick={toggleDrawer(anchor, false)} className={styles.quitButton}><i className="far fa-times-circle"></i></h2>


            <List className={styles.responsiveListPart}>

                <ListItemButton> Offers </ListItemButton>
                <ListItemButton> Brand Stories </ListItemButton>
                <ListItemButton> Geek </ListItemButton>
                <ListItemButton> Matchmaking </ListItemButton>
            </List>

            <Divider />

            <div className={styles.hidingListPart}>
                <ListItemButton> Śniadanie z programowaniem </ListItemButton>
                <ListItemButton> Just join Olympics </ListItemButton>
                <ListItemButton> Event </ListItemButton>
                <ListItemButton> For Juniors </ListItemButton>
                <ListItemButton> IT Index </ListItemButton>
                <ListItemButton> Report </ListItemButton>
            </div>

            <SimpleAccordion
                className={styles.responsiveListPart}

                accordionContent={
                    <div className={styles.accordion}>
                        <ListItemButton> Śniadanie z programowaniem </ListItemButton>
                        <ListItemButton> Just join Olympics </ListItemButton>
                        <ListItemButton> Event </ListItemButton>
                        <ListItemButton> For Juniors </ListItemButton>
                        <ListItemButton> IT Index </ListItemButton>
                        <ListItemButton> Report </ListItemButton>
                    </div>
                } />

            <Divider />

            <List>
                <ListItemButton> RSS </ListItemButton>
                <ListItemButton> Help </ListItemButton>
                <ListItemButton> Terms </ListItemButton>
            </List>

            <Link to='/user-signin'>
                <SigninListButton>
                    <img src={Employee} className={styles.userLogo} alt='logo-employee' />
                    Sign in as a developr
                </SigninListButton>
            </Link>

            <Link to='/employer-signin'>
                <SigninListButton>
                    <img src={Employer} className={styles.userLogo} alt='logo-employer' />
                    Sign in to Employer Panel
                </SigninListButton>
            </Link>
        </div>
    );

    return (

        <div className={props.className}>

            {(['right'] as Anchor[]).map((anchor) => (

                <React.Fragment key={anchor}>

                    <Button onClick={toggleDrawer(anchor, true)}>{<i className={classNames(styles.hamburger, 'fas fa-bars')}></i>}</Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>{list(anchor)}</Drawer>

                </React.Fragment>
            ))}
        </div>
    );
}

