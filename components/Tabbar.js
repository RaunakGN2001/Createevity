import { Box, Button, Input, InputGroup, InputLeftElement, Link, Text } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import React from 'react'
import { useRouter } from 'next/router'

const Tab = (props) => {

    console.log(props);
    return (
        <Text fontWeight='medium' _hover={{color:'black', cursor:'pointer'}} _active={{color:'black'}} color='gray.500' background='none' paddingBottom='2px' marginRight='1.5rem'><Link _hover={{textDecoration:'none'}} href='#'>{props.Title}</Link></Text>
    )
}

const Tabbar = (props) => {


    // console.log(props.categoriesArray)

    const router = useRouter();


    const categoryArrayMod = props.categoriesArray.map((category) => {
        return <Tab Title={category.attributes.Title} />
    })

  return (

    <>  
        <Box paddingBottom='0px' display='flex' justifyContent='space-between' alignItems='center' marginTop='2rem' borderBottom='1px solid #EAEAEA'> 
            <Box display='flex' justifyContent='center' alignItems='center' gap='15px'>
                <Text borderBottom={router.pathname === '/' ? '3px solid black' : 'none'} paddingTop='6px' paddingBottom='6px' fontWeight='medium' _hover={{color:'black', cursor:'pointer'}} color={router.pathname === '/' ? 'black' : 'gray.500'} background='none' marginRight='1.5rem'>Recent</Text>
                {categoryArrayMod}
            </Box>
            <Box>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'
                    children={<Search2Icon />} />
                    <Input placeholder='Search' width='auto' border='none' />
                </InputGroup>
            </Box>
        </Box>
    </>
  )
}

export default Tabbar