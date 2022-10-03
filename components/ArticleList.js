import { Box, Grid, GridItem, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Blogcard from './Blogcard';

const Article = (props) => {

    console.log(props.article);

    return (
        <VStack>
            <Image src=''/>
            <Box>
                <Text>{props.article.attributes.Title}</Text>
            </Box>
        </VStack>
    )
}

const ArticleList = (props) => {

    const articlesArray = props.articlesArray;

    const articlesArrayMod = articlesArray.map((article) => {
        return <Blogcard key={article.id} article={article} />
    })

    console.log(props.articlesArray);
    return (
        <>  
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                {articlesArrayMod}
            </Grid>
        </>
    )
}

export default ArticleList