import React, {useState} from 'react'
import Counter from './Counter';

const UseState = () => {
  
  const [count, setCount] = useState(0);

  console.log(count);

// let count = 0

// function counter(){
//     return console.log(count+=1);
// }
// console.log(count);

  function counter() {
    setCount( count + 1);
  }


  return (
    <div>
        <h1 className='p-2 bg-sky-400 text-white text-center'>This is React useState Hook</h1>
        <Counter count={count}/>
        <button onClick={counter}>Click me</button>
    </div>
  )
}

export default UseState