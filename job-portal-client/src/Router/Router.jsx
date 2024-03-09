import {  createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob"
import MyJobs from "../Pages/MyJobs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children : [
        { path : "/", element : <Home/> },
        { path : "/about", element : <About/> },
        { path : "/post-job", element : <CreateJob/>},
        { path : "/my-job", element : <MyJobs/>},
      ]
    },
  ]);   

  export default router;