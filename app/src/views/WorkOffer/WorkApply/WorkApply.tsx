
import MainButton from '../../../Components/Buttons/MainButton'
import TextfieldSigninForm from '../../../Components/TextFields/TextfieldSigninForm'
import styles from './workApply.module.scss'



const WorkApply = () => {


    return (
        <div className={styles.componentContainer}>
            <h2>Apply for this job</h2>
            <form
                className={styles.workForm}
                action="">
                <div className={styles.inputContainer}>


                    <div className={styles.inputContacts}>

                        <div className={styles.nameInput}>
                            <p>First and last name*</p>
                            <TextfieldSigninForm
                                placeholder="Enter your first and last name"
                                type='text'
                                key='1'
                                className={styles.textfieldInput} />
                        </div>

                        <div className={styles.mailInput}>
                            <p>Email*</p>
                            <TextfieldSigninForm
                                placeholder="Enter your email address"
                                type='text'
                                key='2'
                                className={styles.textfieldInput} />
                        </div>

                    </div>

                    <div className={styles.introduceInput}>
                        <p>Introduce yourself (linkedin/github links) optional</p>
                        <TextfieldSigninForm
                            placeholder="Type something about you or paste links to your linkedin, github."
                            type='text'
                            key='2'
                            rows={5}
                            multiline={true}
                            className={styles.textfieldInput} />
                    </div>
                </div>
                <MainButton className={styles.applyButton}>Apply</MainButton>
            </form>
        </div>
    )
}

export default WorkApply