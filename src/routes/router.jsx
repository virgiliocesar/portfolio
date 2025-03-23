
import { createBrowserRouter } from "react-router";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import Projects from "../Pages/Projects";
import Skills from "../Pages/Skills";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import SinglePageProject from "../Pages/SinglePage/SinglePageProject";


 const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <About/>,
            },
            {
                path: "/skills",
                element: <Skills />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/project/:id",
                element: <SinglePageProject/>
            },
            
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
]);

export default router;