import { useState } from 'react'

import { reverse } from './helpers'
import './styles.css'
import Title from "./title"
import Length from "./length"
import Reverse from "./reversed"

export default function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
    {/* <h1 className="title">Welcome, {name}!</h1> */}
    <Title name = {name}/>
    <Length name = {name}  length = {name.length}/>
    <Reverse name = {name}/>
    </div>
  )
}
