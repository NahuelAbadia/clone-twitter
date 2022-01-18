import React, { useState } from 'react'
import {
   Box,
   Button,
   CircularProgress,
   Divider,
   Icon,
   Image,
   Stack,
   StackDivider,
   Text,
   Textarea,
   useColorModeValue,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from 'framer-motion';
import { BsImage, BsPlus, BsStar } from 'react-icons/bs';
import { AiOutlineGif, AiOutlineSmile, AiOutlineCalendar } from 'react-icons/ai';
import { RiBarChartHorizontalFill } from 'react-icons/ri';

const Feed = () => {

   const [tweets, setTweets] = useState([])

   const [tweet, setTweet] = useState({ texto: "", hora: 0 })

   const handleChange = e => {
      setTweet({
         ...tweet,
         [e.target.name]: e.target.value,
         hora:numeroRandom()
      }
      )
   }
   //Numero random para la hora del tweet
   const numeroRandom = () => (Math.floor(Math.random() * (24 - 1) + 1))
   //Funcion para twittear
   const handleTweets = () => (setTweets((tweets) => tweets.concat(tweet)))
   //Seteo setTweet con un string vacio para que luego de escribir un tweet quede vacio el textarea
   const handleClick = () => {
      handleTweets()
      setTweet({texto:""})
   }

   const progressColor = useColorModeValue("gray.100", "whiteAlpha.300")
   const phColor = useColorModeValue("inherit", "gray.600")
   const textColor = useColorModeValue("inherit", "whiteAlpha.800") //cambiar color de todos los textos em dark mode

   return (
      <Stack direction="row" divider={<StackDivider />} spacing={0}>
         <Stack divider={<StackDivider />} spacing={0} maxW={600} w="100%">
            <Stack
               direction="row"
               alignItems={"center"}
               justifyContent={"space-between"}
               px={4}
               py={3}
            >
               <Text fontWeight={"bold"} fontSize="2xl">Inicio</Text>
               <Icon as={BsStar} w={5} h={5} color="primary.500" />
            </Stack>
            <Stack direction="row" py={2} px={4} spacing={4}>
               <Image src="https://pbs.twimg.com/profile_images/1397638387901861892/SJ1k1Xyq_400x400.jpg" borderRadius="50%" w={12} h={12} />
               <Stack divider={<StackDivider />} w="100%">
                  <Textarea
                     fontSize="xl"
                     fontWeight="500"
                     variant="unstyled"
                     placeholder='¿Que está pasando?'
                     _placeholder={{ color: { phColor }, fontWeight: "semibold", fontSize: "lg" }}
                     name="texto"
                     value={tweet.texto}
                     onChange={handleChange}
                  />
                  <Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
                     <Stack direction="row" color="primary.500" spacing={4}>
                        <Icon as={BsImage} w={5} h={5} />
                        <Icon as={AiOutlineGif} w={5} h={5} />
                        <Icon as={RiBarChartHorizontalFill} w={5} h={5} />
                        <Icon as={AiOutlineSmile} w={5} h={5} />
                        <Icon as={AiOutlineCalendar} w={5} h={5} />
                     </Stack>
                     <Stack direction="row" spacing={3}>
                        <Stack direction="row" divider={<StackDivider />} spacing={4} alignItems="center">
                           <CircularProgress value={20} trackColor={progressColor} size={6} />
                           <Box
                              as="button"
                              cursor="pointer"
                              alignItems="center"
                              borderColor="primary.500"
                              borderRadius="50%"
                              borderWidth={1}
                              display="flex"
                              justifyContent="center"
                              poition="relative"
                              h={8}
                              w={8}
                           >
                              <Icon
                                 as={BsPlus}
                                 color="primary.500"
                                 position="absolute"
                                 h={6}
                                 w={6}
                              />
                           </Box>

                        </Stack>
                        <Button
                           colorScheme="primary"
                           onClick={handleClick}
                        >
                           Twittear
                        </Button>
                     </Stack>
                  </Stack>
               </Stack>
            </Stack>
            <Divider borderTopWidth={6}></Divider>
            <Stack
               divider={<StackDivider />}
               flex={1}
               maxH="100vh"
               maxW={600}
               w="100%"
               overflowY="auto"
               spacing={0}
               sx={{
                  "&::-webkit-scrollbar": {
                     display: "none",
                  },
               }}
            >
               {/* <AnimatePresence>
                  {tweets.map((id) => (
                     <Stack
                        key={id}
                        as={motion.div}
                        layoutId={id}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        initial={{ scale: 0 }}
                        direction="row"
                        maxW={480}
                        p={4}
                        spacing={4}
                        w="100%"
                        //Filtro los tweets y me quedo con los tweets que no sean iguales a id
                        onClick={() => setTweets((tweets) => tweets.filter(tweet => tweet !== id))}
                     >
                        <SkeletonCircle h={12} w={12} minH={12} minW={12} startColor='primary.50' endColor='primary.100' />
                        <Stack spacing={4} w="100%">
                           <Stack alignItems={"flex-end"} direction="row" spacing={2} >
                              <Skeleton startColor='primary.100' endColor='primary.50' h={6} w="120px" />
                              <Skeleton startColor='primary.100' endColor='primary.50' h={3} w="80px" />
                           </Stack>
                           <SkeletonText startColor='primary.100' endColor='primary.50' h="100%" noOfLines={6} spacing={2} />
                        </Stack>
                     </Stack>
                  ))}
               </AnimatePresence> */}

               <AnimatePresence>
                  {tweets.map((id) => (
                     <Stack
                        key={id}
                        as={motion.div}
                        layoutId={id}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        initial={{ scale: 0 }}
                        p={4}
                        maxW={480}
                        spacing={4}
                        w="100%"
                        direction="row"
                        //Filtro los tweets y me quedo con los tweets que no sean iguales a id
                        onClick={() => setTweets((tweets) => tweets.filter(tweet => tweet !== id))}
                     >
                        <Image src="https://pbs.twimg.com/profile_images/1397638387901861892/SJ1k1Xyq_400x400.jpg" objectFit={"contain"} borderRadius="50%" w={12} h={12} />
                        <Stack spacing={0} w="100%">
                           <Stack alignItems={"flex-end"} direction="row" spacing={1} >
                              <Text color={textColor} fontWeight={"semibold"}>Nahueee</Text>
                              <Text color="gray.500">@NahueAbadia · {id.hora}hs</Text>
                           </Stack>
                           <Text color={textColor}>{id.texto}</Text>
                        </Stack>

                     </Stack>
                  ))}
               </AnimatePresence>

            </Stack>
         </Stack>
         {/* <Text maxW={350} w="100%" bgColor="red">
            {""}
         </Text> */}
      </Stack>
   )
}

export default Feed
