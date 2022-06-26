import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Provider as LanguageProvider } from './Context/Language'
import store from './store/store'

ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
        <LanguageProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </LanguageProvider>
    </Provider>,
    // </React.StrictMode>
    document.getElementById('root')
)
