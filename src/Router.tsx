import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ContentContainer from "./components/ContentContainer";
import Error from "./components/Error";
import { featured, cart } from "./data/types";

const Router = () => {
  return <RouterProvider router={
    createBrowserRouter([
      {
        path: "/",
        element: <App />,
        errorElement: <Error />,
      },
      {
        path: `/${featured}`,
        element: (
          <App
            child={<ContentContainer sectionName={featured} />}
          />
        )
        ,
        errorElement: <Error />,
      },
      {
        path: `/${cart}`,
        element: (
          <App
            child={<ContentContainer sectionName={cart} />}
          />
        )
        ,
        errorElement: <Error />,
      }
    ])
  } />;
};

export default Router;
