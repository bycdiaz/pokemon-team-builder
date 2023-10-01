import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ContentContainer from "./components/ContentContainer";
import { featured, cart } from "./data/types";

const Router = () => {
  return <RouterProvider router={
    createBrowserRouter([
      {
        path: "/",
        element: <App />,
        // errorElement: <ErrorPage />,
      },
      {
        path: `/${featured}`,
        element: (
          <App
            child={<ContentContainer sectionName={featured} />}
          />
        )
        ,
        // errorElement: <ErrorPage />,
      },
      {
        path: `/${cart}`,
        element: (
          <App
            child={<ContentContainer sectionName={cart} />}
          />
        )
        ,
        // errorElement: <ErrorPage />,
      }
    ])
  } />;
};

export default Router;
