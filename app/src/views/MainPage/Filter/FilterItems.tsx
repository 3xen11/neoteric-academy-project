//IMPORTS FROM MATERIAL UI
import OutlinedButton from "../../../Components/Buttons/OutlinedButton"

//IMPORTS STYLES
import styles from './filterItems.module.scss'

//IMPORT CLASSNAMES
import classNames from "classnames"







const FilterItems = ({ className }) => {

    const classValue = classNames(className, styles.container)

    return (
        <div className={classValue}>

            <OutlinedButton className={styles.button}>Lupa</OutlinedButton>
            <OutlinedButton className={styles.expandableButton}>Location 🠗</OutlinedButton>
            {/*rozwijany button*/}

            <div className={styles.expandableButtonHiding}>
                <OutlinedButton className={styles.button}>Location</OutlinedButton>
                <OutlinedButton className={styles.button}>Tech</OutlinedButton>
                <OutlinedButton className={styles.button}>More filters</OutlinedButton>
                <OutlinedButton className={styles.button}>Latest</OutlinedButton>
            </div>

        </div>
    )
}

export default FilterItems