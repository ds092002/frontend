import './App.css';
import pikachu from "./images/image.png";
import Marquee from "react-fast-marquee";


function App() {
  // topics: Rendering Expressions, Lists (map()), Methods, Images

  const firstName = "Dhaval";
  const lastName = "Solanki";

  // Rendering Lists => using map () method
  const arr = ["Dhaval" , "vijay" , "Darshan", "Krish", "Bhautik", "Mahendra", "Vrishabh"];
  return (
    <div className="App">
      <h1 className='h1'>Rendaring And Listing</h1>
      <h2>
        My First Name is {firstName} and My Last Name is {lastName}
      </h2>
      <hr/>
      <h1>10 and 60 Sum Is { 10 + 60 }</h1>
      <hr/>
      {arr.map((cvalue, index, arr) => {
        return (
          <div>
             <h2 key={index}>{index+1}. {cvalue}</h2>
          </div>
        );
      })}
      <hr/>
      <h1>How To Rendaring Image In React Js</h1>
      <img src="" alt="" />
      <hr/>
      <Marquee delay={2} speed={250}><img src={pikachu} alt="image"/></Marquee>
    </div>
  );
}

export default App;
