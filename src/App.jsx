import React from "react"
import { Routes, Route, Router, BrowserRouter } from "react-router-dom"

import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"

// const routes = (
//   <Router>
//     <Routes>
//       <Route path="/dashboard"  element={<Home />} />
//       <Route path="/login"  element={<Login />} />
//       <Route path="/signup"  element={<SignUp />} />
//     </Routes>
//   </Router>
// )

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
