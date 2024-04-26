import { setupStore } from "app/redux/store/store";
import App from "./app/App";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";

import './shared/i18n/i18n'

const store = setupStore()

render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)