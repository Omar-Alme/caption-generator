import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutPage from "./pages/AboutPage"
import CaptionGenerator from "./pages/CaptionGenerator"
import FavoritesPage from "./pages/FavoritesPage"
import HomePage from "./pages/HomePage"

function App() {
  

  return (
    <BrowserRouter>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/generate" element={<CaptionGenerator />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
