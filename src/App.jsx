import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import PagesLayout from "./layout/PagesLayout";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import Faq from "./pages/help/Faq";
import GoogleSignin from "./pages/GoogleSignin";
import IndexSearchPage from "./components/Index/IndexSearchPage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PagesLayout />}>
      <Route index path="home" element={<Home />} />

      <Route path="register" element={<Register />} />
      <Route path="signin" element={<Signin />} />
      <Route path="google-signin" element={<GoogleSignin />} />

      <Route path="faq" element={<Faq />} />
      <Route path="search" element={<IndexSearchPage />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
