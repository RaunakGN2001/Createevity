import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box position='absolute' bottom='0' left='0' width='100%'>
        <Box display='flex' justifyContent='center' padding={3} alignItems='center'>
            <Text fontSize='sm' color='gray.500'>© 2022 Createevity . Made with ❤️ by @RaunakGN2001</Text>
        </Box>
    </Box>
  )
}

export default Footer