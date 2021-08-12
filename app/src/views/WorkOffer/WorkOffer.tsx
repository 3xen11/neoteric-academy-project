import styles from './workOffer.module.scss'
import Navbar from "../../Components/Navbar/Navbar";
import InfoPanels from "./InfoPanels/InfoPanels";
import WorkOfferHeader from "./WorkOfferHeader/WorkOfferHeader";
import WorkApply from "./WorkApply/WorkApply";
import TechStackPanels from "./TechStackPanels/TechStackPanels";
import Description from "./Description/Description";
import { Route } from "react-router-dom"


const WorkOffer = ({ offers }) => {


    const Offers = offers.map(offer => (
        <Route path={offer.offers[0].link}>
            <div className={styles.container}>

                <WorkOfferHeader
                    title={offer.offers[0].title}
                    logo={offer.logo}
                    street={offer.address.street}
                    city={offer.address.city}
                    remote={offer.offers[0].remote}
                    lowest={offer.offers[0].lowestPrice}
                    highest={offer.offers[0].highestPrice}
                    currency={offer.offers[0].currency}
                    payment={offer.offers[0].payment}
                    agreement={offer.offers[0].agreement}
                />

                <InfoPanels
                    company={offer.company}
                    companySize={offer.companySize}
                    expirience={offer.offers[0].expirience}
                    offerStatus={offer.offers[0].offerStatus}
                />

                <div className={styles.map}>
                   
                </div>

                <div className={styles.break}></div>

                <TechStackPanels />



                <div className={styles.break}></div>
                <Description 
                description={offer.offers[0].description}/>
                <div className={styles.break}></div>
                <WorkApply />
            </div>
        </Route>
    ));



    return (
        <div className={styles.pageContainer}>
            <Navbar />
            {Offers}
            <div className={styles.mapHalf}></div>
        </div >
    )
}

export default WorkOffer;


// title={offer.offers[0].title} />