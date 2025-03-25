import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Teachers", link: "/teachers" },
    { id: 3, name: "Courses", link: "/courses" },
    { id: 4, name: "About Us", link: "/about-us" }
];

const Header = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
        >
            <HStack position="sticky" top={0} zIndex={100} bgColor="#F9FBFC" justifyContent="space-between" alignItems="center" px={8} >
                <Image src="src/assets/icon.png" height="70px" width="auto" />
                <HStack>
                    {navItems.map((val, index) => (
                        <motion.div 
                            key={val.id} 
                            initial={{ opacity: 0, x: -20 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? "#1f2f5d" : "#808080",
                                fontWeight: isActive ? 700 : 500
                            })} to={val.link}>
                                <Text mr={4} fontSize="sm">{val.name}</Text>
                            </NavLink>
                        </motion.div>
                    ))}
                </HStack>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Button bgColor={"#FACA10"} fontSize={"sm"}>
                        Get in Touch
                    </Button>
                </motion.div>
            </HStack>
        </motion.div>
    );
};

export default Header;
