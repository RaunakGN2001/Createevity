import { Box, Button, Image } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <>
        <Box display='flex' backgroundColor='white' justifyContent='space-between' alignItems='center' paddingTop={5} paddingBottom={5}> 
            <Image width='170px' src='/Createevity.png'/>
            <Button background='none' fontSize='20px'>All Articles</Button>
            <Box display='flex' gap='10px'>
                <Button paddingInline='20px' background='none' fontSize='20px'>Login</Button>
                <Button colorScheme='green' paddingInline='20px' fontSize='20px'>Sign up</Button>
            </Box>
        </Box>
    </>
  )
}

export default Navbar