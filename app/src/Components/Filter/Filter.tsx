import styles from '../../Styles/ComponentesStyles/_Filter.module.scss'
import OutlinedButton from "../Buttons/OutlinedButton"


const Filter = () => {


    return (
        <div className={styles['filter-button-container']}>
            <OutlinedButton OnClick={'.'}> Lupa </OutlinedButton>
            <OutlinedButton OnClick={'.'}> Location </OutlinedButton>
            <OutlinedButton OnClick={'.'}> Tech </OutlinedButton>
            <OutlinedButton OnClick={'.'}> More filters </OutlinedButton>
            <OutlinedButton OnClick={'.'}> Latest </OutlinedButton>
        </div>
    )
}

export default Filter