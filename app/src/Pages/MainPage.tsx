import Navbar from "../Components/Navigation/Navbar"
import FilterItems from "../Components/Filter/FilterItems"
import { Button } from "@material-ui/core"

import styles from '../Styles/PagesStyles/_MainPage.module.scss'


const MainPage = () => {

    return (
        <div className={styles['main-page-container']}>
            <Navbar />
            <FilterItems className={styles['filter']} />
            <br />
            <div>
                <Button variant="contained" className={styles['offer-filter-button']}>With salary</Button>
                <Button variant="contained" className={styles['offer-filter-button']}>All Offers</Button>
            </div>
            <div className={styles['main-page']}>
                <div className={styles['offerts-half']}>oferty</div>
                <div className={styles['map-half']}>mapa</div>
            </div>

        </div>
    )
}

export default MainPage