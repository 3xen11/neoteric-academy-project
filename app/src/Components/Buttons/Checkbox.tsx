//IMPORTS FROM REACT
import React from 'react';

//IMPROTS FROM MATERIAL UI
import Checkbox from '@material-ui/core/Checkbox';




type ComponentProps = {
    readonly ClassName?: string,
}


const CheckboxForm = React.memo<ComponentProps>(({ ClassName }) => {

    return (
        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className={ClassName} style={{
            transform: "scale(1.4)",
        }} />
    )

})

export default CheckboxForm