import "../css/app.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { createTheme, ThemeProvider } from "@mui/material";
import { blue } from "@mui/material/colors";

const App = () => {
    const theme = createTheme({
        palette: { primary: blue },
    });
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
