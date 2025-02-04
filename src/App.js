//Здесь можно собирать все наши компоненты для какой либо веб-страницы

import React from 'react'
import Header from './components/Header'
import Image from './img/image.png'

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            helpText: "help text",
            userData: ""
        }

        this.inputclick = this.inputclick.bind(this)
    }
    render() {
        return (<div className="name">
            <Header title="шапка сайта" name=""/>
            <h1>{this.state.helpText}</h1>
            <h2>{this.state.userData}</h2>
            <input placeholder={this.state.helpText} 
                onChange={event => this.setState({userData: event.target.value})}
                onClick={this.inputclick} onMouseEnter={this.mouseover}/>
            <p>{this.state.helpText === "Help text!" ? "Yes" : "No"}</p>
            <img src={Image}/>
        </div>)
    }
    inputclick() {
        
        this.setState({helpText: "Changed"})
        console.log("click")
    }
    mouseover() {console.log("mouse over")}
}

export default App