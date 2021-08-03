//IMPORTS FROM REACT
import { Button } from '@material-ui/core';

//IMPORTS STYLES
import styles from './offersFilterButton.module.scss'

//IMPOER CLASSNAMES
import classNames from 'classnames';

const OffersFilterButton = ({ children, className }) => {

    const classValue = classNames(className, styles.filterButton);

    return (
        <div>
            <Button
                variant="contained"
                className={classValue}>{children}
            </Button>
        </div>
    )
}

export default OffersFilterButton