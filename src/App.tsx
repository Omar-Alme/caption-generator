import { BrowserRouter, Route, Routes } from "react-router-dom"
import ChatLayout from "./layouts/ChatLayout"
import LandingLayout from "./layouts/LandingLayout"
import CaptionGenerator from "./pages/CaptionGenerator"
import FavoritesPage from "./pages/FavoritesPage"
import LandingPage from "./pages/LandingPage"
import NotFound from "./pages/NotFound"
import { FavoritesProvider } from "./providers/FavoriteCaptionProvider"

function App() {


  return (
    <FavoritesProvider>
      <BrowserRouter>
      <Routes>
        {/* Landing Page Layout */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>

        {/* Chat Page Layout */}
        <Route element={<ChatLayout />}>
          <Route path="/generator" element={<CaptionGenerator />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
    </FavoritesProvider>
    
  )
}

export default App
