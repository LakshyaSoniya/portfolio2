import React from 'react'

interface btnProps {
    text  : String;
}


const Button : React.FC<btnProps> = (props) => {
  return (
    <button>{props.text}</button>
  )
}

export default Button
