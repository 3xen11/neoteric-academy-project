//IMPORT TYPE
import React, { ReactNode } from "react"



type ComponentProps = {
  ClassName?: string,
  children?: ReactNode
}



const SigninCard = React.memo<ComponentProps>(({ ClassName, children }) => {

  return (
    <div className={ClassName}>
      {children}
    </div>
  )
})

export default SigninCard