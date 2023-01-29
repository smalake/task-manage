import "../css/app.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material";
import { blue } from "@mui/material/colors";
import { RecoilRoot } from "recoil";

const App = () => {
    const theme = createTheme({
        palette: { primary: blue },
    });
    return (
        <ThemeProvider theme={theme}>
            <RecoilRoot>
                <BrowserRouter>
                    <Routes>
                        <Route>
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                        </Route>
                        <Route>
                            <Route path="home" element={<Home />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </RecoilRoot>
        </ThemeProvider>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
