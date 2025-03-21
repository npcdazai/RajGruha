import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const HeroSection = () => {
    return (
        <Box bgColor="#F9FBFC" position="relative" w={"100%"} h="100%" >
            <Image src='src\assets\img\heroSideStar.svg' position="absolute" top={10} />

            <HStack justifyContent="space-between" w="100%" alignItems="flex-start" px={14} py={12} h="100%" >
                <VStack bgColor="#F9FBFC" justifyContent="flex-start" px={4} w="40%" alignItems="center" h="100%">

                    
                    <VStack w="100%" justifyContent="flex-start" alignItems="flex-start" >
                        <Text as={"h1"} lineHeight="60px" color="#1C1C1C" fontSize="xxx-large" fontWeight={500}>
                            Premium <span style={{ color: "#525FE1" }}>private coaching</span> for <br /> exceptional minds!
                        </Text>
                        <Text as="span" fontWeight={400} color="#808080">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.....
                        </Text>
                    </VStack>
                  <HStack w="100%" justifyContent="flex-start">
                  <Button bgColor="#FFCF59" color="#1C1C1C">
                        Join now
                    </Button>
                    <Button color="#1C1C1C" bgColor="#F9FBFC" >
                        <Image src='src/assets/img/play.png' />
                        See how it works?
                    </Button>
                  </HStack>
                </VStack>
            </HStack>
        </Box>
    )
}

export default HeroSection