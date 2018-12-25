import React, { Component} from "react";
import {hot} from "react-hot-loader";
import style from "../../style/index.less";

class ArticleCard extends Component{
  constructor() {
    super()
    this.state = {
      articles: null
    }
  }
    render() {
        const {article, key} = this.props
        return (
            <div className={style.article} key={key}>
                <h1 className={style.__title}>{article.title}</h1>
                <img className={style.__image} src={article.urlToImage} alt={article.title}/>
                <h3 className={style.__description}>{article.description}</h3>
                <h4 className={style.__author}>{article.author}</h4>
            </div>
        )
    }
}
export default hot(module)(ArticleCard);
