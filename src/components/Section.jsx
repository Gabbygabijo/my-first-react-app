import { useState } from 'react'
import Button from './Button'


const Section = () => {
  const [input, setInput] = useState('')
    const [tag, setTag] = useState([])
    

    const handleClick = (e) => {
      e.preventDefault()
      const id = Math.floor(Math.random() * 100 + 1)
      const newTag = { id, input }
      setTag([ ...tag, newTag ])
      setInput('')
    }

    const handleChange = (e) => setInput(e.target.value)

  return (
    <>
    <header className='header'>
        <h1>Name Tag Generator</h1>
        <form>
          <input type="text" value={input} onChange={handleChange} placeholder='Add a tag name here' className='input' />
          <Button onClick={handleClick} name={'Create Name Tag'} />
        </form>
        
    </header>
    <section className='container'>
        {tag.map((input, i) => (
          <div key={i}>
            <div className="head"><span> </span><h1 className="h1">HELLO</h1> <p className="pp">My name is</p></div> <p className="p">{input.input} </p> <div className="tail"></div>
          </div>
        ))}
    </section>
    </>
    
  )
}

export default Section