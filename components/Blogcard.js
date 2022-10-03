import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Blogcard = (props) => {

    // 2022-10-02T06:45:04.703Z
    var dateAndTime = props.article.attributes.createdAt;

    
    // console.log(props.article.attributes.author);

    var date = dateAndTime.slice(0,10);
    var time = dateAndTime.slice(11,16);

    // console.log(process.env.NEXT_PUBLIC_API_BASE_URL);
    // console.log(props.article.attributes.author.data.attributes.firstname);
    console.log(props.article.attributes.body);

    // console.log(props.article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url);

    

  return (
    <>
        <Box padding='15px' marginTop='2rem' boxShadow='md' transition='200ms ease-in-out' backgroundColor='#F9F9F9' _hover={{cursor:'pointer', transform:'scale(1.01)'}}>
            <Text fontSize='25px' fontWeight='medium' marginBottom='1rem'>{props.article.attributes.Title}</Text>
            <Box display='flex' gap='7px' alignItems='center' marginBottom='1rem'>
                <Image height={9} width={9} marginRight='8px' borderRadius='50%' src={`http://localhost:1337${props.article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`} />
                <Text fontSize='15px'>{props.article.attributes.author.data.attributes.firstname}{' '}
                {props.article.attributes.author.data.attributes.lastname}</Text>
                <Text fontSize='15px' color='gray.500'>on {date} at {time}</Text>
            </Box>
            <Box >
                <Text color='gray.500'>
                    {props.article.attributes.shortDescription}
                </Text>
            </Box>
        </Box>

    </>
  )
}

export default Blogcard