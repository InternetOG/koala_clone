import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import RootLayout from './layouts/RootLayout'
import HomePage from './pages/HomePage'
import ErrorBoundary from './pages/ErrorBoundary'
import Security from './pages/Security'
import News from './pages/News'
import Swag from './pages/Swag'
import Download from './pages/Download'

// import SupportLayout from './layouts/SupportLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />} errorElement={<ErrorBoundary />}>
        <Route index element={<HomePage />} />
        <Route path='security' element={<Security />} errorElement={<ErrorBoundary />} />
        <Route path='news' element={<News />} />
        <Route path='swag' element={<Swag />} />
        <Route path='download' element={<Download />} />
      </Route>
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
