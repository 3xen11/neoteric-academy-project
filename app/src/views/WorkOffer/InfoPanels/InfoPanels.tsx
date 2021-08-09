import InfoPanel from "./InfoPanel/InfoPanel"
import styles from './infoPanels.module.scss'
import OfficeLogo from '../../../assets/imgPanels/office.svg'


const InfoPanels = () => {

    return (
        <div className={styles.infoPanels}>

            <InfoPanel
                className={styles.offerPanel}
                panelText={
                    <div>
                        <div>Smart4Aviation</div>
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
                        <div>Smart4Aviation</div>
                        <div>company name</div>
                    </div>
                } >  <img
                    src={OfficeLogo}
                    className={styles.panelLogo}
                    alt='logo-office' /></InfoPanel>


            <InfoPanel
                className={styles.offerPanel}
                panelText={
                    <div>
                        <div>Smart4Aviation</div>
                        <div>company name</div>
                    </div>
                } > <img
                    src={OfficeLogo}
                    className={styles.panelLogo}
                    alt='logo-office' /> </InfoPanel>


            <InfoPanel
                className={styles.offerPanel}
                panelText={
                    <div>
                        <div>Smart4Aviation</div>
                        <div>company name</div>
                    </div>
                } > <img
                    src={OfficeLogo}
                    className={styles.panelLogo}
                    alt='logo-office' /> </InfoPanel>

        </div>
    )
}


export default InfoPanels