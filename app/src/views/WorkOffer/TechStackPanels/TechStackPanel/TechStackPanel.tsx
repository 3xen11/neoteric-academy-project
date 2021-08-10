import styles from './techStackPanel.module.scss'


const TechStackPanel = ({children}) => {

    return (
        <div className={styles.techStack}>
           {children}
        </div>
    )


}


export default TechStackPanel;






