import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <div className="bg-white text-black">
        <Header />
        <div className="relative flex h-svh w-svw m-auto after:content-[''] after:bg-gray-800 after:absolute after:w-[490px] after:h-full after:skew-x-[15deg] after:-right-36 before:-left-36">
          <div className="relative flex h-svh w-svw m-auto after:content-[''] after:bg-gray-800 after:absolute after:w-[490px] after:h-full after:skew-x-[15deg] after:-left-36"></div>

          <div className="self-center m-auto w-[40%] text-center mt-[250px] mr-[800px]">
            <div className="flex items-center">
              <p className="bg-[#FFB400] h-1 w-12 rounded-sm mr-6"></p>
              <h1 className="uppercase text-[#FFB400] text-5xl font-Poppins font-bold">
                I'M Dhaval Solanki.
              </h1>
            </div>

            <h1 className="uppercase text-5xl font-Poppins font-bold pl-[71px]">
              Web Developer
            </h1>
            <p className="tracking-wider leading-7 max-w-[550px] sm:max-lg:mx-auto mt-7 font-semibold">
              I'm a India based full-stack developer focused on crafting clean &
              user‑friendly experiences, I am passionate about building
              excellent software that improves the lives of those around me.
            </p>

            <div className="cursor-auto mt-8 font-bold ml-20">
              <button className="border-2 border-yellow-500 rounded-full pl-8 font-bold text-sm relative z-50 duration-500 overflow-hidden before:content[''] before:absolute before:bg-yellow-500 before:h-full before:w-0 before:right-0 before:rounded-full before:z-[-1] before:duration-500 hover:before:w-full hover:before:duration-500">
                MORE ABOUT ME
                <i class="bg-yellow-500 rounded-full text-white p-4 ml-4 text-2xl font-extrabold relative z-50"><a href='#'><FontAwesomeIcon icon={faDownload} /></a></i>
              </button>
            </div>

            <div></div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
