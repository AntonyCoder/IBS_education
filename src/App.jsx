import React from "react";
import { HashRouter as Router} from "react-router-dom";
import { ErrorProvider } from "./components/modalError/errorContext";
import { Provider } from "react-redux";
import store from "./store";
import DesctopRouter from "./routes/desctopRouter";

const App = () => {
    return (
        <Provider store={store}>
            <ErrorProvider>
                <Router>
                    <DesctopRouter />
                </Router>
            </ErrorProvider>
        </Provider>
    );
};

export default App;