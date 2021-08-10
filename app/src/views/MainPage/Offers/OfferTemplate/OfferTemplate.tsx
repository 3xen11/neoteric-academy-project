//IMPORT STYLES
import styles from './offerTemplate.module.scss'






const OfferTemplate = ({ title, salary, city, remote, offerStatus, techStack }) => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>

            </div>
            <div className={styles.containerInfo}>

                <div className={styles.leftInfo}>

                    <span className={styles.jobPosition}>{title}</span>

                    <div className={styles.companyInfos}>
                        <span className={styles.companyInfo}> SwingDev</span>
                        <span className={styles.companyInfo}> {city}</span>
                        <span className={styles.companyInfo}> {remote}</span>
                        <span className={styles.earningsMobile} >{salary}</span>
                    </div>
                </div>

                <div className={styles.rightInfo}>

                    <div className={styles.offerInfo}>
                        <span className={styles.earnings} >{salary}</span>
                        <div className={styles.offerStatus}>{offerStatus}</div>
                    </div>

                    <div className={styles.requirements}>
                        <div className={styles.requirement}>{techStack[0]}</div>
                        <div className={styles.requirement}>{techStack[1]}</div>
                        <div className={styles.requirement}>{techStack[3]}</div>

                        <div className={styles.companyInfosMobile}>
                            <span className={styles.companyInfo}>{`${city}, `}</span>
                            <span className={styles.companyInfo}> {remote}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}



export default OfferTemplate;
