import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add_to_cart, remove_to_cart, empty_cart } from '../redux/ReduxCart/CartAction'

const Home = () => {


  // const data = async () => {
  //   let ecodata = await fetch('http://localhost:3000/ecomall')
  //   .then(ecodata =>  ecodata.json())
  //   .then(ecodata =>  console.log(ecodata))
  // }


  // const data = async () => {
  //   try {
  //     let ecodata = await fetch('http://localhost:3000/ecomall')
  //     // .then(ecodata =>  ecodata.json())
  //     // .then(ecodata =>  console.log(ecodata))
  //     console.log(ecodata);
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // data()

  const data = () => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3000/ecomall')
        .then(response => {
          resolve(response); 
        })
        .catch(error => {
          reject(error); 
        });
    });
  };
  
  data()
    .then(ecodata => {
      console.log(ecodata);
    })
    .catch(error => {
      console.log(error);
    });
  

  console.log('Home Data', data);
  

  const productData = useSelector((state => state.cart))

  console.log('Home Data', productData);
  
  const dispatch = useDispatch()

  const product = {
    name:'Samsung S24',
    color:'Black',
    price:134400
  }

  return (
    <div className='heading'>
        <h1 className=''>This is Home Page</h1>
        <div className='flex flex-row gap-4 mt-4'>
        <button className='btn' onClick={() => dispatch(add_to_cart(product))}>Add To Cart</button>
        <button className='btn' onClick={() => dispatch(remove_to_cart(product))}>Remove From Cart</button>
        <button className='btn' onClick={() => dispatch(empty_cart(product))}>Empty Cart</button>
        </div>
    </div>
  )
}

export default Home