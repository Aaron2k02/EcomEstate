import HomePage from "./routes/homePage/homePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import { listData } from "../../react-estate-ui/src/lib/dummydata";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout items={listData} />,
      children: [
        {
          path: "/",
          element: <HomePage items={listData} />
        },
        {
          path: "/list",
          element: <ListPage items={listData} />
        },
        {
          path: "/:id",
          element: <SinglePage items={listData} />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        }
      ]
    }
  ]);

  return (

    <RouterProvider router={router} />
  );
}

export default App;
