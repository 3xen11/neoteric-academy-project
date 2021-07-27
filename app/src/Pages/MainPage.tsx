import Navbar from "../Components/Navigation/Navbar"
import Filter from "../Components/Filter/Filter"
import { Button } from "@material-ui/core"

import styles from '../Styles/ComponentesStyles/_MainPage.module.scss'


const MainPage = () => {

    return (
        <div>
            <Navbar />
            <Filter />
            <br />
            <div>
                <Button variant="contained" className={styles['offer-filter-button']}>With salary</Button>
                <Button variant="contained" className={styles['offer-filter-button']}>All Offers</Button>
            </div>
        </div>
    )
}

export default MainPage