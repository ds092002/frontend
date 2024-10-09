import React from 'react'
import { useState, useEffect } from 'react'

const ListRenedring = () => {

    const [postData, setPostData]  = useState([]);
    const [count, setCount] = useState(0)

    //     useEffect(function data(){
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(json => setPostData(json))
    // })

    
    useEffect(() => console.log('UseEffect'))
    
    
    console.log('postData', postData);

    const wonders = [
        'Taj Mahal',
        'Chichen Itza',
        'Petra',
        'Colosseum',
        'Machu Picchu',
        'Great Wall',
        'Christ the Redeemer'
    ]


  return (
    <div>
        <h1 className='text-center bg-yellow-400 text-4xl text-white font-bold py-4 w-full'>This is List-Rendering In React</h1>
        {/* <ul>
            {
              postData.map((item) => {
              return(
                <li>{
                  item.id
                }</li>
              )
            })}
        </ul>
        <button onClick={data()}>Click For Data</button> */}
        <button onClick={() => setCount(count + 1)}>Click For data</button>
    </div>
  )
}

export default ListRenedring    