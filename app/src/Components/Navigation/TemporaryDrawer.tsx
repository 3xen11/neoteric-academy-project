import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import SigninListButton from './SigninListButton';
import SimpleAccordion from './SimpleAccordion';
import ListItemButton from '../Buttons/ListItemButton';

//IMPORTS STYLE
import styles from '../../Styles/ComponentesStyles/_Drawer.module.scss';

//IMPORT REACT ROUTER
import { Link } from 'react-router-dom'


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



    const list = (anchor: Anchor) => (
        <div
            className={styles['list-container']}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}>

            <h2 className={styles['header-text']}>MENU</h2>
            <h2 onClick={toggleDrawer(anchor, false)} className={styles['quit-button']}>Close</h2>


            <List className={styles['responsive-list-part']}>

                <ListItemButton> Offers </ListItemButton>
                <ListItemButton> Brand Stories </ListItemButton>
                <ListItemButton> Geek </ListItemButton>
                <ListItemButton> Matchmaking </ListItemButton>
            </List>

            <Divider className={styles['responsive-list-part']} />

            <div className={styles['responsive-list-part--hidden']}>
                <ListItemButton> Śniadanie z programowaniem </ListItemButton>
                <ListItemButton> Just join Olympics </ListItemButton>
                <ListItemButton> Event </ListItemButton>
                <ListItemButton> For Juniors </ListItemButton>
                <ListItemButton> IT Index </ListItemButton>
                <ListItemButton> Report </ListItemButton>
            </div>

            <SimpleAccordion
                ClassName={styles['responsive-list-part']}
                AccordionContent={
                    <div className={styles['accordion']}>
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
            <Link to='/user-signin'> <SigninListButton ClassName={''}>Sign in as a developr</SigninListButton></Link>
            <Link to='/employer-signin'> <SigninListButton ClassName={''}>Sign in to Employer Panel</SigninListButton></Link>
        </div>
    );

    return (

        <div className={props.ClassName}>

            {(['right'] as Anchor[]).map((anchor) => (

                <React.Fragment key={anchor}>

                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>{list(anchor)}</Drawer>

                </React.Fragment>
            ))}
        </div>
    );
}

