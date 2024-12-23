import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './icons/style.css';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/contact/Contact";
import Project from "./Pages/Project/Project";
import NoPage from "./Pages/NoPage/NoPage";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/projects",
//         element: <Project />,
//       },
//       {
//         path: "*",
//         element: <NoPage />,
//       },
//     ],
//   },
// ]);
let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Project />} />
      <Route path="*" element={<NoPage />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

