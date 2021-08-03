//IMPORT TYPE
import React, { ReactNode } from 'react';

//IMPORTS FROM MATERIAL UI
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';

//IMPORTS STYLES
import styles from './drawerAccordion.module.scss'


type ComponentProps = {
    readonly className?: string,
    readonly accordionContent?: ReactNode,
}

const SimpleAccordion = React.memo<ComponentProps>(({ className, accordionContent }) => {

    return (
        <div className={className}>
            <Accordion>
                <AccordionSummary className={styles.accordionTitle}>
                    <div className={styles.accordionButton}>More</div>
                </AccordionSummary>
                {accordionContent}
            </Accordion>

        </div>
    );
})

export default SimpleAccordion