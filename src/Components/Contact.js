import React, { useContext } from 'react'
import nameOfContextHere from '../Hooks/Context'

function Contact() {
  const studentName = useContext(nameOfContextHere)
  console.log(studentName); // simple implementation of context
  return (
    <div>Contact us?{studentName.map((x)=> ' ' +x.name+' ' )} context used</div>
  )
}

export default Contact