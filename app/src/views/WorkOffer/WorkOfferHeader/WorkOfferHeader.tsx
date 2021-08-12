import styles from './workOfferHeader.module.scss'

const WorkOfferHeader = ({ title, logo, street, city, remote, lowest, highest, currency, payment, agreement }) => {


    return (
        <div className={styles.componentContainer}>
            <div className={styles.aboutCompany}>
                <div className={styles.logoContainer} ><img src={logo} alt='logo-company' className={styles.logo} /></div>
                <div className={styles.companyInfo}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.street}>{`${street}, ${city} `}</p>
                    <div>{remote}</div>
                </div>
            </div>
            <p>
                <h3>{lowest} - {highest} {currency} <span className={styles.agreementStyle}> {payment} - {agreement}</span></h3>
            </p>
        </div>
    )
}

export default WorkOfferHeader