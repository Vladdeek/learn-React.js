// Используем ReactDOM.render для отображения React-элемента на странице.
// 1. Первый аргумент — это React-элемент (JSX), содержащий два заголовка: <h1> и <h2>.
// 2. Второй аргумент — это DOM-элемент с id="app", в который будет вставлен данный React-элемент.
ReactDOM.render(<div>
                    <h1>Привет</h1>
                    <h2>World</h2>
                </div>, document.getElementById("app"))