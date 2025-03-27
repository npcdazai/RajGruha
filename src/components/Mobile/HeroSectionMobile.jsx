import { Box, Button, Circle, HStack, Image, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import heroSideStar from "../../assets/img/heroSideStar.svg";
import shapePng from "../../assets/shape.png";
import redShape from "../../assets/redShape.svg";
import manPng from "../../assets/man.png";
import countsection from "../../assets/img/countsection.svg";
import play from "../../assets/img/play.png";

const values = [
    { id: 1, totalNum: 150, captions: "Total Courses" },
    { id: 2, totalNum: 250, captions: "Total Instructor" },
    { id: 3, totalNum: 35, captions: "Total Student" },
];

const HeroSectionMobile = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box bgColor="#F9FBFC" position="relative" w="100%" h="100%">
            <Image src={heroSideStar} position="absolute" top={0} left={0} w={isMobile ? "40px" : "auto"} />

            <VStack w="100%" spacing={8} px={{ base: 0, md: 14 }} py={{ base: 8, md: 12 }}>
                <VStack textAlign={isMobile ? "center" : "left"} w={{ base: "100%", md: "50%" }} alignItems={isMobile ? "center" : "flex-start"}>
                    <Text as="h1" lineHeight="1.2" color="#1C1C1C" fontSize={{ base: "2xl", md: "4xl" }} fontWeight={500}>
                        Premium <span style={{ color: "#525FE1" }}>private coaching</span> for exceptional minds!
                    </Text>
                    <Text as="span" fontWeight={400} color="#808080" fontSize={{ base: "sm", md: "md" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
                    </Text>
                    <HStack spacing={4} flexWrap={isMobile ? "wrap" : "nowrap"} justifyContent={isMobile ? "center" : "flex-start"}>
                        <Button bgColor="#FFCF59" color="#1C1C1C">Join now</Button>
                        <Button color="#1C1C1C" bgColor="#F9FBFC" leftIcon={<Image src={play} boxSize={5} />}>
                            See how it works?
                        </Button>
                    </HStack>
                </VStack>
                <VStack position="relative" w={{ base: "100%", md: "40%" }} h={{ base: "auto", md: "100vh" }}>
                    <Image src={shapePng} h={{ base: "250px", md: "500px" }} />
                    <Image position="absolute" top={isMobile ? "15%" : "28"} zIndex={12} src={manPng} h={{ base: "80%", md: "106%" }} />
                    <Image position="absolute" src={redShape} bottom={16} left={{ base: "70px", md: "80px" }} w={{ base: "80px", md: "auto" }} />
                </VStack>
            </VStack>

            <HStack position="relative" w="100%" mt={-12} p={6} bgImage={`url(${countsection})`} bgSize="cover" backgroundPosition="center" flexWrap={isMobile ? "wrap" : "nowrap"} justifyContent="center">
                {values.map((val) => (
                    <VStack key={val.id} alignItems="center" textAlign="center">
                        <Text fontSize={{ base: "2xl", md: "46px" }} fontWeight={900}>{val.totalNum}</Text>
                        <Text fontSize={{ base: "xs", md: "sm" }} fontWeight={400}>{val.captions}</Text>
                    </VStack>
                ))}
                <Circle bgColor="#FFCF59" position="absolute" h={{ base: "80px", md: "162px" }} w={{ base: "80px", md: "162px" }} bottom={{ base: "-2rem", md: "-4rem" }} left={{ base: "-2rem", md: "-4rem" }} />
                <Circle bgColor="#FFCF59" position="absolute" h={{ base: "60px", md: "124px" }} w={{ base: "60px", md: "124px" }} top={{ base: "-2rem", md: "-4rem" }} right={{ base: "-1rem", md: "-3rem" }} />
            </HStack>
        </Box>
    );
};

export default HeroSectionMobile;