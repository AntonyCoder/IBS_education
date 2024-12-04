import React from "react";
import { ErrorProvider } from "./components/modalError/errorContext";
import { Provider } from "react-redux";
import store from "./store";
import DesctopRouter from "./routes/desctopRouter";

const App = () => {
    return (
        <Provider store={store}>
            <ErrorProvider>
                    <DesctopRouter />
            </ErrorProvider>
        </Provider>
    );
};

export default App;