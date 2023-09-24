import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ContentContainer from "./components/ContentContainer";
import { featured, search, team } from "./data/types";

const Router = () => {
  return <RouterProvider router={
    createBrowserRouter([
      {
        path: "/",
        element: <App />,
        // errorElement: <ErrorPage />,
      },
      {
        path: `/${search}`,
        element: (
          <App
            child={<ContentContainer sectionName={search} />}
          />
        )
        ,
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
        path: `/${team}`,
        element: (
          <App
            child={<ContentContainer sectionName={team} />}
          />
        )
        ,
        // errorElement: <ErrorPage />,
      }
    ])
  } />;
};

export default Router;
