//IMPORTS FROM MATERIAL UI
import OutlinedButton from "../Buttons/OutlinedButton"

//IMPORTS STYLES
import styles from '../../Styles/ComponentesStyles/_Filter.module.scss'


const FilterItems = ({ className }) => {


    return (
        <div className={`${styles['filter-button-container']} ${className}`}>


            <OutlinedButton>Lupa</OutlinedButton>
            <OutlinedButton className={styles['filter-button-container__expandable-button']}>Location 🠗</OutlinedButton> {/*rozwijany button*/}


            <div className={styles['filter-button-container__hiding']}>
            <OutlinedButton>Location</OutlinedButton>
            <OutlinedButton>Tech</OutlinedButton>
            <OutlinedButton>More filters</OutlinedButton>
            <OutlinedButton>Latest</OutlinedButton>
            </div>
          
        </div>
    )
}

export default FilterItems