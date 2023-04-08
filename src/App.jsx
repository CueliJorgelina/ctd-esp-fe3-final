import { Navbar } from "../src/components/Navbar/Navbar"
import { Navigate, Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer/Footer"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { Favs } from "./pages/Favs"
import { Detail } from "./pages/Detail"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact/>} />
        <Route path="favs" element={<Favs />} />
        <Route path="dentist/:id" element={<Detail/>} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  )
};

export default App;
