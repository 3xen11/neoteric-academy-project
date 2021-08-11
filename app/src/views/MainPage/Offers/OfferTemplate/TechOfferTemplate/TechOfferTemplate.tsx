import styles from './techOfferTemplate.module.scss'


const TechOfferTemplate = ({techStack}) => {


    return(
        <div className={styles.requirements}>
             <div className={`${techStack[0] ? styles.requirement : styles.hiding}`}>{techStack[0]}</div>
             <div className={`${techStack[1] ? styles.requirement : styles.hiding}`}>{techStack[1]}</div>
             <div className={`${techStack[2] ? styles.requirement : styles.hiding}`}>{techStack[2]}</div>
        </div>
    )
    
    }

    export default TechOfferTemplate