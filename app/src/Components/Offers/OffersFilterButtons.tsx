
import { Button } from '@material-ui/core';
import styles from '../../Styles/ComponentesStyles/_FilterButton.module.scss'


const OffersFilterButton = ({ children, onClick }) => {


    return (
        <div>
            <Button variant="contained" className={styles['offer-filter-button']}>{children}</Button>
            <Button variant="contained" className={styles['offer-filter-button']}>{children}</Button>
        </div>
    )
}

export default OffersFilterButton