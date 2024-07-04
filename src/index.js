// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";
// import { createBrowserRouter, RouterProvider} from "react-router-dom"
// import Home from "./components/Home";
// import About from "./components/About";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home />
//     },
//     {
//         path: "/about",
//         element: <About />
//     }
// ])

// // ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <RouterProvider router={router} />
//     </React.StrictMode>
// )


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import About from "./components/About";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);