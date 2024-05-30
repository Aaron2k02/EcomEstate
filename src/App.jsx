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
import { listData } from "./lib/dummydata.js";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage.jsx";
import NewPostPage from "./routes/newPostPage/newPostPage.jsx";
import BarChart from "./components/barChart/BarChart.jsx";
import GeographyChart from "./components/geoChart/GeoChart.jsx";
import LineChart from "./components/lineChart/LineChart.jsx";
import PieChart from "./components/pieChart/PieChart.jsx";
import ProgressCircle from "./components/progressCircle/ProgressCircle.jsx";
import StatBox from "./components/statBox/StatBox.jsx";
import Dashboard from "./routes/analyticPage/AnalyticPage.jsx";

import EditPostPage from "./routes/editPostPage/editPostPage.jsx";

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
          path: "/:id/edit",
          element: <EditPostPage items={listData} />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />
        },
        {
          path: "/post/new",
          element: <NewPostPage />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/barChart",
          element: <BarChart />
        },
        {
          path: "/geoChart",
          element: <GeographyChart />
        },
        {
          path: "/lineChart",
          element: <LineChart />
        },
        {
          path: "/pieChart",
          element: <PieChart />
        },
        {
          path: "/progressCircle",
          element: <ProgressCircle />
        },
        {
          path: "/statBox",
          element: <StatBox />
        },
        {
          path: "/dashboard",
          element: <Dashboard />
        },
      ]
    }
  ]);

  return (

    <RouterProvider router={router} />
  );
}

export default App;
