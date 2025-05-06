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
    </>
  );
}

export default App;