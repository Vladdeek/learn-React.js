//в этом скрипте мы вызывем наши веб-страницы с компонентами 

import React from 'react'
import * as ReactDOMclient from 'react-dom/client'
import App from "./App"
import "./css/style.css"

const app = ReactDOMclient.createRoot(document.getElementById('app'));

app.render(<App/>)