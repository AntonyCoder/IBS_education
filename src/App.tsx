import React from "react";
import { ErrorProvider } from "./components/modalError/errorContext";
import { Provider } from "react-redux";
import store from "./store";
import DesctopRouter from "./routes/desctopRouter";
import { StyledEngineProvider } from "@mui/styled-engine";

const App: React.FC = () => {
    return (
        <StyledEngineProvider injectFirst>
            <Provider store={store}>
                <ErrorProvider>
                    <DesctopRouter />
                </ErrorProvider>
            </Provider>
        </StyledEngineProvider>
    );
};

export default App;