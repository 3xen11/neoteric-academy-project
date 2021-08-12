import React, { FC } from "react";
import styles from './workOffer.module.scss'
import Navbar from "../../Components/Navbar/Navbar";

import InfoPanels from "./InfoPanels/InfoPanels";
import WorkOfferHeader from "./WorkOfferHeader/WorkOfferHeader";
import WorkApply from "./WorkApply/WorkApply";
import TechStackPanels from "./TechStackPanels/TechStackPanels";
import Description from "./Description/Description";
import {Route} from "react-router-dom"


const WorkOffer = ({ offers }) => {



    const Offers = offers.map(offer => (
<Route path={offer.offers[0].link}>
        <div className={styles.container}>

            <WorkOfferHeader
                title={offer.offers[0].title}
                logo={offer.logo} />

            <InfoPanels
                company={offer.company} />
            <div className={styles.map}>
                MAPA
            </div>
            <div className={styles.break}></div>
            <TechStackPanels />
            <div className={styles.break}></div>
            <Description />
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