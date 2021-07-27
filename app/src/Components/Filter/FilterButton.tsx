import { Button } from '@material-ui/core';
import styles from '../../Styles/ComponentesStyles/_FilterButton.module.scss'


const FilterButton = ({ children, OnClick }) => {


    return (
        <div>
            <Button variant="contained" className={styles['filter-button']} onClick={OnClick}>{children}</Button>
        </div>
    )
}

export default FilterButton;