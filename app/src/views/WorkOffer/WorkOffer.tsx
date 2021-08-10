import React, { FC } from "react";
import styles from './workOffer.module.scss'
import Navbar from "../../Components/Navbar/Navbar";

import InfoPanels from "./InfoPanels/InfoPanels";
import WorkOfferHeader from "./WorkOfferHeader/WorkOfferHeader";
import WorkApply from "./WorkApply/WorkApply";
import TechStackPanels from "./TechStackPanels/TechStackPanels";
import Description from "./Description/Description";




const WorkOffer: FC = () => {


    return (
        <div className={styles.pageContainer}>
            <Navbar />
            <div className={styles.container}>

                <WorkOfferHeader />
                <InfoPanels />
                <div className={styles.map}>
                    MAPA
                </div>
                <div className={styles.break}></div>
                <TechStackPanels/>
                <div className={styles.break}></div>
                <Description/>
                <div className={styles.break}></div>
                <WorkApply />
            </div>
            <div className={styles.mapHalf}></div>
        </div >
    )
}

export default WorkOffer;