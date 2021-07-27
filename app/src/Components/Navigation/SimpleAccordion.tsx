//IMPORT TYPE
import React, { ReactNode } from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';



import styles from '../../Styles/ComponentesStyles/_Navbar.module.scss'


type ComponentProps = {
    readonly ClassName?: string,
    readonly AccordionContent?: ReactNode,
}

const SimpleAccordion = React.memo<ComponentProps>(({ ClassName, AccordionContent }) => {

    return (
        <div className={ClassName}>
            <Accordion>
                <AccordionSummary
                    className={styles['accordion-title']}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>More</Typography>
                </AccordionSummary>
                {AccordionContent}
            </Accordion>

        </div>
    );
})

export default SimpleAccordion