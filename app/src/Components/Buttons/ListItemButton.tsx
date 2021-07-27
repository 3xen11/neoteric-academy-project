import { Button } from '@material-ui/core';
import styles from '../../Styles/ComponentesStyles/_ListItemButton.module.scss'


const ListItemButton = ({ children }) => {


    return (
        <div>
            <Button variant="contained" className={styles['accordion__list-item-text']}>{children}</Button>
        </div>
    )
}

export default ListItemButton;