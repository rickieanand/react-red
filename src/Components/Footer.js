import React, { Component} from "react";
import {hot} from "react-hot-loader";
import style from "../../style/index.less";

class Footer extends Component{
  constructor() {
    super()
  }

  render(){
    return(
      <div className={style.footer}>
        <div> Hello, World!!!! </div>
      </div>
    );
  }
}

export default hot(module)(Footer);
