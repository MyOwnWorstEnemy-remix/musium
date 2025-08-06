import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../layout/Layout';
import MainPage from '../pages/main/MainPage';
import DiscoverPage from '../pages/discover/DiscoverPage';
import PlaylistPage from '../pages/playlists/PlaylistPage';
import UserTracksPage from '../pages/user-tracks/UserTracksPage';
import ProfilePage from "../pages/profile/ProfilePage";
import SignUpPage from "../pages/sign-up/SignUpPage";
import NotFoundPage from "../pages/not-found/NotFoundPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/discover",
          element: <DiscoverPage />,
        },
        {
          path: "/playlists",
          element: <PlaylistPage />,
        },
        {
          path: "/user-tracks",
          element: <UserTracksPage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/sign-up",
          element: <SignUpPage />,
        },
        {
          path: "/not-found",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
