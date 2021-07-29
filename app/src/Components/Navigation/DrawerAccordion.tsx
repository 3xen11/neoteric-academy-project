//IMPORT TYPE
import React, { ReactNode } from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';



import styles from '../../Styles/ComponentesStyles/ButtonsStyles/_DrawerAccordion.module.scss'


type ComponentProps = {
    readonly className?: string,
    readonly accordionContent?: ReactNode,
}

const SimpleAccordion = React.memo<ComponentProps>(({ className, accordionContent }) => {

    return (
        <div className={className}>
            <Accordion>
                <AccordionSummary
                    className={styles['accordion-title']}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={styles['accordion-button']}>More</Typography>
                </AccordionSummary>
                {accordionContent}
            </Accordion>

        </div>
    );
})

export default SimpleAccordion