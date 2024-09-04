import './App.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './config/tanstack-query-client'
import Homepage from './pages/Homepage'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Homepage />
    </QueryClientProvider>
  )
}

export default App
