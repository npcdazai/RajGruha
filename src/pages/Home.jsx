import React from "react"
import HeroSection from "../components/pagesComponent/HeroSection"
import { Box, useBreakpointValue } from "@chakra-ui/react"
import WhyWeAre from "../components/pagesComponent/WhyWeAre"
import HeroSectionMobile from "../components/Mobile/HeroSectionMobile"


const Home = () => {
    const Hero = useBreakpointValue({
        base: <HeroSectionMobile />,
        lg: <HeroSection />,
    });
    return (
        <Box bgColor="#F9FBFC" h="100%">
            {Hero}
            <WhyWeAre />
        </Box>
    )
}
export default Home