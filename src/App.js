import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/Products";
import MainLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
 

const router = createBrowserRouter([
  { path: '/', 
   element: <MainLayout />,
   errorElement: <ErrorPage />, 
   children: [
    {path: '/', element: <HomePage />},
    {path: '/products', element: <ProductPage />}
  ]},
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
