import React from 'react'
import { Box, Button, Container, Icon, Image, Stack, StackDivider, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link, useLocation } from 'react-router-dom';
//Icons
import { FaTwitter } from 'react-icons/fa'
import {
  BsHouse,
  BsHouseFill,
  BsHash,
  BsBell,
  BsBellFill,
  BsEnvelope,
  BsEnvelopeOpenFill,
  BsBookmark,
  BsBookmarkFill,
  BsList,
  BsPerson,
  BsThreeDots,
  BsPersonFill,
}
  from 'react-icons/bs'

//Sidebar
const LINKS = [
  {
    href: "/home",
    text: "Inicio",
    activeIcon: BsHouseFill,
    inactiveIcon: BsHouse,
  },
  {
    href: "/explore",
    text: "Explorar",
    activeIcon: BsHash,
    inactiveIcon: BsHash,
  },
  {
    href: "/notification",
    text: "Notificaciones",
    activeIcon: BsBellFill,
    inactiveIcon: BsBell,
  },
  {
    href: "/messages",
    text: "Mensajes",
    activeIcon: BsEnvelopeOpenFill,
    inactiveIcon: BsEnvelope,
  },
  {
    href: "/saves",
    text: "Guardados",
    activeIcon: BsBookmarkFill,
    inactiveIcon: BsBookmark,
  },
  {
    href: "/lists",
    text: "Listas",
    activeIcon: BsList,
    inactiveIcon: BsList,
  },
  {
    href: "/profile",
    text: "Perfil",
    activeIcon: BsPersonFill,
    inactiveIcon: BsPerson,
  },
  {
    href: "/options",
    text: "Más opciones",
    activeIcon: BsThreeDots,
    inactiveIcon: BsThreeDots,
  },
]

const Layout = ({ children }) => {

  const { toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue("primary.500", undefined)
  const userColor = useColorModeValue(undefined, "white")
  const textColor = useColorModeValue("inherit","whiteAlpha.800") //cambiar color de todos los textos em dark mode
  const { pathname } = useLocation()

  return (
    <Container
      maxW="container.xl"
      alignSelf={"center"}
      h="100%"
      px={0}
      color={textColor}
    >
      <Stack direction="row" h="100%" divider={<StackDivider />} >
        <Stack justifyContent={"space-between"}>
          <Stack
            py={5}
            px={6}
            minW={72}
            spacing={6}
          >
            <Icon as={FaTwitter} color={logoColor} w={8} h={8} cursor="pointer" onClick={toggleColorMode} />
            <Stack pt={2} spacing={7} fontWeight={"bold"} fontSize={"xl"}>
              {LINKS.map(link => <Link to={link.href} key={link.href}>
                <Stack
                  direction="row"
                  alingItems="center"
                  spacing={5}
                  color={pathname === link.href ? "primary.500" : 'inherit'}
                >
                  <Icon as={pathname === link.href ? link.activeIcon : link.inactiveIcon} w={7} h={7} />
                  <Text>{link.text}</Text>
                </Stack>
              </Link>)}
            </Stack>
            <Button colorScheme={"primary"} size={"lg"} w="100%">Twittear</Button>
          </Stack>

          <Stack direction="row" alignItems={"center"} justifyContent={"space-between"} p={4}>
            <Stack direction="row" alignItems={"center"}>
              <Image src="https://pbs.twimg.com/profile_images/1397638387901861892/SJ1k1Xyq_400x400.jpg" objectFit={"contain"} borderRadius="50%" w={10} h={10} />
              <Stack spacing={-1}>
                <Text color={userColor} fontWeight={"semibold"}>Nahueee</Text>
                <Text color="gray.500">@NahueAbadia</Text>
              </Stack>
            </Stack>
            <Stack direction="row">
              <Icon as={BsThreeDots} cursor="pointer"></Icon>
            </Stack>
          </Stack>

        </Stack>
        <Box px={5} w="100%">
          {children}
        </Box>
      </Stack>
    </Container>
  )
}

export default Layout
