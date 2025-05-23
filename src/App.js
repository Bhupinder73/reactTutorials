import Components from "./Components/Components";
import Jsx from "./Components/Jsx";
import './App.css';
import Introduction from "./Components/Introduction";
import ReactES6 from "./ReactES6/ReactES6";
import Classes from "./ReactES6/Classes";
import ArrayMethods from "./ReactES6/ArrayMethods";
import Modules from "./ReactES6/Modules";
import Props from "./Components/Props";
import ParentProp from "./Props/ParentProp";
import Events from "./Components/Events";
import Key from "./Components/key";
import Styles from "./Styles/Styles";
import UseState from "./Hooks/UseState";
import UseEffect from "./Hooks/UseEffect";
import UseContext from "./Hooks/UseContext";

function App() {
  return (
    <>
      <Introduction/>
      <Jsx/>
      <Components/>
      <ReactES6/>
      <Classes/>
      <ArrayMethods/>
      <Modules/>
      <Props brand="Ford"/>
      <ParentProp/>
      <Events/>
      <Key/>
      <Styles/>
      <UseState/>
      <UseEffect/>
      <UseContext/>
    </>
  );
}

export default App;