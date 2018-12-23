import React, { Component} from "react";
import {hot} from "react-hot-loader";
//import "./style/index.less";
//import "../style/index.less";
import style from "../style/index.less";

class App extends Component{
  render(){
    return(
      <div className="App">
        <div className={style.header}> Hello, World!!!! </div>
      </div>
    );
  }
}

export default hot(module)(App);
