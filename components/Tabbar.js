import { Box, Button, Input, InputGroup, InputLeftElement, Link, Text } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import React from 'react'
import { useRouter } from 'next/router'



const handleOnSearch = (searchQuery) => {
    // console.log(searchQuery);
}

const Tab = (props) => {

    var routerTab = useRouter();

    // console.log(props)

    const isActiveLink = (props) => {
        // console.log(props.Slug)
        return props.category.Slug === routerTab.query.category;
    }


    // console.log('test',routerTab.query.category);

    return (
        <Text fontWeight='medium' borderBottom={isActiveLink(props) ? '3px solid black' : 'none'} color={routerTab.query.category === props.category.Title.toLowerCase() ? 'black' : 'gray.500' } _hover={{color:'black', cursor:'pointer'}} _active={{color:'black'}} background='none' paddingTop='6px' paddingBottom='6px' marginRight='1.5rem'><Link href={`/category/${props.category.Slug}`} _hover={{textDecoration:'none'}} >{props.category.Title}</Link></Text>
    )
}

const Tabbar = (props) => {


    // console.log(props.categoriesArray)

    const router = useRouter();

    // console.log(props)

    const categoryArrayMod = props.categoriesArray.map((category) => {
        return <Tab key={category.id} category={category.attributes} />
    })


  return (

    <>  
        <Box paddingBottom='0px' display='flex' justifyContent='space-between' alignItems='center' marginTop='2rem' borderBottom='1px solid #EAEAEA'> 
            <Box display='flex' justifyContent='center' alignItems='center' gap='15px'>
                <Link borderBottom={router.pathname === '/' ? '3px solid black' : 'none'} paddingTop='6px' paddingBottom='6px' fontWeight='medium' _hover={{color:'black', cursor:'pointer'}} color={router.pathname === '/' ? 'black' : 'gray.500'} background='none' marginRight='1.5rem' href='/'>Recent</Link>
                {categoryArrayMod}
            </Box>
            <Box>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'
                    children={<Search2Icon />} />
                    <Input onChange={(e) => handleOnSearch(e.target.value)}
                    type='text' placeholder='Search' width='auto' border='none' />
                </InputGroup>
            </Box>
        </Box>
    </>
  )
}

export default Tabbar