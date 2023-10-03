import React from 'react'
import Header from './components/Header'

const Carrier = ({ lang }) => {
  return (
    <div className="content">
    <div className="flex flex-col items-start justify-start w-100 px-[180px] carrier">
      <Header lang={lang}/>
    </div>
  </div>
  )
}

export default Carrier