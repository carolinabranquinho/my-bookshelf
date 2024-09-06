import './App.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './config/tanstack-query-client'
import Homepage from './pages/Homepage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BookDetails from './pages/Bookdetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/book/:id",
    element: <BookDetails />,
  },
]);


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
