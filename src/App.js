import React, { Component} from "react";
import {hot} from "react-hot-loader";
import axios from 'axios'

import Header from './Components/Header'
import Articles from './Components/Articles' 
import Footer from './Components/Footer'

import style from '../style/index.less'
class App extends Component{
  constructor() {
    super()
    this.state = {
      list: null,
      // shibu: '',
      // quote: '',
      // yesNo: {
      //   answer: '',
      //   image: ''
      // }
    }
  }

  componentDidMount() {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=82faebf4a3944b1a879098f025968d90')
    .then(response =>
      this.setState({
        list: response.data.articles
      })
    )


    // axios.get('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=false')
    // .then(response =>{
    //   this.setState({
    //     shibu: response.data[0]
    //   })
    // }
    // )

    // axios.get('https://yesno.wtf/api')
    // .then(response =>
    //   this.setState({
    //     yesNo: {
    //       answer: response.answer,
    //       image: response.image
    //     }
    //   })
    // )
  }
 
  render(){

    return(
      <div className={style.main}>
        <Header />
        <Articles list={this.state.list}/>
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);
