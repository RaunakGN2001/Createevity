import { Box, Button, Image } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <Box display='flex' outline='auto' backgroundColor='black' justifyContent='space-between' alignItems='center'> 
        <Image paddingLeft='10px' width='140px' src='/Createevity.png'/>
        <Box display='flex' gap='10px' marginRight='10px'>
            <Button paddingInline='20px'>Login</Button>
            <Button colorScheme='green' paddingInline='20px'>Sign up</Button>
        </Box>
    </Box>
    </>
  )
}

export default Navbar