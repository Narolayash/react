import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Students from "./Students";
import UserGreeting from "./UserGreeting";
import List from "./List";
import Button1 from "./Button1";
import ProfilePic from "./ProfilePic";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import MyComponent2 from "./MyComponent2";
import ColorPicker from "./ColorPicker";
import MyComponent3 from "./MyComponent3";
import MyComponent4 from "./MyComponent4";
import MyComponent5 from "./MyComponent5";
import MyComponent6 from "./MyComponent6";
import MyComponent7 from "./MyComponent7";
import DigitalClock from "./DigitalClock";
import ComponentA from "./ComponentA";
import MyComponent8 from "./MyComponent8";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./tic-tac-toe/Game";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='tic-tac-toe' element={<Game />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;
