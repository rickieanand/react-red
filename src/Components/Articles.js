import React, { Component} from "react";
import {hot} from "react-hot-loader";
import ArticleCard from "./ArticleCard";
import style from "../../style/index.less";

class Articles extends Component{
  constructor() {
    super()
  }

  render(){
    const list = this.props.list && this.props.list.map((article, key)=>
    <ArticleCard article={article} key={key} />
  )
    return(
      <div className={style.middle}>
        <div className={style.articles}>
          {list}
        </div>
      </div>
    );
  }
}

export default hot(module)(Articles);
