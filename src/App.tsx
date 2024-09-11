import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/config/tanstack-query-client";
import Homepage from "@/pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookDetails from "@/pages/Bookdetails";
import Userhomepage from "@/pages/Userhomepage";
import { AuthProvider } from "@/context/AuthContext";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/user/",
        element: <Userhomepage />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
