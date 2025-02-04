//Здесь можно собирать все наши компоненты для какой либо веб-страницы

import React from 'react'
import Header from './components/Header'
import Image from './img/image.png'

class App extends React.Component{
    helpText = "help text"
    render() {
        return (<div className="name">
            <Header title="шапка сайта" name=""/>
            <h1>{this.helpText}</h1>
            <input placeholder={this.helpText} onClick={this.inputclick} onMouseEnter={this.mouseover}/>
            <p>{this.helpText === "Help text!" ? "Yes" : "No"}</p>
            <img src={Image}/>
        </div>)
    }
    inputclick() {console.log("click")}
    mouseover() {console.log("mouse over")}
}

export default App