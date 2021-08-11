import styles from './workOfferHeader.module.scss'

const WorkOfferHeader = ({ title, logo }) => {


    return (
        <div className={styles.componentContainer}>
            <div className={styles.aboutCompany}>
                <div ><img src={logo} alt='logo-company' className={styles.logo} /></div>
                <div className={styles.companyInfo}>
                    <h3>{title}</h3>
                    <p>6906 Miramar Rd, Ste. 382, San Dieg</p>
                    <div>Fully Remote</div>
                </div>
            </div>
            <p> <h3>6 500 - 8 500 USD net/month - B2B</h3> </p>
        </div>
    )
}

export default WorkOfferHeader