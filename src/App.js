import React from 'react';
// import './App.css';
import Second from './Second';
import pic2 from "./pic3.jpg";
import pic3 from "./pic2.jpg";
import pic1 from "./pic1.jpg";

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <Second name={"Ram"} media={pic1}/>
      <Second name={"Tamil"} media={pic3}/>
      <Second name={"Zoya"} media={pic2} />
    </div>
  );
}
}

export default App;