
import styles from './infoPanel.module.scss'
import classNames from 'classnames';



const InfoPanel = ({ children, panelText, className }) => {




    return (
        <div className={classNames(styles.panelText, className)}>
            <div className={styles.panelIcon}>{children}</div>
            <div className={styles.text}>{panelText}</div>
        </div>
    )
}

export default InfoPanel