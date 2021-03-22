import React, { useRef } from 'react'
import { Home } from './componennts/Home';


export default function App() {
  const componentRef = useRef();
  return (
    <Home ref={componentRef} />
  )
}









