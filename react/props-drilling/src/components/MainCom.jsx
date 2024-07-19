import React from 'react'
import ComponentA from './ComponentA'

const MainCom = (props) => {
  return (
    <div>
        <h1 className='heading'>This Is Main Component</h1>
        <ComponentA name='React JS'/>
    </div>
  )
}

export default MainCom