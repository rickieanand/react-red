import React, { Component} from "react";
import {hot} from "react-hot-loader";
import style from "../../style/index.less";

class Header extends Component{
  constructor() {
    super()
  }

  render(){
    return(
      <div className={style.header}>
        {/* <div className={style.right}>
          <img className='image' src={this.props.shibu} />
        </div> */}
        The News
      </div>
    );
  }
}

export default hot(module)(Header);
