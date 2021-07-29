//IMPORT TYPE
import React, { ReactNode } from "react"



type ComponentProps = {
  className?: string,
  children?: ReactNode
}



const SigninCard = React.memo<ComponentProps>(({ className, children }) => {

  return (
    <div className={className}>
      {children}
    </div>
  )
})

export default SigninCard