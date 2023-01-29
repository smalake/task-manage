import "../css/app.css";
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    const title: string = "This is React × Laravel App";
    return <h1>{title}</h1>;
};

ReactDOM.render(<App />, document.getElementById("app"));
