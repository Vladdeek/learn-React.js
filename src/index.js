import React from 'react'
import * as ReactDOMclient from 'react-dom/client'

const inputclick = () => console.log("click")
const mouseover = () => console.log("mouse over")

const helptext = "Help text"

const elements = (<div className="name">
                    <h1>{helptext}</h1>
                    <input placeholder={helptext} onClick={inputclick} onMouseEnter={mouseover}/>
                    <p>{helptext === "Help text!" ? "Yes" : "No"}</p>
                </div>)

const app = ReactDOMclient.createRoot(document.getElementById('app'));
app.render(elements)


