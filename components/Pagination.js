import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import qs from 'qs'
import useRouter from 'next/router'


const Pagination = ({page, pageCount, redirectURL = '/'}) => {

  const router = useRouter
  const isNextDisabled = () => {
    return page >= pageCount;
  }

  const isPrevDisabled = () => {
    return page <= 1;
  }

  const handlePaginate = async (direction) => {
    if(direction === 1 && isNextDisabled()) {
      return;
    }

    if(direction === -1 && isPrevDisabled()) {
      return;
    }


    const queryString = qs.stringify({
      ...router.query,
      page: page + direction,
    });

    router.push(`${redirectURL}?${queryString}`);

  }
  return (
    <Box padding='2rem' display='flex' justifyContent='center' alignItems='center' gap='1rem'> 
      {isPrevDisabled() ? <Button width='100px' colorScheme='green' disabled>Previous</Button> : <Button onClick={() => handlePaginate(-1)} width='100px' colorScheme='green'>Previous</Button>}
      {isNextDisabled() ? <Button width='100px' colorScheme='green' disabled>Next</Button> : <Button onClick={() => handlePaginate(1)} width='100px' colorScheme='green'>Next</Button>}
    </Box>
  )
}

export default Pagination