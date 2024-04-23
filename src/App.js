import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/Products";
import MainLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductDetail from "./pages/ProductDetail";
 

const router = createBrowserRouter([
  { path: '/', 
   element: <MainLayout />,
   errorElement: <ErrorPage />, 
   children: [
    {index: true, element: <HomePage />}, // Or {path: '/', element: <HomePage />}, 
    {path: '/products', element: <ProductPage />}, //Or Relative Path  {path: 'products', element: <ProductPage />}, 
    {path: '/products/:productId', element: <ProductDetail />} //Or Relative Path {path: 'products/:productId', element: <ProductDetail />}
  ]},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
