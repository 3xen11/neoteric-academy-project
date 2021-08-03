//IMPORTS COMPONENTS
import Navbar from '../../Components/Navbar/Navbar'
import FilterItems from "./Filter/FilterItems"
import OfferTemplate from './Offers/OfferTemplate/OfferTemplate'
import OffersFilterButton from './Offers/OfferFilterButton/OffersFilterButton'

//IMPORTS STYLES
import styles from './mainPage.module.scss'



const MainPage = () => {

    return (
        <div className={styles.container}>
            <Navbar />
            <FilterItems className={styles.filter} />
            <br />

            <div className={styles.mainPage}>
                <div className={styles.offertsHalf}>

                    <div className={styles.offerFilterButtons}>
                        <OffersFilterButton className={styles.filterButton}>With salary</OffersFilterButton>
                        <OffersFilterButton className={styles.filterButton}>All Offers</OffersFilterButton>
                    </div>

                    <OfferTemplate></OfferTemplate>
                    <OfferTemplate></OfferTemplate>
                    <OfferTemplate></OfferTemplate>
                    <OfferTemplate></OfferTemplate>
                    <OfferTemplate></OfferTemplate>
                    <OfferTemplate></OfferTemplate>
                </div>
                <div className={styles.mapHalf}></div>
            </div>

        </div>
    )
}

export default MainPage