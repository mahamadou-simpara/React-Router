import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/Products";
import MainLayout from "./pages/Root";
 

const router = createBrowserRouter([
  { path: '/', 
   element: <MainLayout />, 
   children: [
    {path: '/', element: <HomePage />},
    {path: '/products', element: <ProductPage />}
  ]},
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
