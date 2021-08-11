import InfoPanel from "./InfoPanel/InfoPanel"
import styles from './infoPanels.module.scss'
import OfficeLogo from '../../../assets/imgPanels/office.svg'
import EmployeeLogo from '../../../assets/imgPanels/employee.svg'
import ExpirienceLogo from '../../../assets/imgPanels/expirience.svg'
import TimeLogo from '../../../assets/imgPanels/time.svg'

const InfoPanels = ({ company }) => {

    return (
        <div className={styles.infoPanels}>

            <InfoPanel
                className={styles.offerPanel}
                panelText={
                    <div>
                        <div>{company}</div>
                        <div>company name</div>
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
                        <div>20-50</div>
                        <div>company size</div>
                    </div>
                } >  <img
                    src={EmployeeLogo}
                    className={styles.panelLogo}
                    alt='logo-employee' /></InfoPanel>


            <InfoPanel
                className={styles.offerPanel}
                panelText={
                    <div>
                        <div>Senior</div>
                        <div>EXP. lvl</div>
                    </div>
                } > <img
                    src={ExpirienceLogo}
                    className={styles.panelLogo}
                    alt='logo-expirience' /> </InfoPanel>


            <InfoPanel
                className={styles.offerPanel}
                panelText={
                    <div>
                        <div>New</div>
                        <div>Added</div>
                    </div>
                } > <img
                    src={TimeLogo}
                    className={styles.panelLogo}
                    alt='logo-time' /> </InfoPanel>

        </div>
    )
}


export default InfoPanels