//IMPORTS FROM MATERIAL UI
import OutlinedButton from "../../../Components/Buttons/OutlinedButton"

//IMPORTS STYLES
import styles from './filterItems.module.scss'

//IMPORT CLASSNAMES
import classNames from "classnames"

import TechnologyButtons from '../Filter/TechnologyButtons/TechnologyButtons'





const FilterItems = ({ className }) => {

    const classValue = classNames(className, styles.container)

    return (
        <div className={classValue}>

            <OutlinedButton className={styles.button}>Lupa</OutlinedButton>
            <OutlinedButton className={styles.expandableButton}>Location ˅</OutlinedButton>


            <div className={styles.expandableButtonHiding}>
                <OutlinedButton className={styles.button}>Location</OutlinedButton>
                <OutlinedButton className={styles.button}>Tech</OutlinedButton>
                <OutlinedButton className={styles.button}>More filters</OutlinedButton>
                <OutlinedButton className={styles.button}>Latest</OutlinedButton>
            </div>

            <TechnologyButtons></TechnologyButtons>
            <OutlinedButton className={styles.moreFiltersButton}> <i className="fas fa-filter"></i>More filters ˅</OutlinedButton>
        </div>
    )
}

export default FilterItems