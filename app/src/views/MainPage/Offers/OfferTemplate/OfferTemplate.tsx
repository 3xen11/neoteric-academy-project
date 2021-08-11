
import styles from './offerTemplate.module.scss'
import TechOfferTemplate from './TechOfferTemplate/TechOfferTemplate'
import { Link } from 'react-router-dom'





const OfferTemplate = ({ logo, title, salary, city, remote, offerStatus, company, techStacks, link }) => {

    return (
        <Link to={link} style={{ textDecoration: 'none' }}>


            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo} alt='logo-company' />
                </div>
                <div className={styles.containerInfo}>

                    <div className={styles.leftInfo}>

                        <span className={styles.jobPosition}>{title}</span>

                        <div className={styles.companyInfos}>
                            <span className={styles.companyInfo}> {company}</span>
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

                            <TechOfferTemplate
                                techStack={techStacks} />

                            <div className={styles.companyInfosMobile}>
                                <span className={styles.companyInfo}>{`${city}, `}</span>
                                <span className={styles.companyInfo}> {remote}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </Link>


    )
}



export default OfferTemplate;
