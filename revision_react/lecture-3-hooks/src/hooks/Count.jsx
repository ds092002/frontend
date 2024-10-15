import React from 'react'
import { memo } from 'react'
import NestedChild from './NestedChild';

const Count = (props) => {

  console.log('Child Count Rendered!');
  
  return (
    <div>
      <h1>This is Child Components {props.value}</h1>
      <NestedChild />
    </div>
  )
}

export default memo(Count)