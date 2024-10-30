

import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStorage";
import Header from "./components/Header";

function App() {
  return (
  
  <Provider store={appStore}> <Body/></Provider>
  
  );
  
}

export default App;
