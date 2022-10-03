import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Blogcard = (props) => {

    // 2022-10-02T06:45:04.703Z
    var dateAndTime = props.article.attributes.createdAt;

    var date = dateAndTime.slice(0,10);
    var time = dateAndTime.slice(11,16);



  return (
    <>
        <Box outline='auto' padding='10px'>
            <Text fontSize='20px' fontWeight='medium' marginBottom='5px'>{props.article.attributes.Title}</Text>
            <Box display='flex' gap='5px'>
                <Text fontSize='15px'>{props.article.attributes.author.data.attributes.firstname}{' '}
                {props.article.attributes.author.data.attributes.lastname}</Text>
                <Text fontSize='15px' color='gray.500'>on {date} at {time}</Text>
            </Box>
        </Box>

    </>
  )
}

export default Blogcard