import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/config/tanstack-query-client";
import Homepage from "@/pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookDetails from "@/pages/Bookdetails";
import Userhomepage from "@/pages/Userhomepage";
import { AuthProvider } from "@/context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/user/:id",
    element: <Userhomepage />,
  },
  {
    path: "/book/:id",
    element: <BookDetails />,
  },
]);

//TODO: create a navbar component
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
