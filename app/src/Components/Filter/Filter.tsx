import FilterButton from "./FilterButton"
import styles from '../../Styles/ComponentesStyles/_Filter.module.scss'

const Filter = () => {


    return (
        <div className={styles['filter-button-container']}>
            <FilterButton OnClick={'.'}> Lupa </FilterButton>
            <FilterButton OnClick={'.'}> Location </FilterButton>
            <FilterButton OnClick={'.'}> Tech </FilterButton>
            <FilterButton OnClick={'.'}> More filters </FilterButton>
            <FilterButton OnClick={'.'}> Latest </FilterButton>
        </div>
    )
}

export default Filter