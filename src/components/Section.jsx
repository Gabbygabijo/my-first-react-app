// import { useState } from 'react'
import Button from './Button'

const Section = () => {
    // const [tag, seTag] = useState('')
  return (
    <section>
        <h1>Name Tag Generator</h1>
        <input type="text" placeholder='input your name' name="" id="" />
        <Button name={'Add name'} />
        <div></div>
    </section>
  )
}

export default Section