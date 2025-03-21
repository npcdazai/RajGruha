import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/custom/Header"
import { Box, Container } from "@chakra-ui/react"

const App = () => {
  return (
    <Box bgColor="#F9FBFC">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App