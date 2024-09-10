import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/NAVBAR/Navbar.jsx";
import Sidebar from "./Components/SIDEBAR/Sidebar.jsx";
import List from "./Components/List.jsx";
import Footer from "./Footer.jsx";
import Note from "./Components/DATALIST/Note.jsx";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Componnent />} />
          <Route path="/newtask" element={<List />} />
          <Route path="/note" element={<Note />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

function Componnent() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Footer />
    </>
  );
}
