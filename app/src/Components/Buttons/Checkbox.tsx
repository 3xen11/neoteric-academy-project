//IMPORTS FROM REACT
import React from 'react';

//IMPROTS FROM MATERIAL UI
import Checkbox from '@material-ui/core/Checkbox';




type ComponentProps = {
    readonly className?: string,
}


const CheckboxForm = React.memo<ComponentProps>(({ className }) => {

    return (
        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className={className} style={{
            transform: "scale(1.4)",
        }} />
    )

})

export default CheckboxForm