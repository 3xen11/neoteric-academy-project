//IMPORTS STYLES
import styles from '../../Styles/ComponentesStyles/_Filter.module.scss'

//IMPORTS FROM MATERIAL UI
import OutlinedButton from "../Buttons/OutlinedButton"


const FilterItems = ({ className }) => {


    return (
        <div className={`${styles['filter-button-container']} ${className}`}>
            <OutlinedButton> Lupa         </OutlinedButton>
            <OutlinedButton> Location     </OutlinedButton>
            <OutlinedButton> Tech         </OutlinedButton>
            <OutlinedButton> More filters </OutlinedButton>
            <OutlinedButton> Latest       </OutlinedButton>
        </div>
    )
}

export default FilterItems