import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './components/layout/DefaultLayout'
import { History } from './pages/History'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/history" element={<DefaultLayout />}>
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
