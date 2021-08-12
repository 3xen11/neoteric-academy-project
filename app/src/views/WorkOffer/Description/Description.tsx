import styles from './description.module.scss'

const Description = ({description}) => {



    return(
        <div className={styles.description}>
                    <h2>Description</h2>
                    <p>
                        {description}
                    </p>
                </div>
    )
}


export default Description