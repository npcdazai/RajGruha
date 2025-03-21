import React from "react"
import HeroSection from "../components/pagesComponent/HeroSection"
import { Box } from "@chakra-ui/react"
import WhyWeAre from "../components/pagesComponent/WhyWeAre"

const Home = ()=>{
    return(
        <Box bgColor="#F9FBFC" h="100%">
            <HeroSection/>
            <WhyWeAre/>
        </Box>
    )
}
export default Home