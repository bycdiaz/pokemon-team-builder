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
        errorElement: (
          <Error
            errorMessage="Oh no! This page doesn't exist!"
          />
        ),
      },
      {
        path: `/${featured}`,
        element: (
          <App
            child={<ContentContainer sectionName={featured} />}
          />
        ),
        errorElement: (
          <Error
            errorMessage="Oh no! This page doesn't exist!"
          />
        ),
      },
      {
        path: `/${cart}`,
        element: (
          <App
            child={<ContentContainer sectionName={cart} />}
          />
        ),
        errorElement: (
          <Error
            errorMessage="Oh no! This page doesn't exist!"
          />
        ),
      }
    ])
  } />;
};

export default Router;
