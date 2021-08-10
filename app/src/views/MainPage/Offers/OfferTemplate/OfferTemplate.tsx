//IMPORT STYLES
import styles from './offerTemplate.module.scss'






const OfferTemplate = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>

            </div>
            <div className={styles.containerInfo}>

                <div className={styles.leftInfo}>

                    <span className={styles.jobPosition}>Fullstack (.NetCore+Angular) 100% REMOTE</span>

                    <div className={styles.companyInfos}>
                        <span className={styles.companyInfo}> SwingDev</span>
                        <span className={styles.companyInfo}> Warszawa</span>
                        <span className={styles.companyInfo}> fully remote</span>
                        <span className={styles.earningsMobile} >81500 - 93000 pln</span>
                    </div>
                </div>

                <div className={styles.rightInfo}>

                    <div className={styles.offerInfo}>
                        <span className={styles.earnings} >81500 - 93000 pln</span>
                        <div className={styles.offerStatus}>new</div>
                    </div>

                    <div className={styles.requirements}>
                        <div className={styles.requirement}>ux</div>
                        <div className={styles.requirement}>ui</div>
                        <div className={styles.requirement}>english</div>

                        <div className={styles.companyInfosMobile}>
                            <span className={styles.companyInfo}> Warszawa,</span>
                            <span className={styles.companyInfo}> fully remote</span>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}



export default OfferTemplate;
