import InfoPanel from "./InfoPanel/InfoPanel"
import styles from './infoPanels.module.scss'
import OfficeLogo from '../../../assets/imgPanels/office.svg'
import EmployeeLogo from '../../../assets/imgPanels/employee.svg'
import ExpirienceLogo from '../../../assets/imgPanels/expirience.svg'
import TimeLogo from '../../../assets/imgPanels/time.svg'

const InfoPanels = ({ company, companySize, expirience, offerStatus }) => {

    return (
        <div className={styles.infoPanels}>

            <InfoPanel
                className={styles.offerPanel}
                panelText={
                    <div>
                        <div className={styles.informations}>{company}</div>
                        <div className={styles.headerInformations}>company name</div>
                    </div>
                }>
                <img
                    src={OfficeLogo}
                    className={styles.panelLogo}
                    alt='logo-office' />
            </InfoPanel>


            <InfoPanel
                className={styles.offerPanel}
                panelText={
                    <div>
                        <div className={styles.informations}>{companySize}</div>
                        <div className={styles.headerInformations}>company size</div>
                    </div>
                } >  <img
                    src={EmployeeLogo}
                    className={styles.panelLogo}
                    alt='logo-employee' /></InfoPanel>


            <InfoPanel
                className={styles.offerPanel}
                panelText={
                    <div>
                        <div className={styles.informations}>{expirience}</div>
                        <div className={styles.headerInformations}>EXP. lvl</div>
                    </div>
                } > <img
                    src={ExpirienceLogo}
                    className={styles.panelLogo}
                    alt='logo-expirience' /> </InfoPanel>


            <InfoPanel
                className={styles.offerPanel}
                panelText={
                    <div>
                        <div className={styles.informations}>{offerStatus}</div>
                        <div className={styles.headerInformations}>Added</div>
                    </div>
                } > <img
                    src={TimeLogo}
                    className={styles.panelLogo}
                    alt='logo-time' /> </InfoPanel>

        </div>
    )
}


export default InfoPanels