import { Box, Button, HStack, Image, Text } from "@chakra-ui/react"
import React from "react"
import { NavLink } from "react-router-dom"

const navItems = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "Teachers",
        link: "/teachers"
    },
    {
        id: 3,
        name: "Courses",
        link: "/courses"
    },
    {
        id: 3,
        name: "About Us",
        link: "/about-us"
    }
]

const Header = () => {
    return (
        <HStack bgColor="#F9FBFC" justifyContent="space-between" alignItems="center" px={8} >
            <Image src="src/assets/icon.png" height="70px" width="auto" />
            <HStack>
                {navItems.map((val) => {
                    return (
                        <NavLink style={({ isActive }) => (
                            {
                                color: isActive ? "#1f2f5d" : "#808080",
                                fontWeight: isActive ? 700 : 500

                            }
                        )} to={val.link}>
                            <Text mr={4} fontSize="sm" >{val.name}</Text>
                        </NavLink>
                    )
                })}
            </HStack>

            <Button bgColor={"#FACA10"} fontSize={"sm"}>
                Get in Touch
            </Button>
        </HStack>
    )
}

export default Header