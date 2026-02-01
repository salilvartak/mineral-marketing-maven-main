import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { 
  createBrowserRouter, 
  RouterProvider, 
  Outlet, 
  ScrollRestoration 
} from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Infrastructure from "./pages/Infrastructure";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const RootLayout = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <ScrollRestoration /> 
    <Outlet />
  </TooltipProvider>
);


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/about", element: <About /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:productId", element: <ProductDetail /> },
      { path: "/infrastructure", element: <Infrastructure /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

export default App;