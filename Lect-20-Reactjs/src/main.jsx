// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )





import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "vikas Heading"
);
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Vikas Heading No.01"
);

const sagar=<h1>sagar is a bad student</h1>;
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading1,
  sagar,
  sagar,
  sagar,
  sagar
]);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(container);


