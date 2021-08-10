import TechStackPanel from "./TechStackPanel/TechStackPanel";
import styles from './techStackPanels.module.scss'


const TechStackPanels = () => {


    return(
        <div className={styles.techStackContainer}>
        <h2>Tech stack</h2>
        <div className={styles.stackContainer}>

            <TechStackPanel>
                <div>poziom</div>
                <h2>Scripting</h2>
                <p>regular</p>
            </TechStackPanel>

            <TechStackPanel>
                <div>poziom</div>
                <h2>Scripting</h2>
                <p>regular</p>
            </TechStackPanel>

            <TechStackPanel>
                <div>poziom</div>
                <h2>Scripting</h2>
                <p>regular</p>
            </TechStackPanel>

            <TechStackPanel>
                <div>poziom</div>
                <h2>Scripting</h2>
                <p>regular</p>
            </TechStackPanel>

            <TechStackPanel>
                <div>poziom</div>
                <h2>Scripting</h2>
                <p>regular</p>
            </TechStackPanel>

            <TechStackPanel>
                <div>poziom</div>
                <h2>Scripting</h2>
                <p>regular</p>
            </TechStackPanel>
        </div>
    </div>
    )
}

export default TechStackPanels