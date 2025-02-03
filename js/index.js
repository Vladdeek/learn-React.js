// Без использования JSX
//ReactDOM.render(React.createElement("input", {
//    placeholder: "Help text",
//    onClick: () => console.log("clicked"),
//    onMouseEnter: () => console.log("mouse over"),
//}), document.getElementById("app"))

//function inputclick( ){
//    console.log("click")
//}

const inputclick = () => console.log("click")
const mouseover = () => console.log("mouse over")

const helptext = "Help text!"

const elements = <div className="name">
                    <h1>{helptext}</h1>
                    <input placeholder={helptext} onClick={inputclick} onMouseEnter={mouseover}/>
                    <p>{helptext == "Help text!" ? "Yes" : "No"}</p>
                </div>
const app = document.getElementById("app")

ReactDOM.render(elements, app)