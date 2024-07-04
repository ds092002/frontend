import "./App.css";
// import Header from './components/Header';
import Card from "./components/Card";
import image1 from "./images/demo11(1).avif";
import image2 from "./images/demo11(2).jpg";
import image3 from "./images/demo11(3).jpg";
import image4 from "./images/demo11(4).jpg";
import image5 from "./images/demo11(5).jpg";
import image6 from "./images/demo11(6).jpg";

function App() {
  return (
    <div className="App">
      {/* <Header name="Dhaval" age="22" city="Surat"/> */}
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">
          Responsive Product card grid
        </h1>
        <h1 className="text-3xl">Tailwind CSS</h1>
      </div>

      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5 justify-center">
        <Card image={image1} delPrice="199$" curPrice="149$" />
        <Card image={image2} delPrice="299$" curPrice="249$" />
        <Card image={image3} delPrice="399$" curPrice="349$" />
        <Card image={image4} delPrice="499$" curPrice="449$" />
        <Card image={image5} delPrice="599$" curPrice="549$" />
        <Card image={image6} delPrice="699$" curPrice="649$" />
      </div>
    </div>
  );
}

export default App;
