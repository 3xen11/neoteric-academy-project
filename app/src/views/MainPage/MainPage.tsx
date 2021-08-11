//IMPORTS COMPONENTS
import Navbar from '../../Components/Navbar/Navbar'
import FilterItems from "./Filter/FilterItems"
import OfferTemplate from './Offers/OfferTemplate/OfferTemplate'
import OffersFilterButton from './Offers/OfferFilterButton/OffersFilterButton'

//IMPORTS STYLES
import styles from './mainPage.module.scss'





const MainPage = ({ offers }) => {





    const templateOffers = offers.map(offer => (
        <OfferTemplate 
        key={offer.key}
        company={offer.company}
        title={offer.offers[0].title}
        salary={offer.offers[0].salary}
        city={offer.address.city}
        remote={offer.offers[0].remote}
        offerStatus={offer.offers[0].offerStatus}
        logo={offer.logo}
        techStacks={offer.offers[0].techStack}
        />
    ));
 
   
    

    return (

        <div className={styles.container}>
            <Navbar />
            <FilterItems className={styles.filter} />
            <br />

            <div className={styles.mainPage}>
                <div className={styles.offertsHalf}>

                    <div className={styles.offerFilterButtons}>
                        <OffersFilterButton className={styles.filterButton}>Offers with salary</OffersFilterButton>
                        <OffersFilterButton className={styles.filterButton}>All Offers</OffersFilterButton>
                    </div>
                  {templateOffers}
                </div>
                <div className={styles.mapHalf}></div>
            </div>

        </div>
    )
}

export default MainPage